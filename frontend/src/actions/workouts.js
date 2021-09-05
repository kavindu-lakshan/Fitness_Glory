import * as api from "../api";

//Action Creators
export const getWorkouts = (page) => async (dispatch) => {
  try {
    const { data } = await api.fetchWorkouts(page);

    console.log(data);
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getWorkoutsBySearch = (searchQuery) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.fetchWorkoutsBySearch(searchQuery);

    dispatch({ type: "FETCH_BY_SEARCH", payload: data });
  } catch (error) {
    console.log(error);
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
