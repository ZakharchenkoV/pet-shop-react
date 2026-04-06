import type { ICardItem } from '@/widgets/CardItem/types/CardItem';
import type { ShopItem } from '@/widgets/ShopFilter/types/ShopFilter';

export interface CardItemsProps {
  cards: ICardItem[];
  selectedShops: ShopItem[];
}
