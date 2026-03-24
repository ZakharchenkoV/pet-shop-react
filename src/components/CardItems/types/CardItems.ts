import type { ICardItem } from '../../CardItem/types/CardItem';
import type { ShopItem } from '../../CheckboxList/types/CheckboxList';

export interface CardItemsProps {
  cards: ICardItem[];
  selectedShops: ShopItem[];
}
