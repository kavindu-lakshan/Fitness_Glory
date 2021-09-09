import axios from "axios";
import {
  TRAINER_LOGIN_FAIL,
  TRAINER_LOGIN_REQUEST,
  TRAINER_LOGIN_SUCCESS,
  TRAINER_LOGOUT,
  TRAINER_REGISTER_FAIL,
  TRAINER_REGISTER_REQUEST,
  TRAINER_REGISTER_SUCCESS,
  TRAINER_UPDATE_FAIL,
  TRAINER_UPDATE_REQUEST,
  TRAINER_UPDATE_SUCCESS,
} from "../constants/trainerConstants";

export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({ type: TRAINER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/FitnessGlory/trainers/trainer-login",
      { username, password },
      config
    );
    dispatch({ type: TRAINER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("trainerInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: TRAINER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("trainerInfo");
  dispatch({ type: TRAINER_LOGOUT });
};

export const register = (fname,lname,username,nic,dob,gender,mobile,address,qualifications,yrsexp,password,pic) => async (dispatch) => {
  try {
    dispatch({ type: TRAINER_REGISTER_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/FitnessGlory/trainers/trainer-register",
      { fname,lname,username,nic,dob,gender,mobile,address,qualifications,yrsexp,password,pic },
      config
    );

    dispatch({ type: TRAINER_REGISTER_SUCCESS, payload: data });

    dispatch({ type: TRAINER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("trainerInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: TRAINER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateProfile = (trainer) => async (dispatch, getState) => {
  try {
    dispatch({ type: TRAINER_UPDATE_REQUEST });

    const {
      trainerLogin: { trainerInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${trainerInfo.token}`,
      },
    };

    const { data } = await axios.post(
      "/FitnessGlory/trainers/trainer-profile",
      trainer,
      config
    );

    dispatch({ type: TRAINER_UPDATE_SUCCESS, payload: data });

    dispatch({ type: TRAINER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("trainerInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: TRAINER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
