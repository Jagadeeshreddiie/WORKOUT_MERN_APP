import React from "react";
import Workout from "../components/Workout";
import PostWorkout from "./PostWorkout";
const TotalWorkout = ({ res }) => {
  return (
    <div>
      <div className="container">
        <div className="sub-container">
          <Workout res={res} />
        </div>
        <PostWorkout />
      </div>
    </div>
  );
};

export default TotalWorkout;
