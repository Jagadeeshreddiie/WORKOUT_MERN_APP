import React, { useState } from "react";

const PostWorkout = () => {
  const [name, setName] = useState("");
  const [cols, setCols] = useState(null);
  const [reps, setReps] = useState(null);
  const [workout, setWorkout] = useState(null);

  const handleSubmit = async (e) => {

    e.preventDefault();
    setWorkout({ name, reps, cols });
    console.log(workout);
    // eslint-disable-next-line
    const response=await fetch("http://localhost:3002/api/workout/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(workout),
    })
    // const json=response.json();

  };
  return (
    <div className="sub-container input">
      <h1 style={{ color: "lightgreen" }}>New Workout</h1>
      <form>
        <div>
          <p>Person Name : </p>
          <input  type="text" onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <p>Reps : </p>
          <input  type="number" onChange={(e) => setReps(e.target.value)} />
        </div>
        <div>
          <p>Cols : </p>
          <input  type="number" onChange={(e) => setCols(e.target.value)} />
        </div>
        <button className="btn" type="submit" onClick={(e) => handleSubmit(e)}>
          Add
        </button>
      </form>
    </div>
  );
};

export default PostWorkout;
