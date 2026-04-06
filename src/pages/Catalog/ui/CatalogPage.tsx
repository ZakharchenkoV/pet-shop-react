import { useState } from 'react';

import type { ShopItem } from '@/shared/model';

import { cards, shops } from '../mock/Cards';

import { CardItems } from './CardItems/CardItems';
import { ShopFilter } from './ShopFilter/ShopFilter';

export const CatalogPage = () => {
  const [value, setValue] = useState<ShopItem[]>([]); // выбранные чекбоксы

  return (
    <>
      <ShopFilter shops={shops} value={value} onChange={setValue} />
      <CardItems selectedShops={value} cards={cards} />
    </>
  );
};
