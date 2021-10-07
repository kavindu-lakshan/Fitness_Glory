const mongoose = require("mongoose");
const workout = require("../models/workout.js");

const getWorkout = async (req, res) => {
  const { id } = req.params;

  try {
    const work = await workout.findById(id);

    res.status(200).json(work);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getWorkouts = async (req, res) => {
  const { page } = req.query;
  try {
    const LIMIT = 8;
    const startIndex = (Number(page) - 1) * LIMIT;
    const total = await workout.countDocuments({});
    const workouts = await workout
      .find()
      .sort({ _id: -1 })
      .limit(LIMIT)
      .skip(startIndex);

    const all = await workout.find();

    res.status(200).json({
      success: true,
      data: workouts,
      report: all,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / LIMIT),
    });
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

const viewWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id");

  const work = await workout.findById(id);
  const updatedWorkout = await workout.findByIdAndUpdate(
    id,
    { viewCount: work.viewCount + 1 },
    { new: true }
  );

  res.json(updatedWorkout);
};

module.exports = {
  updateWorkout,
  createWorkout,
  getWorkouts,
  deleteWorkout,
  getWorkout,
  viewWorkout,
};
