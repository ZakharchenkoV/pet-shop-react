import React, { useMemo } from 'react';

import { CardItem } from '../../CardItem/ui/CardItem';
import type { CardItemsProps } from '../types/CardItems';

import styles from './CardItems.module.scss';

export const CardItems: React.FC<CardItemsProps> = ({
  cards,
  selectedShops,
}) => {
  const selectedIds = useMemo(
    () => new Set(selectedShops.map((shop) => shop.id)),
    [selectedShops]
  );

  return (
    <div className={styles['card-items']}>
      {cards
        .filter((card) => selectedIds.has(card.shopId))
        .map((card) => (
          <CardItem
            key={card.id}
            id={card.id}
            shopId={card.shopId}
            name={card.name}
            img={card.img}
            remaining={card.remaining}
          />
        ))}
    </div>
  );
};
