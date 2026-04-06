export type ButtonStatus = 'positive' | 'negative' | 'neutral';

export interface IButtonsProps {
  firstButton: string;
  firstButtonClickHandler: () => void;
  firstStatus: ButtonStatus;
  secondButton?: string;
  secondButtonClickHandler?: () => void;
  secondStatus?: ButtonStatus;
}
