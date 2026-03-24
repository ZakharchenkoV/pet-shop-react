import { useState } from 'react';

import { CardItems } from '../components/CardItems';
import { CheckboxList } from '../components/CheckboxList';
import type { ShopItem } from '../components/CheckboxList/types/CheckboxList';
import { cards, shops } from '../mock/Cards';

export const CatalogPage = () => {
  const [value, setValue] = useState<ShopItem[]>([]); // выбранные чекбоксы

  return (
    <>
      <CheckboxList shops={shops} value={value} onChange={setValue} />
      <CardItems selectedShops={value} cards={cards} />
    </>
  );
};
