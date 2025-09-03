import './StylizedForms.css';
import StylizedInput from '../StylizedInput/StylizedInput';
import StylizedButton from '../StylizedButton/StylizedButton';

export default function StylizedForms() {
    return (
        <form action="" method="post" className='forms-container'>
            <StylizedInput type="text" placeholder="Nome completo" className="stylized-input" />
            <StylizedInput type="email" placeholder="Email" className="stylized-input" />
            <StylizedInput type="tel" placeholder="Telefone" className="stylized-input" />
            <StylizedButton type="submit">Enviar</StylizedButton>
        </form>
    );
}