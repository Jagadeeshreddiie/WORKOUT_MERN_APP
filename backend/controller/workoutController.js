const express=require("express");
const {createWorkout,getWorkout,workouts,updateWorkout,deleteWorkout}=require('../Routes/workoutRoutes');
const route=express.Router();


route.get('/',workouts);
route.get('/:id',getWorkout);
route.post('/',createWorkout);
route.patch('/:id',updateWorkout);
route.delete('/:id',deleteWorkout);

module.exports=route;