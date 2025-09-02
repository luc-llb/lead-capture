import { Request, Response } from 'express';
import Lead from '../models/Lead';
import { ILeadService } from '../interfaces/ILeadService';

export class LeadController {
    private readonly crmService: ILeadService;

    constructor(service: ILeadService){
        this.crmService = service;
    }

    public async createLead(req: Request, res: Response) {
        const { name, email, phone } = req.body;
        const novoLead: Lead = {
            name,
            email,
            phone,
        };
        
        try {
            const response = await this.crmService.createLead(novoLead);
            res.status(201).json(response);
        } catch (error) {
            console.error('Error creating lead:', error);
            res.status(500).json({ error: 'Failed to create lead' });
            return;
        }
    }
}