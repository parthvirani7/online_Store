const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  totalBill: {
    type: Number,
    require: true,
  },
  userName: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"userSchema",
  },
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "productSchema",
  },
  customerDetail: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userSchema",
  },
  date: {
    type: Date, 
    required: true,
    default: Date.now
  }

});
const order = mongoose.model("orderScehma", orderSchema);
module.exports = order;
