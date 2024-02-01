const mongoose = require("mongoose");
const Work = require("../models/workoutSchema");

// fetching all the documents

const workouts = async (req, res) => {
  try {
    const workoutsData = await Work.find({});
    res.status(200).json(workoutsData);
  } catch (error) {
    res.status(400).json({ message: "error while fetching the data" });
  }
};

// fetching the single workout

const getWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ Error: "id is not in suitable format" });
  }
  const workout = await Work.findOne({ _id: id });
  if (!workout) {
    res.status(404).json({ Error: "No such workout" });
  }
  res.status(200).json(workout);
};

// creating a new workout

const createWorkout = async (req, res) => {
  const { name, cols, reps } = req.body;
  try {
    const workout = await Work.create({ name, cols, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

// updating the existing workout

const updateWorkout = (req, res) => {
  const { id } = req.params;
  // const {name,cols,reps}=req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "Given Id is not suitable" });
  }
  Work.findOneAndUpdate({ _id: id }, { ...req.body })
    .then((workout) => res.status(200).json(workout))
    .catch((error) => res.status(400).json({ error: error }));
};

// deleting particular workout

const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ Error: "id is not in suitable format" });
  }
  Work.findOneAndDelete({ _id: id })
    .then((workout) => res.status(200).json(workout))
    .catch((error) => res.status(400).json({ error: error }));
};


// exporting the route functions to the controller part
module.exports = {
  workouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};
