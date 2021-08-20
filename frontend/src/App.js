import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import { getWorkouts } from "./actions/workouts";
import Workouts from "./components/Workouts/Workouts";
import Form from "./components/Form/Form";
import AllProgramsAdmin from "./components/AllProgramsAdmin";
import CreateProgramAdmin from "./components/CreateProgramAdmin";
import EditProgramAdmin from "./components/EditProgramAdmin";
import ProgramDetailsAdmin from "./components/ProgramDetailsAdmin";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/footer";
import LandingPage from "./Screens/LandingPage/LandingPage";
import HomePage from "./Screens/HomePage/HomePage";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen/RegisterScreen";
import ProfileScreen from "./Screens/ProfileScreen/ProfileScreen";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorkouts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <div className="container-fluid">
        <Route
          path="/workouts"
          exact
          component={() => <Workouts setCurrentId={setCurrentId} />}
        ></Route>
      </div>
      {/* <Workouts path="/" setCurrentId={setCurrentId} exact /> */}
      <Route
        path="/trainer/workouts/add"
        exact
        component={() => (
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        )}
      ></Route>
      {/* <Form path="/add" exact /> */}

      <Route
        path="/trainer/workouts/update/:id"
        exact
        component={() => (
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        )}
      ></Route>
      {/* <Form
              path="/update/:id"
              currentId={currentId}
              setCurrentId={setCurrentId}
              exact
            /> */}

      <main>
        <Route path="/" component={LandingPage} exact />
        <Route path="/login" component={LoginScreen} />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/Home" component={() => <HomePage />} />

        <Route path="/admin-programs" component={AllProgramsAdmin}></Route>
        <Route path="/admin-add-program" component={CreateProgramAdmin}></Route>
        <Route
          path="/admin-edit-program/:id"
          component={EditProgramAdmin}
        ></Route>
        <Route
          path="/admin-expand-program/:id"
          component={ProgramDetailsAdmin}
        ></Route>
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
