import { createContext, useReducer, useState } from "react";

const ItemContext = createContext([]);

const getItems = (action) => {
  return [...action.payload];
};

const createItem = (items, action) => {
  return [...items, action.payload];
};

const updateItem = (items, action) => {
  return [
    ...items.filter((item) => item._id !== action.payload._id),
    action.payload,
  ];
};

const deleteItem = (items, action) => {
  return items.filter((item) => item._id !== action.payload._id);
};

const itemReducer = (items, action) => {
  switch (action.type) {
    case "Get":
      return getItems(action);
    case "Create":
      return createItem(items, action);
    case "Update":
      return updateItem(items, action);
    case "Delete":
      return deleteItem(items, action);
    default:
      throw new Error("No such action defined");
  }
};

export const ItemContextProvider = (props) => {
  const [items, dispatch] = useReducer(itemReducer, []);
  const [editing, setEditing] = useState({});
  return (
    <ItemContext.Provider value={{ items, dispatch, editing, setEditing }}>
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemContext;
