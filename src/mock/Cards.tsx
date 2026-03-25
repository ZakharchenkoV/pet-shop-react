import type { ICardItem } from '../components/CardItem/types/CardItem';
import type { ShopItem } from '../components/CheckboxList/types/CheckboxList';

export const shops: ShopItem[] = [
  { name: 'ул. Геологов, д. 48', id: 1 },
  { name: 'ул. Авиаторов, 31', id: 2 },
  { name: 'Сосновый переулок, 10', id: 3 },
];

export const cards: ICardItem[] = [
  {
    id: 0,
    shopId: 1,
    name: 'Пицца',
    description:
      'Классическая итальянская пицца с томатным соусом, моцареллой, пепперони и свежим базиликом. Тонкое хрустящее тесто и ароматная начинка.',
    price: 1000,
    remaining: 5,
    img: 'https://img.freepik.com/free-psd/top-view-delicious-pizza_23-2151868900.jpg?semt=ais_hybrid&w=740&q=80',
  },
  {
    id: 1,
    shopId: 1,
    name: 'Паста Карбонара',
    description:
      'Итальянская паста с хрустящим панчеттой, яичным соусом, пармезаном и черным перцем. Нежный кремовый вкус.',
    price: 1000,
    remaining: 4,
    img: 'https://img.freepik.com/premium-photo/pasta-with-tomatoes-basil-is-isolated-white-background_166116-5594.jpg?semt=ais_hybrid&w=740',
  },
  {
    id: 2,
    shopId: 1,
    name: 'Суп куриный',
    description:
      'Наваристый куриный суп с домашней лапшой, морковью, сельдереем и свежей зеленью. Согревает и заряжает энергией.',
    price: 1000,
    remaining: 8,
    img: 'https://i.pinimg.com/736x/f9/e0/ed/f9e0edeea54cf8474dd94f6cbf80b923.jpg',
  },
  {
    id: 3,
    shopId: 1,
    name: 'Пельмени',
    description:
      'Домашние пельмени из нежного теста с сочной начинкой из говядины и свинины. Подаются со сметаной и зеленью.',
    price: 1000,
    remaining: 0,
    img: 'https://avatars.mds.yandex.net/i?id=16f8666fd10a72b715d01953b44e8691_l-5026052-images-thumbs&n=13',
  },
  {
    id: 4,
    shopId: 1,
    name: 'Крылышки',
    description:
      'Куриные крылышки в остром соусе барбекю, запеченные до золотистой корочки. Подаются с соусом ранч и сельдереем.',
    price: 1000,
    remaining: 3,
    img: 'https://avatars.mds.yandex.net/i?id=921f49d2441d181c03ea0070b8ddef732325b78c-5495613-images-thumbs&n=13',
  },
  {
    id: 5,
    shopId: 1,
    name: 'Бургер',
    description:
      'Сочная говяжья котлета, свежий салат, помидоры, красный лук, соленые огурцы и фирменный соус в мягкой булочке с кунжутом.',
    price: 1000,
    remaining: 6,
    img: 'https://img.freepik.com/free-photo/tasty-burger-isolated-white-background_123827-29719.jpg',
  },
  {
    id: 6,
    shopId: 1,
    name: 'Суши',
    description:
      'Ассорти из классических суши: лосось, тунец, угорь, огурец, авокадо. Свежая рыба и идеально сваренный рис.',
    price: 1000,
    remaining: 10,
    img: 'https://img.freepik.com/free-photo/sushi-set-isolated-white-background_123827-21002.jpg',
  },
  {
    id: 7,
    shopId: 1,
    name: 'Рамен',
    description:
      'Японский суп с пшеничной лапшой, свининой чашу, половинкой яйца, нори и зеленым луком. Богатый и ароматный бульон.',
    price: 1000,
    remaining: 2,
    img: 'https://img.freepik.com/free-photo/ramen-noodle-soup-isolated-white-background_123827-21635.jpg',
  },
  {
    id: 8,
    shopId: 1,
    name: 'Стейк Рибай',
    description:
      'Мраморная говядина, обжаренная на гриле до идеальной степени прожарки. Подается с картофелем и соусом демиглас.',
    price: 1000,
    remaining: 4,
    img: 'https://img.freepik.com/free-photo/grilled-beef-steak-isolated-white-background_123827-29564.jpg',
  },
  {
    id: 9,
    shopId: 2,
    name: 'Салат Цезарь',
    description:
      'Классический салат с куриным филе, листьями романо, пармезаном, гренками и соусом Цезарь. Сытный и вкусный.',
    price: 1000,
    remaining: 7,
    img: 'https://img.freepik.com/free-photo/caesar-salad-isolated-white-background_123827-21601.jpg',
  },
  {
    id: 10,
    shopId: 3,
    name: 'Шаурма',
    description:
      'Лаваш с куриным мясом, свежими овощами, чесночным соусом и картофелем фри. Сытный перекус для активного дня.',
    price: 1000,
    remaining: 5,
    img: 'https://img.freepik.com/free-photo/shawarma-isolated-white-background_123827-21471.jpg',
  },
  {
    id: 11,
    shopId: 2,
    name: 'Лазанья',
    description:
      'Итальянская запеканка из слоев пасты, мясного соуса болоньезе, соуса бешамель и пармезана.',
    price: 1000,
    remaining: 3,
    img: 'https://img.freepik.com/free-photo/lasagna-isolated-white-background_123827-21545.jpg',
  },
  {
    id: 12,
    shopId: 3,
    name: 'Ризотто',
    description:
      'Кремовое ризотто с грибами, пармезаном и трюфельным маслом. Нежный и насыщенный вкус.',
    price: 1000,
    remaining: 6,
    img: 'https://img.freepik.com/free-photo/risotto-isolated-white-background_123827-21817.jpg',
  },
  {
    id: 13,
    shopId: 2,
    name: 'Тако',
    description:
      'Мексиканские лепешки из кукурузной муки с начинкой из говядины, сальсы, авокадо и кинзы.',
    price: 1000,
    remaining: 9,
    img: 'https://img.freepik.com/free-photo/taco-isolated-white-background_123827-21459.jpg',
  },
  {
    id: 14,
    shopId: 3,
    name: 'Омлет',
    description:
      'Пышный омлет из трех яиц с молоком, подается с зеленью и томатами черри. Идеальный завтрак.',
    price: 1000,
    remaining: 8,
    img: 'https://img.freepik.com/free-photo/omelette-isolated-white-background_123827-21722.jpg',
  },
  {
    id: 15,
    shopId: 2,
    name: 'Блины',
    description:
      'Тонкие блины по домашнему рецепту. Подаются со сгущенкой, вареньем или сметаной на выбор.',
    price: 1000,
    remaining: 0,
    img: 'https://img.freepik.com/free-photo/pancakes-isolated-white-background_123827-21657.jpg',
  },
  {
    id: 16,
    shopId: 3,
    name: 'Тирамису',
    description:
      'Классический итальянский десерт из печенья савоярди, пропитанного кофе, с нежным сыром маскарпоне и какао.',
    price: 1000,
    remaining: 5,
    img: 'https://img.freepik.com/free-photo/tiramisu-isolated-white-background_123827-21586.jpg',
  },
];
