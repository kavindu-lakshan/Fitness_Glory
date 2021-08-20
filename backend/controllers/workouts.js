const mongoose = require("mongoose");
const workout = require("../models/workout.js");

const getWorkouts = async (req, res) => {
  try {
    const workouts = await workout.find();

    res.status(200).json(workouts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createWorkout = async (req, res) => {
  const work = req.body;

  const newWorkout = new workout(work);

  try {
    await newWorkout.save();

    res.status(201).json(newWorkout);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const updateWorkout = async (req, res) => {
  const { id: _id } = req.params;
  const work = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id");

  const updatedWorkout = await workout.findByIdAndUpdate(_id, work, {
    new: true,
  });

  res.json(updatedWorkout);
};

module.exports = {updateWorkout, createWorkout, getWorkouts}
