import React from 'react';

import classnames from 'classnames';

import { Button } from '@/shared/Button';

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
      <Button
        label={firstButton}
        status={firstStatus}
        buttonClickHandler={firstButtonClickHandler}
      />
      {secondButton && secondStatus && secondButtonClickHandler && (
        <Button
          label={secondButton}
          status={secondStatus}
          buttonClickHandler={secondButtonClickHandler}
        />
      )}
    </div>
  );
};
