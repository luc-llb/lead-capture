import type { ApiConfig } from '../models/Lead.tsx';

export const apiConfig: ApiConfig = {
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
    timeout: parseInt(import.meta.env.VITE_API_TIMEOUT) || 10000,
};

// API Endpoints
export const API_ENDPOINTS = {
    LEADS: '/leads',
} as const;

export const DEFAULT_HEADERS = {
    'Content-Type': 'application/json',
} as const;
