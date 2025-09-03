// Exportações principais do sistema de API
export { apiService, ApiError } from './apiService';
export { leadService, LeadService } from './leadService';
export { useLeadSubmission } from '../hooks/useLeads';
export type { Lead, ApiSuccessResponse, ApiErrorResponse, RequestState, ApiConfig } from '../models/Lead.tsx';
export { apiConfig, API_ENDPOINTS, DEFAULT_HEADERS } from '../config/api';
