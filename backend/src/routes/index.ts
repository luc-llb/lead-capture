import { Router } from 'express';
import { LeadController } from '../controllers/LeadController';
import LeadService from '../services/LeadService';

const router = Router();
const leadController = new LeadController(new LeadService());

export const setRoutes = (app: any) => {
    app.use('/', router);
    router.post('/leads', leadController.createLead.bind(leadController));
};