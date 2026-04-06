import React, { useMemo } from 'react';

import { CardButtonsBlock } from '@/features/CartActions';

import type { CardItemsProps } from '../../model/CardItems';

import { CardItem } from './CardItem';
import styles from './CardItems.module.scss';

export const CardItems: React.FC<CardItemsProps> = ({ cards, selectedShops }) => {
  const selectedIds = useMemo(() => new Set(selectedShops.map((shop) => shop.id)), [selectedShops]);

  return (
    <div className={styles['card-items']}>
      {cards
        .filter((card) => selectedIds.has(card.shopId))
        .map((card) => (
          <CardItem {...card}>
            <CardButtonsBlock {...card} />
          </CardItem>
        ))}
    </div>
  );
};
