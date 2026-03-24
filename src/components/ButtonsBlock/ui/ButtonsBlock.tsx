import React from 'react';
import classnames from 'classnames';
import type { IButtonsProps } from '../types/ButtonsBlock';

import styles from './ButtonsBlock.module.scss';

export const ButtonsBlock: React.FC<IButtonsProps> = ({
  firstButton,
  firstButtonClickHandler,
  firstStatus,
  secondButton,
  secondButtonClickHandler,
  secondStatus,
}) => {
  return (
    <div
      className={classnames(styles['buttons-block'], {
        [styles['twice']]: secondButton,
        [styles['alone']]: !secondButton,
      })}
    >
      <button
        className={classnames(styles['button'], {
          [styles['negative']]: firstStatus === 'negative',
          [styles['neutral']]: firstStatus === 'neutral',
          [styles['positive']]: firstStatus === 'positive',
        })}
        onClick={firstButtonClickHandler}
      >
        {firstButton}
      </button>
      {secondButton && (
        <button
          className={classnames(styles['button'], {
            [styles['negative']]: secondStatus === 'negative',
            [styles['neutral']]: secondStatus === 'neutral',
            [styles['positive']]: secondStatus === 'positive',
          })}
          onClick={secondButtonClickHandler}
        >
          {secondButton}
        </button>
      )}
    </div>
  );
};
