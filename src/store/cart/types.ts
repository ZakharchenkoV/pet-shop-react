import type { ICardItem } from '../../components/CardItem/types/CardItem';

export type CartItem = Omit<ICardItem, 'description'>;

export interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}
