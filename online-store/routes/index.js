const express = require("express");
const route = express.Router();
const userRoute = require("./user.route");
const productRoute = require("./product.route");
const orderRoute = require("./order.route");

route.use("/user", userRoute);
route.use("/product", productRoute);
route.use("/order", orderRoute);

module.exports = route;
