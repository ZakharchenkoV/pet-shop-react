import type { ShopItem, ShopListProps } from '../types/CheckboxList';

/*
  Необходимо реализовать паттерн "выделить все":

  * При выборе "Выделить все"
      → все дочерние чекбоксы становятся отмеченными
  * При снятии "Выделить все"
      → все дочерние чекбоксы становятся неотмеченными
  * При ручном выборе всех дочерних чекбоксов
      → "Выделить все" автоматически становится отмеченным
  * При снятии любого дочернего чекбокса
      → "Выделить все" автоматически сбрасывается
  
  ! Нельзя менять CheckboxListProps
*/

export const CheckboxList = (props: ShopListProps) => {
  const { shops, value, onChange } = props;

  const allChecked = shops.length === value.length;

  const handlerCheckAll = (checked: boolean) => {
    if (checked) {
      onChange(shops);
    } else {
      onChange([]);
    }
  };

  const handleItemChange = (item: ShopItem, checked: boolean) => {
    if (checked) {
      onChange([...value, item]);
    } else {
      onChange(value.filter((v) => v.id !== item.id));
    }
  };

  const checkAll = (
    <li>
      <label>
        <input
          type="checkbox"
          checked={allChecked}
          // ниже передаем булево значение чекбокса(выбран/не выбран)
          onChange={(event) => handlerCheckAll(event.target.checked)}
        />
        Выделить все
      </label>
    </li>
  );

  const renderItem = (item: ShopItem) => (
    <li key={item.id}>
      <label>
        <input
          type="checkbox"
          checked={value.some((v) => v.id === item.id)}
          onChange={(event) => {
            handleItemChange(item, event.target.checked);
          }}
        />
        {item.name}
      </label>
    </li>
  );

  return (
    <ul className="checkbox-list">
      {checkAll}
      <li className="checkbox-list-separator" />
      {shops.map(renderItem)}
    </ul>
  );
};
