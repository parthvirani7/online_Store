const express = require("express");
const { authenticate, restrict } = require("../middlewares/auth");
const { userController } = require("../controllers");
const route = express.Router();

route.get(
  "/profile",
  authenticate,
  restrict(["admin", "user"]),
  userController.getProfile
);
route.get("/get", authenticate, restrict(["admin"]), userController.getUser);
route.post(
  "/register",
  userController.addUser
);
route.post("/login", userController.loginUser);
route.post(
  "/update/:id",
  userController.deleteUser
);
route.delete("/delete/:id", userController.updateUser);

module.exports = route;
