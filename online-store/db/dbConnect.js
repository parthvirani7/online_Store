const mongoose = require("mongoose")

const connectDB =()=>{
  mongoose.connect("mongodb://localhost:27017/xometo").then(()=>{
    console.log("db connect success");
  }).catch((err)=>{
    console.log(err,"err");
  })
}

module.exports = {connectDB}
