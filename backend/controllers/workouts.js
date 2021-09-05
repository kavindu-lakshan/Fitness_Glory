const mongoose = require("mongoose");
const workout = require("../models/workout.js");

const getWorkouts = async (req, res) => {
  const { page } = req.query;
  try {
    const LIMIT = 4;
    const startIndex = (Number(page) - 1) * LIMIT;
    const total = await workout.countDocuments({});
    const workouts = await workout
      .find()
      .sort({ _id: -1 })
      .limit(LIMIT)
      .skip(startIndex);

    res.status(200).json({
      data: workouts,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / LIMIT),
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getWorkoutsBySearch = async (req, res) => {
  const { searchQuery } = req.query;
  try {
    const workout_name = new RegExp(searchQuery, "i");

    const workouts = await workout.find({ workout_name });

    res.json({ data: workouts });
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

const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id");

  await workout.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully" });
};

module.exports = {
  updateWorkout,
  createWorkout,
  getWorkouts,
  deleteWorkout,
  getWorkoutsBySearch,
};
