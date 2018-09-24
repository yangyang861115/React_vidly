import React, { Component } from "react";
const ListGroup = props => {
  const {
    items,
    textProperty,
    valueProperty,
    onItemSelect,
    selectedItem
  } = props;
  return (
    <ul className="list-group">
      {items.map(g => (
        <li
          className={
            selectedItem === g ? "list-group-item active" : "list-group-item"
          }
          key={g[valueProperty]}
          onClick={() => onItemSelect(g)}
        >
          {g[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;
