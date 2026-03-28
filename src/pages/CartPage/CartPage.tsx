import { Button } from '../../components/Button/ui/Button';
import { QuantityButtonsBlock } from '../../components/QuantityButtonsBlock';
import { useCart } from '../../store';

import styles from './CartPage.module.scss';

export const CartPage = () => {
  const cart = useCart();

  const { items, totalPrice, clearCart } = cart;

  return (
    <div className={styles['cart-page-wrapper']}>
      {items.length > 0 && (
        <Button
          label={`К оплате: ${totalPrice} ₽`}
          status="positive"
          buttonClickHandler={() => {}}
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            width: '150px',
            height: '50px',
            margin: '10px',
            padding: '10px',
            color: 'rgb(63, 81, 181)',
            fontWeight: 600,
            border: '2px solid rgb(63, 81, 181)',
            borderRadius: '25px',
          }}
        />
      )}
      {items.length > 0 && (
        <Button
          label="Очистить корзину"
          status="negative"
          buttonClickHandler={clearCart}
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: '150px',
            height: '50px',
            margin: '10px',
            padding: '10px',
            color: 'rgb(63, 81, 181)',
            fontWeight: 600,
            border: '2px solid rgb(63, 81, 181)',
            borderRadius: '25px',
          }}
        />
      )}
      {items.length > 0 &&
        items.map((item) => {
          return (
            <div key={item.id} className={styles['cart-item']}>
              <div className={styles['cart-item_left-side']}>
                <img
                  src={item.img}
                  alt={item.name}
                  className={styles['cart-item_left-side_image']}
                />
                <div className={styles['cart-item_left-side_info']}>
                  <p>{item.name}</p>
                  <p>{`${item.price} ₽`}</p>
                </div>
              </div>
              <div className={styles['cart-item_right-side']}>
                <QuantityButtonsBlock
                  id={item.id}
                  img={item.img}
                  name={item.name}
                  price={item.price}
                  shopId={item.shopId}
                  remaining={item.remaining}
                />
              </div>
            </div>
          );
        })}

      {items.length === 0 && (
        <h1 className={styles['cart-is-empty-message']}>Корзина пуста</h1>
      )}
    </div>
  );
};
