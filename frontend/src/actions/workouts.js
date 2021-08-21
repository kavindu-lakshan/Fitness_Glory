import * as api from "../api";

//Action Creators
export const getWorkouts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchWorkouts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createWorkout = (work) => async (dispatch) => {
  try {
    const { data } = await api.createWorkout(work);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateWorkout = (id, work) => async (dispatch) => {
  try {
    const { data } = await api.updateWorkout(id, work);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteWorkout = (id) => async (dispatch) => {
  try {
    await api.deleteWorkout(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};
