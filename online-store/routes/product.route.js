const express = require("express");
const { productController } = require("../controllers");
const route = express.Router();

route.get("/get", productController.getproduct);
route.put(
  "/update/:id",
  productController.updateproduct
);
route.delete(
  "/delete/:id",
  productController.deleteproduct
);

module.exports = route;
