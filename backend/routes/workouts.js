const express = require("express");

const {
  getWorkouts,
  createWorkout,
  updateWorkout,
  deleteWorkout,
  getWorkoutsBySearch,
} = require("../controllers/workouts.js");

const router = express.Router();

router.get("/", getWorkouts);
router.get("/search", getWorkoutsBySearch);
router.post("/add", createWorkout);
router.patch("/update/:id", updateWorkout);
router.delete("/:id", deleteWorkout);

module.exports = router;
