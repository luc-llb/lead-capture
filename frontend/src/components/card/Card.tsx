import { type ReactNode } from 'react';
import './Card.css';

interface CardProps {
    children?: ReactNode;
    title?: string;
}

export default function Card({ children, title = "Card Component" }: CardProps) {
    return (
        <div className="lead-card">
            <h1>{title}</h1>
            {children}
        </div>
    );
}