require("dotenv").config();
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const { connectDB } = require("./db/dbConnect");
const routes = require("./routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { userService, orderService, productService } = require("./services");
const fs = require("fs");
const moment = require("moment");
const app = express();

const options = {
  origin: "*",
};
app.use(cors(options));

//body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log(moment().format('LL'));

console.log(Date);

//cookies
app.use(cookieParser());

//routes
app.use("/v1", routes);

//ejs
app.set("view engine", "ejs");

// public for img
app.use(express.static("public"));

//DB connect
connectDB();

//server
http.createServer(app).listen(process.env.PORT, () => {
  console.log("Server started successfully on port " + process.env.PORT);
});
