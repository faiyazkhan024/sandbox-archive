const express = require("express");
const router = express.Router();

const validate = require("../middlewares/validate");
const itemValidation = require("../validation/item");

const {
  createItem,
  getAllItem,
  mailItem,
  getItemById,
  updateItem,
  deleteItem,
} = require("../controllers/item");

router.post("/create", validate(itemValidation), createItem);
router.get("/getAll", getAllItem);
router.post("/mail", mailItem);
router.get("/get/:id", getItemById);
router.post("/update/:id", updateItem);
router.post("/delete/:id", deleteItem);

module.exports = router;
