import { useState } from 'react';

import { shops } from './mock/Cards';
import './index.scss';
import { cards } from './mock/Cards';
import type { ShopItem } from './components/CheckboxList/types/CheckboxList';
import { CheckboxList } from './components/CheckboxList/ui/CheckboxList';
import { CardItems } from './components/CardItems/ui/CardItems';
import { Timer } from './components/Timer';
import { ClassCounter } from './components/ClassCounter';

const App = () => {
  //////////////////////////////////////////////////////////////
  // const arr = [2, 5, 7, 3];
  // const obj = {
  //   id: 1,
  //   name: 'Peter',
  //   age: 38,
  // };
  // useEffect(() => {
  //   console.log('Object.getPrototypeOf(arr):', Object.getPrototypeOf(arr));
  //   console.log('Object.getPrototypeOf(obj):', Object.getPrototypeOf(obj));
  //   // console.log('obj.__proto__:', obj.__proto__);

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // // Пример изменения свойства прототипа с последующим cleanup
  // useEffect(() => {
  //   const originalFind = Array.prototype.find;

  //   Array.prototype.find = function (...args) {
  //     console.log('мой find вызвался', args);
  //     return originalFind.apply(this, args);
  //   };

  //   console.log(arr.find((x) => x === 5));
  //   // ниже cleanup (вернули все на место)
  //   return () => {
  //     Array.prototype.find = originalFind;
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  // //////////////////////////////////////////////////////////////

  //////CheckboxList////////
  const [value, setValue] = useState<ShopItem[]>([]); // выбранные чекбоксы
  //////////////////////////

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
        <ClassCounter />
        <Timer />
      </div>
      <CheckboxList shops={shops} value={value} onChange={setValue} />
      <CardItems selectedShops={value} cards={cards} />

      {/* <p>1</p>
      <div>2</div>
      <>
        <div>3</div>
        <div>4</div>
      </>
      <span>5</span>
      <React.Fragment key="2">
        <div>6</div>
      </React.Fragment> */}
    </>
  );
};

export default App;
