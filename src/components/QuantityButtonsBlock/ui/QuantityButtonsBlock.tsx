import React, { useEffect } from 'react';

import { useCart } from '../../../store';
import { Button } from '../../Button/ui/Button';
import type { ICardButtonsBlock } from '../../CardButtonsBlock';

import styles from './QuantityButtonsBlock.module.scss';

export const QuantityButtonsBlock: React.FC<ICardButtonsBlock> = ({
  id,
  img,
  name,
  price,
  shopId,
  remaining,
}) => {
  const { addToCart, removeOneFromCart, getQuantity, removeFromCart } =
    useCart();

  const handleAddToCart = () => {
    addToCart({ id, shopId, name, price, img, remaining });
  };

  // Обработчик нажатия на +
  const onPlusClick = () => {
    handleAddToCart();
  };

  // Обработчик нажатия на -
  const onMinusClick = () => {
    removeOneFromCart({ id, shopId, name, price, img, remaining });
  };

  //todo: вынести в кастомный хук
  useEffect(() => {
    if (getQuantity(id) === 0) {
      removeFromCart(id);
    }
  }, [getQuantity, id, removeFromCart]);

  return (
    <div className={styles['quantity-buttons-block']}>
      <Button
        label="-"
        status="negative"
        buttonClickHandler={onMinusClick}
        style={{ borderRadius: '25px', height: '100%', aspectRatio: '1/1' }}
      />
      <>{getQuantity(id)}</>
      <Button
        label="+"
        status="positive"
        buttonClickHandler={onPlusClick}
        style={{ borderRadius: '25px', height: '100%', aspectRatio: '1/1' }}
      />
    </div>
  );
};
