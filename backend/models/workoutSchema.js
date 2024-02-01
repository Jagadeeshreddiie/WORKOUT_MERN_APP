const mongoose = require("mongoose");
const Schema=mongoose.Schema;

const Work=new Schema({
    name:{
        type:String,
        required:true
    },
    cols:{
        type:Number,
        required:true
    },
    reps:{
        type:Number,
        required:true
    }
},{
    timestamps:true
})

module.exports=mongoose.model('Work',Work);