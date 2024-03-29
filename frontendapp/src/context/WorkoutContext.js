import {createContext, useReducer} from 'react';

export const WorkoutContext=createContext();

export const workoutReducer=(state,action)=>{
    switch (action.type) {
        case 'SET_WORKOUTS':
            return {
                workouts:action.payload
            };
        case 'CREATE':
            return {
                workouts:[action.payload,...state.workouts]
            };
    
        default:
            return state;
    }
}

export const WorkoutContextProvider=({children})=>{

    const [state,dispatch]=useReducer(workoutReducer,{workouts:null});

    <WorkoutContext.Provider value={{...state,dispatch}}>{children}</WorkoutContext.Provider>
}

