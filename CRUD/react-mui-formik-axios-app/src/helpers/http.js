import axios from "axios";

const BACKEND_URL = "https://cruds-api.herokuapp.com/item";

export const getItems = async () => {
  try {
    const items = await axios.get(`${BACKEND_URL}/getAll`);
    console.log(items);
    return items.data;
  } catch (error) {
    console.log("🚀 ~ file: http.js ~ line 10 ~ getItems ~ error", error);
  }
};

export const createItem = async (item) => {
  try {
    const newItem = await axios.post(`${BACKEND_URL}/create`, item);
    return newItem.data;
  } catch (error) {
    console.log("🚀 ~ file: http.js ~ line 22 ~ createItem ~ error", error);
  }
};

export const updateItem = async (item) => {
  try {
    const updatedItem = await axios.post(
      `${BACKEND_URL}/update/${item._id}`,
      item
    );
    return updatedItem.data.updatedForm;
  } catch (error) {
    console.log("🚀 ~ file: http.js ~ line 34 ~ updateItem ~ error", error);
  }
};

export const deleteItem = async (item) => {
  try {
    const deletedItem = await axios.post(`${BACKEND_URL}/delete/${item._id}`);
    return deletedItem.data.message;
  } catch (error) {
    console.log("🚀 ~ file: http.js ~ line 43 ~ deleteItem ~ error", error);
  }
};

export const mailItems = async (items) => {
  try {
    const mailedItems = await axios.post(`${BACKEND_URL}/mail`, items);
    window.open(mailedItems.data.sendMailData.url, "_blank").focus();

    return mailedItems.data.message;
  } catch (error) {
    console.log("🚀 ~ file: http.js ~ line 54 ~ mailItems ~ error", error);
  }
};
