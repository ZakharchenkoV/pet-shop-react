import React from 'react';

import { CardButtonsBlock } from '../../CardButtonsBlock';
import type { ICardItem } from '../types/CardItem';

import styles from './CardItem.module.scss';

export const CardItem: React.FC<ICardItem> = ({
  name,
  img,
  remaining,
  description,
  price,
}) => {
  return (
    <>
      <article className={styles['card-wrapper']}>
        <div className={styles['card-info']}>
          <img className={styles['card-image']} src={img} loading="lazy" />
          <h3 className={styles['card-header']}>{name}</h3>
          <p>{description}</p>
        </div>
        <p>{`${price} ₽`}</p>
        {remaining ? (
          <CardButtonsBlock leftButtonName="-" rightButtonName="+" />
        ) : (
          <h4 className={styles['card__out-of-stock']}>Товара нет в наличии</h4>
        )}
      </article>
    </>
  );
};
