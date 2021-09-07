const express = require("express");

const {
  getWorkouts,
  createWorkout,
  updateWorkout,
  deleteWorkout,
  getWorkout,
} = require("../controllers/workouts.js");

const router = express.Router();

router.get("/", getWorkouts);
router.get("/:id", getWorkout);
router.post("/add", createWorkout);
router.patch("/update/:id", updateWorkout);
router.delete("/:id", deleteWorkout);

module.exports = router;
