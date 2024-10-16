const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  itemName: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  productOrigin:{
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
});
const product = mongoose.model("productSchema", productSchema);
module.exports = product;
