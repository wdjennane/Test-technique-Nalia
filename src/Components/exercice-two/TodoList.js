import React from "react";

export const TodoList = ({ onListClick, onItemClick, items }) => {
  const TodoItem = (props) => (
    <li onClick={props.onClick}>{props.item.text}</li>
  );

  const handleItemClick = (item, event) => {
    if (!item.done) {
      onItemClick(item, event);
    }
  };
  return (
    <ul onClick={onListClick}>
      {items.map((item, index) => (
        <TodoItem
          item={item}
          key={index}
          onClick={() => handleItemClick(item, onItemClick)}
        />
      ))}
    </ul>
  );
};
