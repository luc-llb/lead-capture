import './StylizedButton.css';
import type { ReactNode } from 'react';

interface StylizedButtonProps {
    children?: ReactNode;
    type?: "submit" | "reset" | "button";
}

export default function StylizedButton({ children, type }: StylizedButtonProps) {
    return (
        <button className="stylized-button" type={type}>
            {children ?? 'Enviar'}
        </button>
    );
}