const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const route = require("./controller/workoutController");

const app = express();

// to recieve the json format from document
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

//using the controller created routes

app.use("/api/workout", route);

//connecting to mongoose then local server using .env

mongoose
  .connect(process.env.MONGO_URL)
  .then(
    app.listen(process.env.PORT, () => {
      console.log(" Mongoose connected & server stated at port 3002");
    })
  )
  .catch((error) => console.log(error));
