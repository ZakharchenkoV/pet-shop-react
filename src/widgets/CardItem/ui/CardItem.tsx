import React from 'react';

import { CardButtonsBlock } from '@/features/CardButtonsBlock';
import { Button } from '@/shared/Button';

import type { ICardItem } from '../types/CardItem';

import styles from './CardItem.module.scss';

export const CardItem: React.FC<ICardItem> = ({
  id,
  shopId,
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
          <img className={styles['card-image']} src={img} alt={name} loading="lazy" />
          <h3 className={styles['card-header']}>{name}</h3>
          <p className={styles['card-description']}>{description}</p>
        </div>
        <p>{`${price} ₽`}</p>
        {remaining ? (
          <CardButtonsBlock
            id={id}
            img={img}
            name={name}
            price={price}
            shopId={shopId}
            remaining={remaining}
            description={description}
          />
        ) : (
          <Button
            label="Товара нет в наличии"
            buttonClickHandler={() => {}}
            disabled={true}
            style={{
              width: '100%',
              height: '50px',
              borderRadius: '25px',
            }}
          />
        )}
      </article>
    </>
  );
};
