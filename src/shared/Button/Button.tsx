import React from 'react';

import classNames from 'classnames';

import styles from './Button.module.scss';
import type { IButtonProps } from './types';

export const Button: React.FC<IButtonProps> = ({
  label,
  style,
  status,
  disabled,
  buttonClickHandler,
}) => {
  return (
    <button
      className={classNames(styles['button'], {
        [styles['negative']]: status === 'negative',
        [styles['neutral']]: status === 'neutral',
        [styles['positive']]: status === 'positive' && !disabled,
        [styles['disabled']]: disabled,
      })}
      style={style}
      onClick={buttonClickHandler}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
