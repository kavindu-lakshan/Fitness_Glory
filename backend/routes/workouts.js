const express = require("express");

const {getWorkouts, createWorkout, updateWorkout} = require("../controllers/workouts.js")

const router = express.Router();

router.get("/", getWorkouts);
router.post("/add", createWorkout);
router.patch("/update/:id", updateWorkout);

module.exports = router;
