export interface IButtonProps {
  label: string;
  status: 'negative' | 'neutral' | 'positive';
  buttonClickHandler: () => void;
  style?: React.CSSProperties;
  className?: string;
}
