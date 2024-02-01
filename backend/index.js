const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const route =require('./controller/workoutController');


const app = express();
app.use(express.json());
app.use('/api/workout',route);


mongoose
  .connect(process.env.MONGO_URL)
  .then(
    app.listen(process.env.PORT, () => {
      console.log(" Mongoose connected & server stated at port 3002");
    })
  )
  .catch((error)=>console.log(error));
