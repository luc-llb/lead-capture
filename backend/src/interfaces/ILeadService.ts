import Lead from "../models/Lead";

export interface ILeadService
{
    createLead(lead: Lead): Promise<any>;
}