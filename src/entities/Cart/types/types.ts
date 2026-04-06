import type { ICardItem } from '@/widgets/CardItem/types/CardItem';

export type CartItem = Omit<ICardItem, 'description'>;

export interface CartContextType {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  clearCart: () => void;
  removeFromCart: (id: number) => void;
  getQuantity: (itemId: number) => number | undefined;
  // todo: разобрать ошибку TS searchItemInCart
  searchItemInCart: (itemId: number) => CartItem | undefined;
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  updateQuantity: (id: number, quantity: number) => void;
  removeOneFromCart: (item: Omit<CartItem, 'quantity'>) => void;
}
