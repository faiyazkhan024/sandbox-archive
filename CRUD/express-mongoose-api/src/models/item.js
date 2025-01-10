const mongoose = require("mongoose");

const consts = require("../constants");

const itemSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    min: 6,
    max: 255,
  },
  mobile: {
    type: String,
    trim: true,
    required: true,
    min: 10,
    max: 10,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    min: 11,
    max: 255,
  },
  hobbies: {
    type: [String],
    trim: true,
    required: true,
  },
});

module.exports = mongoose.model(consts.item, itemSchema);
