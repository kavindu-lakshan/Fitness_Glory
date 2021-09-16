import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userLoginReducer,
  userRegisterReducer,
  userUpdateReducer,
} from "./reducers/userReducers";
import {
  trainerLoginReducer,
  trainerRegisterReducer,
  trainerUpdateReducer,
} from "./reducers/trainerReducers";
import {
  adminLoginReducer,
  adminUpdateReducer,
} from "./reducers/adminReducers";
import { work } from "./reducers/workouts";
import { blogposts } from "./reducers/blogposts";
import { preposts } from './reducers/preposts';

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userUpdate: userUpdateReducer,
  trainerLogin: trainerLoginReducer,
  trainerRegister: trainerRegisterReducer,
  trainerUpdate: trainerUpdateReducer,
  workouts: work,
  blogposts: blogposts,
  adminLogin: adminLoginReducer,
  adminUpdate: adminUpdateReducer,
  preposts: preposts,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const trainerInfoFromStorage = localStorage.getItem("trainerInfo")
  ? JSON.parse(localStorage.getItem("trainerInfo"))
  : null;

const adminInfoFromStorage = localStorage.getItem("adminInfo")
  ? JSON.parse(localStorage.getItem("adminInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  trainerLogin: { trainerInfo: trainerInfoFromStorage },
  adminLogin: { adminInfo: adminInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  // compose(applyMiddleware(thunk)),
  composeWithDevTools(applyMiddleware(...middleware, thunk))
);

export default store;
