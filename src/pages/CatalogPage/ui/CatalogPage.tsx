import { useState } from 'react';

import { CardItems } from '@/widgets/CardItems';
import { ShopFilter } from '@/widgets/ShopFilter';
import type { ShopItem } from '@/widgets/ShopFilter/types/ShopFilter';

import { cards, shops } from '../mock/Cards';

export const CatalogPage = () => {
  const [value, setValue] = useState<ShopItem[]>([]); // выбранные чекбоксы

  return (
    <>
      <ShopFilter shops={shops} value={value} onChange={setValue} />
      <CardItems selectedShops={value} cards={cards} />
    </>
  );
};
