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
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGOUT,
  ADMIN_UPDATE_REQUEST,
  ADMIN_UPDATE_SUCCESS,
  ADMIN_UPDATE_FAIL,
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
      { username, password, isAdminP: false },
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

export const register =
  (
    fname,
    lname,
    username,
    nic,
    dob,
    gender,
    mobile,
    address,
    qualifications,
    yrsexp,
    password,
    pic
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: TRAINER_REGISTER_REQUEST });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/FitnessGlory/trainers/trainer-register",
        {
          fname,
          lname,
          username,
          nic,
          dob,
          gender,
          mobile,
          address,
          qualifications,
          yrsexp,
          password,
          pic,
        },
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

// Admin

export const loginAdmin = (username, password) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/FitnessGlory/trainers/admin-login",
      { username, password, isAdmin: false },
      config
    );
    dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("adminInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: ADMIN_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const adminlogout = () => async (dispatch) => {
  localStorage.removeItem("adminInfo");
  dispatch({ type: ADMIN_LOGOUT });
};

export const updateAdminProfile = (trainer) => async (dispatch, getState) => {
  try {
    dispatch({ type: ADMIN_UPDATE_REQUEST });

    const {
      adminLogin: { adminInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${adminInfo.token}`,
      },
    };

    const { data } = await axios.post(
      "/FitnessGlory/trainers/admin-profile",
      trainer,
      config
    );

    dispatch({ type: ADMIN_UPDATE_SUCCESS, payload: data });

    dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("adminInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: ADMIN_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
