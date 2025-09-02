import axios, { AxiosError } from 'axios';
import Lead from '../models/Lead';
import { ILeadService } from '../interfaces/ILeadService';
import { BadRequestException, ConflictException } from '../exceptions';

export default class LeadService implements ILeadService 
{
    private readonly apiUrl: string;
    private readonly apiKey: string;

    constructor() 
    {
        const apiUrl = process.env.CRM_API_URL || '';
        const apiEndPoint = process.env.CRM_END_POINT || '';
        this.apiKey = process.env.CRM_API_KEY || '';

        if (apiUrl === '' || apiEndPoint === '' || this.apiKey === '')
        {
            throw new Error('The base URL from API is not defined');
        }

        this.apiUrl = encodeURI(`${apiUrl}` + `${apiEndPoint}`);
    }

    private prepareData(data: Lead)
    {
        return {
            properties: {
                firstname: data.name,
                email: data.email,
                phone: data.phone,
                lifecyclestage: 'lead',
                hs_lead_status: 'NEW',
            }
        };
    }

    public async createLead(leadData: Lead): Promise<any> 
    {
        if (!leadData.name || !leadData.email || !leadData.phone) {
            throw new BadRequestException('Name, email and phone are required');
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(leadData.email)) {
            throw new BadRequestException('Invalid email format');
        }

        const headers = {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json'
        };
        const data = this.prepareData(leadData)
        
        try {
            const response = await axios.post(this.apiUrl, data, { headers });
            return response.data;
        } catch (error) {
            if (error instanceof AxiosError && error.response) {
                const status = error.response.status;
                const responseData = error.response.data;
                
                if (status === 409) {
                    throw new ConflictException('Lead already exists in the system');
                }

                if (status === 400) {
                    let message = 'Invalid data provided';
                    if (responseData && responseData.message) {
                        message = responseData.message;
                    } else if (responseData && responseData.errors && responseData.errors.length > 0) {
                        message = responseData.errors[0].message || message;
                    }
                    
                    throw new BadRequestException(message);
                }
            }

            console.error('Error creating lead:', error);
            throw error;
        }
    }
}