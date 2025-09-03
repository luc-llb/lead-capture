import type { Lead, ApiSuccessResponse } from '../models/Lead.tsx';
import { API_ENDPOINTS } from '../config/api';
import { apiService, ApiError } from './apiService';

class LeadService {
    
    // Criar um novo lead
    async createLead(leadData: Lead): Promise<ApiSuccessResponse> {
        try {
            this.validateLeadData(leadData);

            const response = await apiService.post<ApiSuccessResponse>(
                API_ENDPOINTS.LEADS,
                leadData
            );

            return response;
        } catch (error) {
            if (error instanceof ApiError) {
                // Re-throw API errors
                throw error;
            }
            
            // Wrap other errors
            throw new ApiError('Erro ao criar lead', 500, error);
        }
    }

    /**
     * Validate lead data before sending to API
     * @param leadData Lead data to validate
     */
    private validateLeadData(leadData: Lead): void {
        const errors: string[] = [];

        if (!leadData.name?.trim()) {
            errors.push('Name is required');
        }

        if (!leadData.email?.trim()) {
            errors.push('Email is required');
        } else if (!this.isValidEmail(leadData.email)) {
            errors.push('Email format is invalid');
        }

        if (!leadData.phone?.trim()) {
            errors.push('Phone is required');
        }

        if (errors.length > 0) {
            throw new ApiError(errors.join(', '), 400);
        }
    }

    /**
     * Define if the email format is valid using regex.
     * @param email Email to validate
     * @returns 
     */
    private isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

// Singleton instance of the lead service
export const leadService = new LeadService();
export { LeadService };
