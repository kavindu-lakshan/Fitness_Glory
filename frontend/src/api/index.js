import axios from "axios";

export const fetchWorkouts = (page) =>
  axios.get(`http://localhost:5000/workouts?page=${page}`);
export const fetchWorkoutsBySearch = (searchQuery) =>
  axios.get(
    `http://localhost:5000/workouts/search?searchQuery=${
      searchQuery.search || "none"
    }`
  );
export const createWorkout = (newWorkout) =>
  axios.post("http://localhost:5000/workouts/add", newWorkout);

export const updateWorkout = (id, updatedWorkout) =>
  axios.patch(
    `${"http://localhost:5000/workouts/update"}/${id}`,
    updatedWorkout
  );

export const deleteWorkout = (id) =>
  axios.delete(`${"http://localhost:5000/workouts"}/${id}`);
