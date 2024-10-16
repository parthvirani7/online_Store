const express = require("express");
const route = express.Router();
const { orderController } = require("../controllers");
const { authenticate, restrict } = require("../middlewares/auth");

route.post(
  "/add",
  orderController.addOrder
);
route.get("/get", orderController.getOrder);
route.put(
  "/update/:id",
  orderController.updateorder
);
route.delete("/delete/:id", orderController.deleteorder);

module.exports = route;
