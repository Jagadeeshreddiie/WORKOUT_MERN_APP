const express=require('express');
const mongoose=require("mongoose");
require('dotenv').config();
const app=express();
app.use(express.json());

app.get('/',(req,res)=>{
    console.log("hiii");
    return res.send({'message':"hi"});
    
})

app.listen(process.env.PORT,()=>{
    console.log("server stated at port 3002");
})
