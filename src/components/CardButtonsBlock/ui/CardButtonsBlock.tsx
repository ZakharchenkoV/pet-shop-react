import React, { useCallback, useEffect } from 'react';

// import minusIcon from '../../../assets/minus.svg';
// import plusIcon from '../../../assets/plus.svg';
import { useCart } from '../../../store';
import { Button } from '../../Button/ui/Button';
import type { ICardButtonsBlock } from '../types/CardButtonsBlock';

import styles from './CardButtonsBlock.module.scss';

export const CardButtonsBlock: React.FC<ICardButtonsBlock> = ({
  name,
  id,
  shopId,
  price,
  img,
  remaining,
}) => {
  const { addToCart, removeOneFromCart, removeFromCart, items } = useCart();

  const getQuantity = useCallback(
    (itemId: number) => {
      const currentItem = items.find((item) => item.id === itemId);
      return currentItem?.quantity;
    },
    [items]
  );

  const handleAddToCart = () => {
    addToCart({ id, shopId, name, price, img, remaining });
  };

  // Проверка, есть ли уже товар в корзине
  const searchItemInCart = (itemId: number) => {
    return items.find((item) => item.id === itemId);
  };

  // Обработчик нажатия на +
  const onPlusClick = () => {
    handleAddToCart();
  };

  // Обработчик нажатия на -
  const onMinusClick = () => {
    removeOneFromCart({ id, shopId, name, price, img, remaining });
  };

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
        <div className={styles['buttons-block']}>
          <Button
            label="-"
            status="negative"
            buttonClickHandler={onMinusClick}
            style={{ borderRadius: '25px' }}
          />
          <>{getQuantity(id)}</>
          <Button
            label="+"
            status="positive"
            buttonClickHandler={onPlusClick}
            style={{ borderRadius: '25px' }}
          />
        </div>
      )}
    </div>
  );
};
