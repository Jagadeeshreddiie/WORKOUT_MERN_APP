import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import TotalWorkout from "./pages/TotalWorkout";
import { useWorkout } from "./hooks/useWorkout";
const Url = "http://localhost:3002/api/workout/";
const App = () => {
  // const [res, setRes] = useState(null);
  const {workouts,dispatch}=useWorkout();
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);
  const fetchData = async () => {
    const response = await fetch(Url);
    const data = await response.json();
    if(response.ok){
      dispatch({
        type:'SET_WORKOUTS',
        payload:data
      })
    }
    // setRes(data);
    console.log(data);
  };
  return (
    <>
      <Navbar />
      <TotalWorkout res={workouts}/>
    </>
  );
};

export default App;
