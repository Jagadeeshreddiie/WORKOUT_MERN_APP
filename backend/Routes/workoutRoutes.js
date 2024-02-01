const workouts = (req, res) => {
  console.log("hiii");
res.send({ message: "hi" });
};

const getWorkout = (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.send({ message: "entered value is " + id });
};

const createWorkout = (req, res) => {
  const { name, cols, reps } = req.body;
  res.json(req.body);
};
const updateWorkout = (req, res) => {
  res.send({ message: req.params.id + " updated" });
};

const deleteWorkout = (req, res) => {
  res.send({ message: req.params.id + " deleted" });
};

module.exports = {
  workouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};
