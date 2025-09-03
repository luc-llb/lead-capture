import { useState, useCallback } from 'react';
import type { Lead, RequestState } from '../models/Lead.tsx';
import { leadService } from '../services/leadService';
import { ApiError } from '../services/apiService';

/**
 * Custom hook for managing lead submission
 * @returns {Object} - Hook state and submit function
 */
export const useLeadSubmission = () => {
    const [state, setState] = useState<RequestState>({
        loading: false,
        error: null,
        success: false,
    });

    const submitLead = useCallback(async (leadData: Lead) => {
        setState({
            loading: true,
            error: null,
            success: false,
        });

        try {
            const response = await leadService.createLead(leadData);
            
            setState({
                loading: false,
                error: null,
                success: true,
            });

            return response;
        } catch (error) {
            let errorMessage = 'An unexpected error occurred';

            if (error instanceof ApiError) {
                errorMessage = error.message;
            } else if (error instanceof Error) {
                errorMessage = error.message;
            }

            setState({
                loading: false,
                error: errorMessage,
                success: false,
            });

            throw error; // Re-throw to allow specific handling in the component
        }
    }, []);

    const resetState = useCallback(() => {
        setState({
            loading: false,
            error: null,
            success: false,
        });
    }, []);

    return {
        ...state,
        submitLead,
        resetState,
    };
};
