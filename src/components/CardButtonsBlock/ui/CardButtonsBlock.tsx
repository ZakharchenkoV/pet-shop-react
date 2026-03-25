import React, { useEffect } from 'react';

import { useCart } from '../../../store/cart';
import type { ICardButtonsBlock } from '../types/CardButtonsBlock';

import styles from './CardButtonsBlock.module.scss';

export const CardButtonsBlock: React.FC<ICardButtonsBlock> = ({
  name,
  id,
  shopId,
  price,
  img,
  remaining,
  // description,
}) =>
  // {
  // leftButtonName,
  // rightButtonName,
  // }
  {
    // const [counter, setCounter] = useState(0);

    // const [divClicked] = useState(true);
    // const [text, setText] = useState<string>('');

    // Обработчик отображения выполненного действия
    // const buttonClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    //   const content =
    //     event.currentTarget.textContent === 'Обнулить счетчик'
    //       ? 'Счетчик обнулен'
    //       : `Нажата кнопка ${event.currentTarget.textContent ?? ''}`;
    //   setText(content);
    // };

    // // Обработчик нажатия на +
    // const onPlusClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    //   setCounter((prev) => prev + 1);
    // };

    // // Обработчик нажатия на -
    // const onMinusClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    //   setCounter((prev) => Math.max(prev - 1, 0));
    // };

    // // Обработчик обнуления счетчика
    // const resetCounter: React.MouseEventHandler<HTMLButtonElement> = () => {
    //   setTimeout(() => {
    //     setCounter(0);
    //     // setText('Счетчик обнулен');
    //   }, 500);
    // };

    // const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //   const value = Number(e.target.value);

    //   if (!Number.isNaN(value)) {
    //     setCounter(value);
    //   }
    // };

    const { addToCart, items } = useCart();

    const handleAddToCart = () => {
      addToCart({ id, shopId, name, price, img, remaining });
    };

    useEffect(() => {
      console.log('Корзина обновлена:', items);
    }, [items]);

    return (
      <div className={styles['buttons-wrapper']}>
        {/* <div className={styles['buttons-block']}>
        <button
          className={styles['buttons-block__button-minus']}
          onClick={onMinusClick}
          disabled={!counter}
        >
          {leftButtonName}
        </button>
        <form id="counter">
          <input
            type="number"
            id="counter"
            min={0}
            value={counter}
            className={styles['counter-input']}
            onChange={onInputChange}
          ></input>
        </form>
        <button
          className={styles['buttons-block__button-plus']}
          onClick={onPlusClick}
        >
          {rightButtonName}
        </button>
      </div> */}

        {/* {divClicked && <div className={styles.notice}>{text}</div>} */}
        <button
          className={styles['button-submit']}
          onClick={handleAddToCart}
          // disabled={!counter}
          type="submit"
          form="counter"
        >
          В корзину
        </button>
        {/* <button
          className={styles['button-reset']}
          onClick={resetCounter}
          disabled={!counter}
        >
          Обнулить счетчик
        </button> */}
      </div>
    );
  };
