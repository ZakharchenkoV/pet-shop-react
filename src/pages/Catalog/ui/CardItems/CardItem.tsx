import React from 'react';

import { Button } from '@/shared/Button';
import type { Product } from '@/shared/model';

import styles from './CardItem.module.scss';

export const CardItem: React.FC<Product> = ({
  name,
  img,
  remaining,
  description,
  price,
  children,
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
          children
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
