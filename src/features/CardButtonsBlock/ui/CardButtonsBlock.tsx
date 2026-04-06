import React, { useEffect } from 'react';

import { useCart } from '@/entities/Cart';
import { QuantityButtonsBlock } from '@/features/QuantityButtonsBlock';
import { Button } from '@/shared/Button';

import type { ICardButtonsBlock } from '../types/CardButtonsBlock';

import styles from './CardButtonsBlock.module.scss';

export const CardButtonsBlock: React.FC<ICardButtonsBlock> = ({
  id,
  img,
  name,
  price,
  shopId,
  remaining,
}) => {
  const { addToCart, removeFromCart, items, getQuantity } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, shopId, name, price, img, remaining });
  };

  // Проверка, есть ли уже товар в корзине
  const searchItemInCart = (itemId: number) => {
    return items.find((item) => item.id === itemId);
  };

  //todo: вынести в кастомный хук
  useEffect(() => {
    if (getQuantity(id) === 0) {
      removeFromCart(id);
    }
  }, [getQuantity, id, removeFromCart]);

  return (
    <div className={styles['buttons-wrapper']}>
      {!searchItemInCart(id) && (
        <Button
          label="В корзину"
          status="neutral"
          buttonClickHandler={handleAddToCart}
          style={{
            width: '100%',
            height: '50px',
            borderRadius: '25px',
          }}
        />
      )}

      {searchItemInCart(id) && getQuantity(id) !== 0 && (
        <QuantityButtonsBlock
          id={id}
          shopId={shopId}
          name={name}
          img={img}
          remaining={remaining}
          price={price}
        />
      )}
    </div>
  );
};
