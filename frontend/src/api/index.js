import axios from "axios";

export const fetchWorkouts = () => axios.get("http://localhost:5000/workouts");
export const createWorkout = (newWorkout) =>
  axios.post("http://localhost:5000/workouts/add", newWorkout);

export const updateWorkout = (id, updatedWorkout) =>
  axios.patch(
    `${"http://localhost:5000/workouts/update"}/${id}`,
    updatedWorkout
  );
