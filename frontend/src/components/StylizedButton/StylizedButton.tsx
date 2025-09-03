import './StylizedButton.css';
import type { ReactNode } from 'react';

interface StylizedButtonProps {
    children?: ReactNode;
    type?: "submit" | "reset" | "button";
    disabled?: boolean;
}

export default function StylizedButton({ children, type, disabled }: StylizedButtonProps) {
    return (
        <button className="stylized-button" type={type} disabled={disabled}>
            {children ?? 'Enviar'}
        </button>
    );
}