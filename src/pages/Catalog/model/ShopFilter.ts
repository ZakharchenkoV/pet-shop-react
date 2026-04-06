import type { ShopItem } from '@/shared/model';

export type ShopFilterProps = {
  shops: ShopItem[]; // лэйблы всех чекбоксов
  value: ShopItem[]; // лэйблы чекбоксов, которые выделены в данный момент
  onChange: (value: ShopItem[]) => void; // коллбэк изменения состояния чекбокса
};
