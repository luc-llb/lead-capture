import React, { useState } from 'react';
import './StylizedForms.css';
import StylizedInput from '../StylizedInput/StylizedInput';
import StylizedButton from '../StylizedButton/StylizedButton';
import { useLeadSubmission } from '../../hooks/useLeads';
import type { Lead } from '../../models/Lead.tsx';

export default function StylizedForms() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    
    const { loading, error, success, submitLead, resetState } = useLeadSubmission();
    
    const data: Lead = { name, email, phone };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        try {
            await submitLead(data);
            setName('');
            setEmail('');
            setPhone('');
            setTimeout(() => {
                resetState();
            }, 3000);
        } catch (error) {
            console.error('Erro ao enviar lead:', error);
        }
    };
    
    return (
        <form action="" method="post" className='forms-container' onSubmit={handleSubmit}>
            {error && (
                <div className="error-message" style={{ color: 'red', marginBottom: '1rem' }}>
                    {error}
                </div>
            )}
            
            {success && (
                <div className="success-message" style={{ color: 'green', marginBottom: '1rem' }}>
                    Lead enviado com sucesso!
                </div>
            )}

            <StylizedInput
                type="text"
                placeholder="Nome completo"
                className="stylized-input"
                name='name'
                value={data.name}
                onChange={e => setName(e.target.value)}
                disabled={loading}
            />
            <StylizedInput
                type="email"
                placeholder="Email"
                className="stylized-input"
                name='email'
                value={data.email}
                onChange={e => setEmail(e.target.value)}
                disabled={loading}
            />
            <StylizedInput
                type="tel"
                placeholder="Telefone"
                className="stylized-input"
                name='phone'
                value={data.phone}
                onChange={e => setPhone(e.target.value)}
                disabled={loading}
            />
            <StylizedButton disabled={loading}>
                {loading ? 'Enviando...' : 'Enviar'}
            </StylizedButton>
        </form>
    );
}