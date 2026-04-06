import type { Product, ShopItem } from '@/shared/model';

export interface CardItemsProps {
  cards: Product[];
  selectedShops: ShopItem[];
}
