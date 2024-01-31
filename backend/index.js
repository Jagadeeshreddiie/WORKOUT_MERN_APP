const express = require("express");
var mongoose = require("mongoose");
require("dotenv").config();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  console.log("hiii");
  return res.send({ message: "hi" });
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(
    app.listen(process.env.PORT, () => {
      console.log(" Mongoose connected & server stated at port 3002");
    })
  )
  .catch((error)=>console.log(error));
