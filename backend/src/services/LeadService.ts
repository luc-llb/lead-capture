import axios from 'axios';
import Lead from '../models/Lead';
import { ILeadService } from '../interfaces/ILeadService';

export default class LeadService implements ILeadService {
    private readonly apiUrl: string;
    private readonly apiKey: string;

    constructor() {
        const apiUrl = process.env.CRM_API_URL || '';
        const apiEndPoint = process.env.CRM_END_POINT || '';
        this.apiKey = process.env.CRM_API_KEY || '';

        if (apiUrl === '' || apiEndPoint === '' || this.apiKey === '')
        {
            throw new Error('The base URL from API is not defined');
        }

        this.apiUrl = encodeURI(`${apiUrl}` + `${apiEndPoint}`);
    }

    private prepareData(data: Lead){
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

    public async createLead(leadData: Lead): Promise<any> {
        const headers = {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json'
        };
        const data = this.prepareData(leadData)
        try {
            const response = await axios.post(this.apiUrl, data, { headers });
            return response.data;
        } catch (error) {
            console.error('Error creating lead:', error);
            throw error;
        }
    }
}