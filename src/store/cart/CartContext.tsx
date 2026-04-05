import React, { createContext, useCallback, useMemo, useState } from 'react';

import type { CartContextType, CartItem } from './types';

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = useCallback((newItem: Omit<CartItem, 'quantity'>) => {
    setItems((prev) => {
      const existing = prev.find((el) => el.id === newItem.id);

      if (existing) {
        return prev.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...newItem, quantity: 1 }];
    });
  }, []);

  const getQuantity = useCallback(
    (itemId: number) => {
      const currentItem = items.find((item) => item.id === itemId);
      return currentItem?.quantity;
    },
    [items]
  );

  const removeOneFromCart = useCallback(
    (newItem: Omit<CartItem, 'quantity'>) => {
      setItems((prev) => {
        const existing = prev.find((el) => el.id === newItem.id);

        if (existing) {
          return prev.map((item) =>
            item.id === newItem.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        }

        return [...prev, { ...newItem, quantity: 1 }];
      });
    },
    []
  );

  const removeFromCart = useCallback((itemId: number) => {
    setItems((prev) => prev.filter((item) => item.id !== itemId));
  }, []);

  const updateQuantity = useCallback(
    (id: number, quantity: number) => {
      if (quantity <= 0) {
        removeFromCart(id);
        return;
      }

      setItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, quantity } : item))
      );
    },
    [removeFromCart]
  );

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  // Проверка, есть ли уже товар в корзине
  //todo: разобрать ошибку TS
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const searchItemInCart = (itemId: number) => {
    return items.find((item) => item.id === itemId);
  };

  const totalItems = useMemo(() => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }, [items]);

  const totalPrice = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      totalItems,
      totalPrice,
      addToCart,
      clearCart,
      getQuantity,
      updateQuantity,
      removeFromCart,
      removeOneFromCart,
      searchItemInCart,
    }),
    [
      items,
      totalItems,
      totalPrice,
      getQuantity,
      addToCart,
      clearCart,
      updateQuantity,
      removeFromCart,
      removeOneFromCart,
      searchItemInCart,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
