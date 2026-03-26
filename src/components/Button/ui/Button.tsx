import React from 'react';

import classNames from 'classnames';

import type { IButtonProps } from '../types/Button';

import styles from './Button.module.scss';

export const Button: React.FC<IButtonProps> = ({
  label,
  status,
  buttonClickHandler,
  style,
}) => {
  return (
    <button
      className={classNames(styles['button'], {
        [styles['negative']]: status === 'negative',
        [styles['neutral']]: status === 'neutral',
        [styles['positive']]: status === 'positive',
      })}
      style={style}
      onClick={buttonClickHandler}
    >
      {label}
    </button>
  );
};
