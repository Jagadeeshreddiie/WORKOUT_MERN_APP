import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
// import Workout from "./components/Workout";
import TotalWorkout from "./pages/TotalWorkout";
const Url = "http://localhost:3002/api/workout/";
const App = () => {
  const [res, setRes] = useState(null);
  useEffect(() => {
    fetchData(Url);
  }, []);
  const fetchData = async (Url) => {
    const response = await fetch(Url);
    const data = await response.json();
    setRes(data);
    console.log(data);
  };
  return (
    <>
      <Navbar />
      <TotalWorkout res={res}/>
    </>
  );
};

export default App;
