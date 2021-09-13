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
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGOUT,
  ADMIN_UPDATE_FAIL,
  ADMIN_UPDATE_REQUEST,
  ADMIN_UPDATE_SUCCESS,
} from "../constants/trainerConstants";

export const trainerLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case TRAINER_LOGIN_REQUEST:
      return { loading: true };
    case TRAINER_LOGIN_SUCCESS:
      return { loading: false, trainerInfo: action.payload };
    case TRAINER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case TRAINER_LOGOUT:
      return {};

    default:
      return state;
  }
};

export const trainerRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case TRAINER_REGISTER_REQUEST:
      return { loading: true };
    case TRAINER_REGISTER_SUCCESS:
      return { loading: false, trainerInfo: action.payload };
    case TRAINER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const trainerUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case TRAINER_UPDATE_REQUEST:
      return { loading: true };
    case TRAINER_UPDATE_SUCCESS:
      return { loading: false, trainerInfo: action.payload, success: true };
    case TRAINER_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};

//Admin
export const adminLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_LOGIN_REQUEST:
      return { loading: true };
    case ADMIN_LOGIN_SUCCESS:
      return { loading: false, adminInfo: action.payload };
    case ADMIN_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case ADMIN_LOGOUT:
      return {};

    default:
      return state;
  }
};

export const adminUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_UPDATE_REQUEST:
      return { loading: true };
    case ADMIN_UPDATE_SUCCESS:
      return { loading: false, adminInfo: action.payload, success: true };
    case ADMIN_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};
