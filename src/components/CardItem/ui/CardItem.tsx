import styles from './CardItem.module.scss';
import type { ICardItem } from '../types/CardItem';
import React from 'react';
import { CardButtonsBlock } from '../../CardButtonsBlock';

export const CardItem: React.FC<ICardItem> = ({ name, img, remaining }) => {
  return (
    <>
      <div className={styles['card-wrapper']}>
        <img className={styles['card-image']} src={img} loading="lazy" />
        <h3 className={styles['card-header']}>{name}</h3>
        {remaining ? (
          <CardButtonsBlock leftButtonName="-" rightButtonName="+" />
        ) : (
          <h4 className={styles['card__out-of-stock']}>Товара нет в наличии</h4>
        )}
      </div>
    </>
  );
};
