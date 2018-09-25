import React from "react";

const ListGroup = ({
  items,
  textProperty,
  valueProperty,
  onItemSelect,
  selectedItem
}) => {
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
