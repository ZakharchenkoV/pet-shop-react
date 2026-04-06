import type { Product } from '@/shared/model';

export interface CartContextType {
  items: Product[];
  totalItems: number;
  totalPrice: number;
  clearCart: () => void;
  removeFromCart: (id: number) => void;
  getQuantity: (itemId: number) => number | undefined;
  // todo: разобрать ошибку TS searchItemInCart
  searchItemInCart: (itemId: number) => Product | undefined;
  addToCart: (item: Omit<Product, 'quantity'>) => void;
  updateQuantity: (id: number, quantity: number) => void;
  removeOneFromCart: (item: Omit<Product, 'quantity'>) => void;
}
