import React from 'react';

const Workout = ({res}) => {
  return <div>
      {
        res && res.map((each)=>{
                return <div className='workout-component' key={each._id}>
                    <h3>Name : {each.name}</h3>
                    <p>Reps : {each.reps}</p>
                    <p>Cols : {each.cols}</p>
                </div>
            })
      }
    </div>
  
}

export default Workout
