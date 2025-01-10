const itemModel = require("../models/item");

const sendMailWithNM = require("../services/sendMail");

const createItem = async (req, res) => {
  const item = req.body;
  try {
    const newItem = new itemModel(item);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllItem = async (req, res) => {
  try {
    const items = await itemModel.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getItemById = async (req, res) => {
  const itemId = req.params.id;
  try {
    const item = await itemModel.findById(itemId);
    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateItem = async (req, res) => {
  const itemId = req.params.id;
  const updateItem = await req.body;
  try {
    await itemModel.findByIdAndUpdate(itemId, updateItem);
    const updatedItem = await itemModel.findById(itemId);
    res.status(201).json({ updatedItem, message: "Updated Successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteItem = async (req, res) => {
  const itemId = req.params.id;
  try {
    const removedItem = await itemModel.findByIdAndRemove(itemId);
    res.status(201).json({ removedItem, message: "Removed Successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const mailItem = async (req, res) => {
  const items = req.body;

  try {
    const sendMailData = await sendMailWithNM(items);
    res.status(200).json({ sendMailData, message: "Mail send Successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createItem,
  getAllItem,
  getItemById,
  updateItem,
  deleteItem,
  mailItem,
};
