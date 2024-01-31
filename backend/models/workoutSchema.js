const mongoose = require("mongoose");
const Schema=mongoose.Schema;
const work=new Schema({
    name:{
        type:String,
        required:true
    },
    load:{
        type:Number,
        required:true
    },
    reps:{
        type:Number,
        required:true
    }
})
const workoutSchema=mongoose.model('workout',work);
module.exports=workoutSchema;