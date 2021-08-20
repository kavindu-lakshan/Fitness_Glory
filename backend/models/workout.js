const mongoose = require("mongoose");

const workoutSchema = mongoose.Schema({
  workout_name: {
    type: String,
    required: true,
    unique: true,
  },
  workout_category: {
    type: String,
    required: true,
  },
  muscle_group: {
    type: String,
    required: true,
  },
  starting_position_img: {
    type: String,
    required: true,
  },
  mid_position_img: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  action: {
    type: String,
    required: true,
  },
  tips: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;
