import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { Redirect } from "react-router";

import { getWorkouts } from "./actions/workouts";
import Workouts from "./components/WorkoutSupportManagement/Workouts/Workouts";
import WorkoutsDisplayMember from "./components/WorkoutSupportManagement/Workouts/WorkoutsDisplayMember";
import WorkoutDetails from "./components/WorkoutSupportManagement/WorkoutDetails/WorkoutDetails";
import Form from "./components/WorkoutSupportManagement/Form/Form";

//shehan imports
import AllprogramsMemer from "./components/WorkoutProgramsMember/AllPrograms/member-programs";
import workoutprogramcard from "./components/WorkoutProgramsMember/AllPrograms/workoutprogram-card";
import AllProgramsAdmin from "./components/WorkoutProgramAdmin/AllProgramsAdmin/AllProgramsAdmin";
import CreateProgramAdmin from "./components/WorkoutProgramAdmin/CreateProgramAdmin/CreateProgramAdmin";
import EditProgramAdmin from "./components/WorkoutProgramAdmin/EditProgramAdmin/EditProgramAdmin";
import ProgramDetailsAdmin from "./components/WorkoutProgramAdmin/ProgramDetailsAdmin/ProgramDetailsAdmin";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/footer";
import LandingPage from "./Screens/LandingPage/LandingPage";
import HomePage from "./Screens/HomePage/HomePage";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen/RegisterScreen";
import ProfileScreen from "./Screens/ProfileScreen/ProfileScreen";

//Dulshan QandA section
import { QandA } from "./components/QAndASection/QandA";
import { CreateQuestion } from "./components/QAndASection/CreateQuestion";
import { UpdateQuestion } from "./components/QAndASection/UpdateQuestion";
import { DeleteQuestion } from "./components/QAndASection/DeleteQuestion";
import { OtherQuestions } from "./components/QAndASection/OtherQuestions";
import { CreateAnswer } from "./components/QAndASection/CreateAnswer";
import { MyAnswers } from "./components/QAndASection/MyAnswers";
import { UpdateAnswer } from "./components/QAndASection/UpdateAnswer";
import { DeleteAnswer } from "./components/QAndASection/DeleteAnswer";

//Lakshan Receptionist
import viewMembers from "./Receptionist/viewMembers";
import editMember from "./Receptionist/editMember";
import memberPannel from "./Receptionist/memberPannel";

//Amantha Trainer Login
import TrainerLandingPage from "./Screens/LandingPage/TrainerLandingPage";
import TrainerHomePage from "./Screens/HomePage/TrainerHomePage";
import TrainerLoginScreen from "./Screens/LoginScreen/TrainerLoginScreen";
import TrainerRegisterScreen from "./Screens/RegisterScreen/TrainerRegisterScreen";
import TrainerProfileScreen from "./Screens/ProfileScreen/TrainerProfileScreen";
import TrainerHeader from "./components/Header/TrainerHeader";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorkouts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Route exact path="/" render={() => <Redirect to="/member" />} />
      <Route path="/member" component={Header} />
      <Route path="/employee" component={TrainerHeader} />
      <div className="container-fluid">
        <Route
          path="/workouts"
          exact
          component={() => <Workouts setCurrentId={setCurrentId} />}
        ></Route>
      </div>
      <Route
        path="/trainer/workouts/add"
        exact
        component={() => (
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        )}
      ></Route>
      <Route
        path="/trainer/workouts/update/:id"
        exact
        component={() => (
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        )}
      ></Route>
      <Route path="/workouts/:id" component={WorkoutDetails} />
      <Route path="/member/workouts" component={WorkoutsDisplayMember} />
      <Route
        exact
        path="/trainer/workouts"
        component={() => <Redirect to="/workouts" />}
      />
      <main>
        <Route path="/member" component={LandingPage} exact />
        <Route path="/member/login" component={LoginScreen} />
        <Route path="/member/profile" component={ProfileScreen} />
        <Route path="/member/register" component={RegisterScreen} />
        <Route path="/member/Home" component={() => <HomePage />} />

        <Route path="/employee/" component={TrainerLandingPage} exact />
        <Route path="/employee/trainer-login" component={TrainerLoginScreen} />
        <Route
          path="/employee/trainer-profile"
          component={TrainerProfileScreen}
        />
        <Route
          path="/employee/trainer-register"
          component={TrainerRegisterScreen}
        />
        <Route
          path="/employee/trainerHome"
          component={() => <TrainerHomePage />}
        />

        <Route path="/employee/memberDetails" component={viewMembers}></Route>
        <Route path="/employee/editDetails/:id" component={editMember}></Route>
        <Route path="/employee/adminPanel" component={memberPannel}></Route>

        {/*Shehan routes */}
        <Route
          path="/member/workout-programs"
          component={AllprogramsMemer}
        ></Route>
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

        <Route exact path="/member/QandA/:mUsername" component={QandA} />
        <Route
          exact
          path="/member/q/createQ/:mUsername"
          component={CreateQuestion}
        />
        <Route exact path="/member/updateQ/:id" component={UpdateQuestion} />
        <Route exact path="/member/deleteQ/:id" component={DeleteQuestion} />
        <Route exact path="/member/otherQ/" component={OtherQuestions} />
        <Route exact path="/member/a/createA/:id" component={CreateAnswer} />
        <Route
          exact
          path="/member/myAnswers/:mUsername"
          component={MyAnswers}
        />
        <Route exact path="/member/updateA/:id" component={UpdateAnswer} />
        <Route exact path="/member/deleteA/:id" component={DeleteAnswer} />
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
