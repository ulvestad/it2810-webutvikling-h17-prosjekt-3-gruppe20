import React from "react";
import {storeItem, loadFromLocalStorage} from '../../localStorage';

const List = ({keyName}) => {
  let todoValue = {};
  if (keyName.indexOf('todo') !== -1) {
    todoValue = loadFromLocalStorage(keyName);
  }
  const value = todoValue.value;
  const checked = todoValue.checked;

  const changeStorage = () => {
    storeItem(keyName, {value: value, checked: !checked});
  };

  const removeItem = () => {
    localStorage.removeItem(keyName);
  };

  return (
    <div className="box">
      <label onClick={() => changeStorage()}>
        <input
          type="checkbox"
          defaultChecked={checked}/> <span className={checked ? "line" : null}>{value}</span>
      </label>
      <span className="x" onClick={() => removeItem()}>x</span>
    </div>
  );
};

export default List;
