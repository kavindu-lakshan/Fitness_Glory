import axios from 'axios'
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import { getWorkouts } from "./actions/workouts";
import Workouts from "./components/Workouts/Workouts";
import Form from "./components/Form/Form";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorkouts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Route
          path="/"
          exact
          component={() => <Workouts setCurrentId={setCurrentId} />}
        ></Route>
      </div>
      {/* <Workouts path="/" setCurrentId={setCurrentId} exact /> */}
      <Route
        path="/add"
        exact
        component={() => (
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        )}
      ></Route>
      {/* <Form path="/add" exact /> */}

      <Route
        path="/update/:id"
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
    </BrowserRouter>
  );
};

export default App;

