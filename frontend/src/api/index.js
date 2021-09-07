import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchWorkouts = (page) => API.get(`/workouts?page=${page}`);
export const fetchWorkout = (id) => API.get(`/workouts/${id}`);
export const createWorkout = (newWorkout) =>
  API.post("/workouts/add", newWorkout);

export const updateWorkout = (id, updatedWorkout) =>
  API.patch(`${"/workouts/update"}/${id}`, updatedWorkout);

export const deleteWorkout = (id) => API.delete(`${"/workouts"}/${id}`);
