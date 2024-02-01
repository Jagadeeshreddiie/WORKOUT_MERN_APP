const express=require("express");
const {createWorkout,getWorkout,workouts,updateWorkout,deleteWorkout}=require('../Routes/workoutRoutes');
const route=express.Router();

// api calls for the routes 
// using the Express.Router

route.get('/',workouts);
route.get('/:id',getWorkout);
route.post('/',createWorkout);
route.patch('/:id',updateWorkout);
route.delete('/:id',deleteWorkout);

// exporting the main route

module.exports=route;