import { useContext } from "react";
import { WorkoutContext } from "../context/WorkoutContext";

export const useWorkout=()=>{
    const context=useContext(WorkoutContext);
    if(!context){
        throw Error("Must the App should be inside the provider");
    }
    return context;
}