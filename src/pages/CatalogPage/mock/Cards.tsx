import type { ICardItem } from '@/widgets/CardItem/types/CardItem';
import type { ShopItem } from '@/widgets/ShopFilter/types/ShopFilter';

export const shops: ShopItem[] = [
  { name: 'ул. Геологов, д. 48', id: 1 },
  { name: 'ул. Авиаторов, 31', id: 2 },
  { name: 'Сосновый переулок, 10', id: 3 },
];

export const cards: ICardItem[] = [
  {
    id: 0,
    shopId: 1,
    name: 'Пицца Маргарита',
    description:
      'Классическая итальянская пицца с томатным соусом, моцареллой, пепперони и свежим базиликом. Тонкое хрустящее тесто и ароматная начинка.',
    price: 590,
    quantity: 0,
    remaining: 5,
    img: 'https://img.freepik.com/free-psd/top-view-delicious-pizza_23-2151868900.jpg?semt=ais_hybrid&w=740&q=80',
  },
  {
    id: 1,
    shopId: 1,
    name: 'Паста Карбонара',
    description:
      'Итальянская паста с хрустящим панчеттой, яичным соусом, пармезаном и черным перцем. Нежный кремовый вкус.',
    price: 490,
    quantity: 0,
    remaining: 4,
    img: 'https://img.freepik.com/premium-photo/pasta-with-tomatoes-basil-is-isolated-white-background_166116-5594.jpg?semt=ais_hybrid&w=740',
  },
  {
    id: 2,
    shopId: 1,
    name: 'Суп куриный',
    description:
      'Наваристый куриный суп с домашней лапшой, морковью, сельдереем и свежей зеленью. Согревает и заряжает энергией.',
    price: 290,
    quantity: 0,
    remaining: 8,
    img: 'https://i.pinimg.com/736x/f9/e0/ed/f9e0edeea54cf8474dd94f6cbf80b923.jpg',
  },
  {
    id: 3,
    shopId: 1,
    name: 'Пельмени',
    description:
      'Домашние пельмени из нежного теста с сочной начинкой из говядины и свинины. Подаются со сметаной и зеленью.',
    price: 350,
    quantity: 0,
    remaining: 0,
    img: 'https://poznaya-n1.ru/wp-content/uploads/2020/04/photo-2025-06-07-19-36-26.jpg',
  },
  {
    id: 4,
    shopId: 1,
    name: 'Крылышки',
    description:
      'Куриные крылышки в остром соусе барбекю, запеченные до золотистой корочки. Подаются с соусом ранч и сельдереем.',
    price: 420,
    quantity: 0,
    remaining: 3,
    img: 'https://avatars.mds.yandex.net/i?id=921f49d2441d181c03ea0070b8ddef732325b78c-5495613-images-thumbs&n=13',
  },
  {
    id: 5,
    shopId: 1,
    name: 'Бургер',
    description:
      'Сочная говяжья котлета, свежий салат, помидоры, красный лук, соленые огурцы и фирменный соус в мягкой булочке с кунжутом.',
    price: 390,
    quantity: 0,
    remaining: 6,
    img: 'https://png.pngtree.com/png-clipart/20230520/original/pngtree-beef-burger-png-image_9165585.png',
  },
  {
    id: 6,
    shopId: 1,
    name: 'Суши сет',
    description:
      'Ассорти из классических суши: лосось, тунец, угорь, огурец, авокадо. Свежая рыба и идеально сваренный рис.',
    price: 890,
    quantity: 0,
    remaining: 10,
    img: 'https://static.vecteezy.com/system/resources/thumbnails/046/337/870/small_2x/sushi-on-plate-delicious-japanese-cuisine-sushi-sushi-top-view-isolated-makizushi-rolled-sushi-isolated-on-plate-flat-lay-free-png.png',
  },
  {
    id: 7,
    shopId: 1,
    name: 'Рамен',
    description:
      'Японский суп с пшеничной лапшой, свининой чашу, половинкой яйца, нори и зеленым луком. Богатый и ароматный бульон.',
    price: 550,
    quantity: 0,
    remaining: 2,
    img: 'https://static.vecteezy.com/system/resources/previews/048/725/359/non_2x/asian-noodle-soup-ramen-with-a-mix-of-traditional-toppings-isolated-on-transparent-background-free-png.png',
  },
  {
    id: 8,
    shopId: 1,
    name: 'Стейк Рибай',
    description:
      'Мраморная говядина, обжаренная на гриле до идеальной степени прожарки. Подается с картофелем и соусом демиглас.',
    price: 1290,
    quantity: 0,
    remaining: 4,
    img: 'https://88888.kz/images/!Cafe888/СТЕЙКИ/Нью%20Йорк.jpg',
  },
  {
    id: 9,
    shopId: 2,
    name: 'Салат Цезарь',
    description:
      'Классический салат с куриным филе, листьями романо, пармезаном, гренками и соусом Цезарь. Сытный и вкусный.',
    price: 450,
    quantity: 0,
    remaining: 7,
    img: 'https://main-cdn.sbermegamarket.ru/big1/hlr-system/-10/501/727/914/191/752/100031533421b0.jpg',
  },
  {
    id: 10,
    shopId: 3,
    name: 'Шаурма',
    description:
      'Лаваш с куриным мясом, свежими овощами, чесночным соусом и картофелем фри. Сытный перекус для активного дня.',
    price: 320,
    quantity: 0,
    remaining: 5,
    img: 'https://img.freepik.com/free-photo/shawarma-isolated-white-background_123827-21471.jpg',
  },
  {
    id: 11,
    shopId: 2,
    name: 'Лазанья',
    description:
      'Итальянская запеканка из слоев пасты, мясного соуса болоньезе, соуса бешамель и пармезана.',
    price: 520,
    quantity: 0,
    remaining: 3,
    img: 'https://img.pravda.ru/image/preview/article/3/9/0/2277390_amp.jpeg',
  },
  {
    id: 12,
    shopId: 3,
    name: 'Ризотто с грибами',
    description:
      'Кремовое ризотто с грибами, пармезаном и трюфельным маслом. Нежный и насыщенный вкус.',
    price: 480,
    quantity: 0,
    remaining: 6,
    img: 'https://i.pinimg.com/originals/7c/eb/e2/7cebe2e57288e190e401ed424388065a.png',
  },
  {
    id: 13,
    shopId: 2,
    name: 'Тако',
    description:
      'Мексиканские лепешки из кукурузной муки с начинкой из говядины, сальсы, авокадо и кинзы.',
    price: 380,
    quantity: 0,
    remaining: 9,
    img: 'https://png.pngtree.com/png-clipart/20231020/original/pngtree-mexican-tacos-on-plate-on-tablecloth-png-image_13377140.png',
  },
  {
    id: 14,
    shopId: 3,
    name: 'Омлет',
    description:
      'Пышный омлет из трех яиц с молоком, подается с зеленью и томатами черри. Идеальный завтрак.',
    price: 250,
    quantity: 0,
    remaining: 8,
    img: 'https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDIzMTAxOC8zUHUyZEQuanBlZw.jpg',
  },
  {
    id: 15,
    shopId: 2,
    name: 'Блины',
    description:
      'Тонкие блины по домашнему рецепту. Подаются со сгущенкой, вареньем или сметаной на выбор.',
    price: 280,
    quantity: 0,
    remaining: 0,
    img: 'https://avatars.mds.yandex.net/i?id=16158165ddb39f96ca975471bbe66e51_l-8960812-images-thumbs&ref=rim&n=13&w=534&h=534',
  },
  {
    id: 16,
    shopId: 3,
    name: 'Тирамису',
    description:
      'Классический итальянский десерт из печенья савоярди, пропитанного кофе, с нежным сыром маскарпоне и какао.',
    price: 390,
    quantity: 0,
    remaining: 5,
    img: 'https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy8yMDI1MDYyNi8zOTdqdkcuanBlZw.jpg',
  },
];
