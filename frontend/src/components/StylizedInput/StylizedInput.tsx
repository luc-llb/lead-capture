import './StylizedInput.css';

interface StylizedInputProps {
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

export default function StylizedInput(props: StylizedInputProps) {
  return (
    <>
      <input
        className={props.className || ''}
        type={props.type || 'text'}
        placeholder={props.placeholder || ''}
        value={props.value || ''}
        onChange={props.onChange}
      />
    </>
  );
}