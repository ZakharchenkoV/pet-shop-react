export interface Product {
  id: number;
  shopId: number;
  name: string;
  price: number;
  description: string;
  quantity: number; // кол-во в корзине
  remaining: number; // остаток "на складе"
  img: string;
  children?: React.ReactNode;
}

export type ShopItem = {
  name: string;
  id: number;
};
