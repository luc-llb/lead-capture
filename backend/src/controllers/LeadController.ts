import { Request, Response, NextFunction } from 'express';
import Lead from '../models/Lead';
import { ILeadService } from '../interfaces/ILeadService';

export class LeadController {
    private readonly crmService: ILeadService;

    constructor(service: ILeadService)
    {
        this.crmService = service;
    }

    public async createLead(req: Request, res: Response, next: NextFunction) 
    {
        try {
            const { name, email, phone } = req.body;
            const novoLead: Lead = {
                name,
                email,
                phone,
            };
            
            const response = await this.crmService.createLead(novoLead);
            res.status(201).json({
                status: 'success',
                data: response,
                message: 'Lead criado com sucesso'
            });
        } catch (error) {
            next(error);
        }
    }
}