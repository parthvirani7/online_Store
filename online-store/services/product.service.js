const { productSchema } = require("../models");

const getproduct = () => {
  return productSchema.find()
};

const addproduct = (body) => {
  return productSchema.create(body);
};

const deleteproduct = (id) => {
  return productSchema.findByIdAndelete(id);
};

const updateproduct = (id, body) => {
  return productSchema.findByIdAndUpdate(id, { $set: body });
};

module.exports = {
  getproduct,
  addproduct,
  deleteproduct,
  updateproduct,
};
