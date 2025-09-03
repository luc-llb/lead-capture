// Lead model interface
export interface Lead {
    name: string;
    email: string;
    phone: string;
}

/// API responses
export interface ApiSuccessResponse<T = any> {
    status: 'success';
    data: T;
    message: string;
}

export interface ApiErrorResponse {
    status: 'error';
    message: string;
    statusCode: number;
    timestamp: string;
    path: string;
    details?: any;
}

export interface ApiConfig {
    baseURL: string;
    timeout: number;
}

export interface RequestState {
    loading: boolean;
    error: string | null;
    success: boolean;
}
