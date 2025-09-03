import type { ApiErrorResponse } from '../models/Lead.tsx';
import { apiConfig, DEFAULT_HEADERS } from '../config/api';

// Class to represent API errors
export class ApiError extends Error {
    public readonly statusCode: number;
    public readonly details?: any;

    constructor(message: string, statusCode: number, details?: any) {
        super(message);
        this.name = 'ApiError';
        this.statusCode = statusCode;
        this.details = details;
    }
}

class ApiService {
    private readonly baseURL: string;
    private readonly timeout: number;

    constructor() {
        this.baseURL = apiConfig.baseURL;
        this.timeout = apiConfig.timeout;
    }

    private async request<T>(
        endpoint: string,
        options: RequestInit = {}
    ): Promise<T> {
        const url = `${this.baseURL}${endpoint}`;
        
        const config: RequestInit = {
            ...options,
            headers: {
                ...DEFAULT_HEADERS,
                ...options.headers,
            },
        };

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), this.timeout);

            const response = await fetch(url, {
                ...config,
                signal: controller.signal,
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                const errorData: ApiErrorResponse = await response.json();
                throw new ApiError(
                    errorData.message || 'Erro na requisição',
                    response.status,
                    errorData
                );
            }

            return await response.json();
        } catch (error) {
            if (error instanceof ApiError) {
                throw error;
            }

            if (error instanceof Error && error.name === 'AbortError') {
                throw new ApiError('Timeout in API request', 408);
            }

            throw new ApiError(
                'Error in API request',
                0,
                error
            );
        }
    }

    // Generic POST method
    async post<T>(endpoint: string, data: any): Promise<T> {
        return this.request<T>(endpoint, {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }
}

// Singleton instance of the service
export const apiService = new ApiService();
