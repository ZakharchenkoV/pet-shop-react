export interface IButtonProps {
  label: string;
  status?: 'negative' | 'neutral' | 'positive';
  disabled?: boolean;
  buttonClickHandler: () => void;
  style?: React.CSSProperties;
  className?: string;
}
