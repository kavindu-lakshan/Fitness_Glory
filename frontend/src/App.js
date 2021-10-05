import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { Redirect } from "react-router";

import { getWorkouts } from "./actions/workouts";
import Workouts from "./components/WorkoutSupportManagement/Workouts/Workouts";
import WorkoutsDisplayMember from "./components/WorkoutSupportManagement/Workouts/WorkoutsDisplayMember";
import WorkoutDetails from "./components/WorkoutSupportManagement/WorkoutDetails/WorkoutDetails";
import Form from "./components/WorkoutSupportManagement/Form/Form";

/*Janudi --> Employee Registration ---> Begin*/
import AdminHeader from "./components/Header/AdminHeader";
import EmployeeHome from "./components/EmployeeManagement/EmployeeHome";
import RegisterMenu from "./components/EmployeeManagement/RegisterMenu";
import CleanerRegistrationForm from "./components/EmployeeManagement/CleanerRegistrationForm";
import ViewEmployeeInterface from "./components/EmployeeManagement/ViewEmployeeInterface";
import { AllCleaners } from "./components/EmployeeManagement/EditCleanerInterface";
import EditCleaner from "./components/EmployeeManagement/EditCleaner";
import { DeleteCleaners } from "./components/EmployeeManagement/DeleteCleanerInterface";
import { DeleteConf } from "./components/EmployeeManagement/DeleteConf";
import LeaveRegistration from "./components/EmployeeManagement/CreateLeave";
import { AllTrainerLeaves } from "./components/EmployeeManagement/AllTrainerLeaves";
import LeavesList from "./components/EmployeeManagement/TrainerLeavesView";
import TrainerLeavesEdit from "./components/EmployeeManagement/TrainerLeavesEdit";
import CreateEmployeeSalary from "./components/EmployeeManagement/CreateEmployeeSalary";
import { AllSalaries } from "./components/EmployeeManagement/ViewSalaries";
/*Janudi --> Employee Registration ---> End*/

//shehan imports

import AllprogramsMemer from "./components/WorkoutProgramsMember/AllPrograms/member-programs";
import ReportPage from "./components/WorkoutProgramAdmin/ProgramsReport/ReportPage";
import AllProgramsAdmin from "./components/WorkoutProgramAdmin/AllProgramsAdmin/AllProgramsAdmin";
import CreateProgramAdmin from "./components/WorkoutProgramAdmin/CreateProgramAdmin/CreateProgramAdmin";
import EditProgramAdmin from "./components/WorkoutProgramAdmin/EditProgramAdmin/EditProgramAdmin";
import ProgramDetailsAdmin from "./components/WorkoutProgramAdmin/ProgramDetailsAdmin/ProgramDetailsAdmin";
import Programexpand from "./components/WorkoutProgramsMember/SelectProgram/Programexpand";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/footer";
import FooterTrainer from "./components/Footer/FooterTrainer";
import LandingPage from "./Screens/LandingPage/LandingPage";
import HomePage from "./Screens/HomePage/HomePage";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen/RegisterScreen";
import ProfileScreen from "./Screens/ProfileScreen/ProfileScreen";

//Sandani's imports
/*request workout schedules CRUD function*/
import CreateRequest from "./components/RequestSchedule/CreateRequest";
import HomeRequest from "./components/RequestSchedule/HomeRequest";
import EditRequest from "./components/RequestSchedule/EditRequest";
import RequestDetails from "./components/RequestSchedule/RequestDetails";
import NavBar from "./components/RequestSchedule/NavBar";
import MemHome from "./components/RequestSchedule/MemHome";
// import SchReport from "./components/RequestSchedule/Sch_Req_Report";

/*pre-defined workout schedule function*/
import PreAdmin from "./components/PreSchedules/PreAdmin";
import PreAdmin_Mem from "./components/PreSchedules/PreAdmin_Mem";
// import ScheduleReport from "./components/PreSchedules/SchReport/ScheduleReport";
import Sch_Req_Report from "./components/RequestSchedule/Sch_Req_Report";
import { getPrePosts } from "./actions/preposts";
import Predisplay from "./components/PreSchedules/PrePosts/PrePost/Predisplay";


//-------------------------------Dulshan Member QandA-------------------------------
import { QandA } from "./components/QAndASection/QandA";
import { CreateQuestion } from "./components/QAndASection/CreateQuestion";
import { UpdateQuestion } from "./components/QAndASection/UpdateQuestion";
import { DeleteQuestion } from "./components/QAndASection/DeleteQuestion";
import { OtherQuestionsM } from "./components/QAndASection/OtherQuestionsM";
import { CreateAnswer } from "./components/QAndASection/CreateAnswer";
import { MyAnswers } from "./components/QAndASection/MyAnswers";
import { UpdateAnswer } from "./components/QAndASection/UpdateAnswer";
import { DeleteAnswer } from "./components/QAndASection/DeleteAnswer";
//-------------------------------Dulshan Trainer QandA----------------------------------------
import { MyAnswersT } from "./components/QAndASection/MyAnswersT";
import { CreateAnswerT } from "./components/QAndASection/CreateAnswerT.js";
import { UpdateAnswerT } from "./components/QAndASection/UpdateAnswerT";
import { OtherQuestionsT } from "./components/QAndASection/OtherQuestionsT";
import { DeleteAnswerT } from "./components/QAndASection/DeleteAnswerT";
//------------------------------Dulshan Feedback Management-----------------------------------
import { Feedback } from "./components/FeedbackSection/Feedback";
import { CreateFeedback } from "./components/FeedbackSection/CreateFeedback";
import { Trainers } from "./components/FeedbackSection/Trainers";
import { TrainerDetails } from "./components/FeedbackSection/TrainerDetails";
import { UpdateFeedback } from "./components/FeedbackSection/UpdateFeedback";
import { DeleteFeedback } from "./components/FeedbackSection/DeleteFeedback";

//-------------------------------Dulshan Trainer Feedback----------------------------------------
import { FeedbackT } from "./components/FeedbackSection/FeedbackT";
import { ViewFeedbackT } from "./components/FeedbackSection/ViewFeedbackT";

//  Manushika ClientRequest
import CreatePost from "./components/ClientRequest/CreatePost";
import Home from "./components/ClientRequest/Home";
import EditPost from "./components/ClientRequest/EditPost";
import PostDetails from "./components/ClientRequest/PostDetails";
import ptEdit from "./components/ClientRequest/ptEdit";
//newly added
import Admin from "./components/trainerBlog/Request/Admin";
import ReportPT from "./components/trainerBlog/Request/ReportPT/ReportPT";
import MemForm from "./components/trainerBlog/Request/MemForm";
import PostBDetails from "./components//trainerBlog/Request/Display/PostBDetails";
import { getBlogPosts } from "./actions/blogposts";
//Lakshan Receptionist
import viewMembers from "./Receptionist/viewMembers";
import editMember from "./Receptionist/editMember";
import memberPannel from "./Receptionist/memberPannel";

// {/*----------->> Amantha Trainer Login <<-----------*/}
import TrainerLandingPage from "./Screens/LandingPage/TrainerLandingPage";
import TrainerHomePage from "./Screens/HomePage/TrainerHomePage";
import TrainerLoginScreen from "./Screens/LoginScreen/TrainerLoginScreen";
import TrainerRegisterScreen from "./Screens/RegisterScreen/TrainerRegisterScreen";
import TrainerProfileScreen from "./Screens/ProfileScreen/TrainerProfileScreen";
import TrainerHeader from "./components/Header/TrainerHeader";
import ReportWorkout from "./components/WorkoutSupportManagement/Report/ReportWorkout";
import AllTrainers from "./Screens/ProfileScreen/AllTrainers";

// {/*----------->> Amantha Events <<-----------*/}
import AddEvents from "./components/Events/AddEvents";
import AllEvents from "./components/Events/AllEvents";
import UpdateEvent from "./components/Events/UpdateEvent";
import EventDetails from "./components/Events/EventDetails";
import AddInterest from "./components/Interests/AddInterest";
import AllInterest from "./components/Interests/AllInterests";
import EventLandingPage from "./components/Events/EventLandingPage";
import AllEventsMember from "./components/Events/AllEventsMember";

// Admin
import AdminLoginScreen from "./Screens/LoginScreen/AdminLoginScreen";
import AdminProfileScreen from "./Screens/ProfileScreen/AdminProfileScreen";
import AdminHomePage from "./Screens/HomePage/AdminHomePage";
import CreateNote from "./Screens/CreateNote/CreateNote";
import SingleNote from "./Screens/CreateNote/SingleNote";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorkouts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getBlogPosts());
  }, [currentId, dispatch]);

  return (
    <BrowserRouter>
      <Route exact path="/" render={() => <Redirect to="/member" />} />
      <Route path="/member" component={Header} />
      <Route path="/admin" component={AdminHeader} />
      <Route path="/employee/" component={TrainerHeader} />
      <Route
        path="/employee/workouts"
        exact
        component={() => <Workouts setCurrentId={setCurrentId} />}
      ></Route>
      <Route
        path="/employee/workouts/add"
        exact
        component={() => (
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        )}
      ></Route>
      <Route
        path="/employee/workouts/update/:id"
        exact
        component={() => (
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        )}
      ></Route>
      <Route path="/employee/workouts/:id" exact component={WorkoutDetails} />
      <Route path="/member/workouts" exact component={WorkoutsDisplayMember} />
      <Route path="/member/workouts/:id" exact component={WorkoutDetails} />
      <Route
        exact
        path="/workouts"
        component={() => <Redirect to="/employee/workouts" />}
      />
      <Route
        exact
        path="/admin/workoutReport"
        exact
        component={ReportWorkout}
      />

      {/* manushika Routes*/}
      <div className="container">
        <Route
          path="/member/memberPTRequest/home"
          exact
          component={Home}
        ></Route>
        <Route
          path="/employee/memberPTRequest/ptEdit"
          exact
          component={ptEdit}
        ></Route>

        <Route
          path="/member/memberPTRequest/add"
          component={CreatePost}
        ></Route>
        <Route
          path="/employee/memberPTRequest/edit/:id"
          component={EditPost}
        ></Route>
        <Route
          path="/member/memberPTRequest/post/:id"
          component={PostDetails}
        ></Route>
      </div>
      {/* newly added*/}
      <div className="container">
        <Route
          path="/employee/trainerblog/Admin"
          exact
          component={() => <Admin setCurrentId={setCurrentId} />}
        ></Route>
        <Route
          path="/member/trainerblog/MemForm"
          exact
          component={() => <MemForm setCurrentId={setCurrentId} />}
        ></Route>
        <Route
          path="/member/trainerblog/ReportPT/ReportPT"
          exact
          component={() => <ReportPT setCurrentId={setCurrentId} />}
        ></Route>
        <Route path="/blogposts/:id" component={PostBDetails} />
      </div>

      {/**Sandani */}
      {/**schedules requests CRUD */}
      <div className="container">
        <Route
          path="/employee/scheduleR/HomeRequest"
          exact
          component={HomeRequest}
        ></Route>
        <Route
          path="/member/scheduleR/MemHome"
          exact
          component={MemHome}
        ></Route>
        {/* <Route
          path="/admin/scheduleR/SchReport"
          exact
          component={SchReport}
        ></Route> */}
        <Route path="/member/scheduleR/add" component={CreateRequest}></Route>
        <Route
          path="/member/scheduleR/edit/:id"
          component={EditRequest}
        ></Route>
        <Route
          path="/member/scheduleR/Xpost/:id"
          component={RequestDetails}
        ></Route>
         <Route
        exact
        path="/member/Sch_Req_Report"
        exact
        component={Sch_Req_Report}
         />
      </div>
      {/*Sandani-predefiend schedules  */}
      <div className="container">
        <Route
          path="/employee/PreAdmin"
          exact
          component={() => <PreAdmin setCurrentId={setCurrentId} />}
        ></Route>
         
           <Route  path="/employee/preposts/:id" exact component={Predisplay}></Route>
           <Route  path="/member/preposts/:id"  exact component={Predisplay}></Route>
          
        <Route
          path="/member/PreAdmin_Mem"
          exact
          component={() => <PreAdmin_Mem setCurrentId={setCurrentId} />}
        ></Route>

        {/* <Route
        exact
        path="/member/ScheduleReport"
        exact
        component={ScheduleReport}
         /> */}
      </div>

      <main>
        <Route path="/member" component={LandingPage} exact />
        <Route path="/member/login" component={LoginScreen} />
        <Route path="/member/profile" component={ProfileScreen} />
        <Route path="/member/register" component={RegisterScreen} />
        <Route path="/member/Home" component={() => <HomePage />} />

        {/*________________________ Amantha Routes Start ________________________*/}
        {/*----------->> Amantha Trainer Login Routes <<-----------*/}
        <Route path="/employee/" component={TrainerLandingPage} exact />
        <Route path="/employee/trainer-login" component={TrainerLoginScreen} />
        <Route
          path="/employee/trainer-profile"
          component={TrainerProfileScreen}
        />
        <Route
          path="/admin/trainer-register"
          component={TrainerRegisterScreen}
        />
        <Route
          path="/employee/trainerHome"
          component={() => <TrainerHomePage />}
        />

        {/*----------->> Amantha Event Routes <<-----------*/}
        <Route path="/employee/allevents" component={AllEvents} />
        <Route path="/employee/eventspage" component={AddEvents} />
        <Route path="/employee/update/:id" component={UpdateEvent} />
        <Route path="/member/eventdetails/:id" component={EventDetails} />
        <Route
          path="/employee/event-interest/allInterests"
          component={AllInterest}
        />
        <Route path="/member/allevents-member" component={AllEventsMember} />

        {/*----------->> Amantha Interest Routes <<-----------*/}
        <Route path="/event-interest/addInterests" component={AddInterest} />
        <Route
          path="/member/event-interest/event-landing"
          component={EventLandingPage}
        />
        <Route
          path="/employee/event-interest/allInterests"
          component={AllInterest}
        />
        {/*________________________ Amantha Routes End  ________________________*/}

        {/*________________________ Lakshan Extra Routes ________________________*/}

        <Route path="/admin/memberDetails" component={viewMembers}></Route>
        <Route path="/admin/editDetails/:id" component={editMember}></Route>
        <Route path="/admin/adminPanel" component={memberPannel}></Route>

        {/*________________________ Lakshan Extra Routes End________________________*/}

        {/*Janudi Routes --> Begin*/}
        <Route exact path="/admin/EmployeeHome" component={EmployeeHome} />
        <Route exact path="/admin/RegisterMenu" component={RegisterMenu} />
        <Route
          exact
          path="/admin/CleanerRegistrationForm"
          component={CleanerRegistrationForm}
        />
        <Route
          exact
          path="/admin/ViewEmployeeInterface"
          component={ViewEmployeeInterface}
        />
        <Route
          exact
          path="/admin/EditCleanerInterface"
          component={AllCleaners}
        />
        <Route exact path="/admin/update/:id" component={EditCleaner} />
        <Route
          exact
          path="/admin/DeleteCleanerInterface"
          component={DeleteCleaners}
        />
        <Route exact path="/admin/delete/:id" component={DeleteConf} />
        <Route exact path="/admin/leaves/add" component={LeaveRegistration} />
        <Route
          exact
          path="/employee/CreateLeave"
          component={LeaveRegistration}
        />
        <Route exact path="/admin/leaves" component={AllTrainerLeaves} />
        <Route exact path="/admin/leave/:Status" component={LeavesList} />
        <Route exact path="/admin/updateL/:id" component={TrainerLeavesEdit} />
        <Route
          exact
          path="/admin/salary/add"
          component={CreateEmployeeSalary}
        />
        <Route
          exact
          path="/admin/CreateSalary"
          component={CreateEmployeeSalary}
        />
        <Route exact path="/admin/salary" component={AllSalaries} />
        <Route exact path="/admin/ViewSalaries" component={AllSalaries} />
        {/*Janudi Routes --> End*/}

        {/*Shehan routes */}
        <Route
          path="/member/workout-programs"
          component={AllprogramsMemer}
        ></Route>
        <Route
          path="/member/expand-program/:id"
          component={Programexpand}
        ></Route>
        <Route path="/admin/ProgramsReport" component={ReportPage}></Route>
        <Route path="/admin/programs" component={AllProgramsAdmin}></Route>
        <Route path="/admin/add-program" component={CreateProgramAdmin}></Route>
        <Route
          path="/admin/edit-program/:id"
          component={EditProgramAdmin}
        ></Route>
        <Route
          path="/admin/expand-program/:id"
          component={ProgramDetailsAdmin}
        ></Route>

        {/*--------------------------------------------Dulshan Routes------------------------------------------------------*/}
        <Route exact path="/member/QandA/:email" component={QandA} />
        <Route exact path="/member/createQ/:email" component={CreateQuestion} />
        <Route exact path="/member/updateQ/:id" component={UpdateQuestion} />
        <Route exact path="/member/deleteQ/:id" component={DeleteQuestion} />
        <Route exact path="/member/otherQ/" component={OtherQuestionsM} />
        <Route exact path="/employee/otherQ/" component={OtherQuestionsT} />
        <Route exact path="/employee/a/createA/:id" component={CreateAnswerT} />
        <Route
          exact
          path="/employee/myAnswers/:username"
          component={MyAnswersT}
        />
        <Route exact path="/employee/updateA/:id" component={UpdateAnswerT} />
        <Route exact path="/employee/deleteA/:id" component={DeleteAnswerT} />
        <Route exact path="/member/a/createA/:id" component={CreateAnswer} />
        <Route exact path="/member/myAnswers/:email" component={MyAnswers} />
        <Route exact path="/member/updateA/:id" component={UpdateAnswer} />
        <Route exact path="/member/deleteA/:id" component={DeleteAnswer} />
        <Route exact path="/member/feedback/:email" component={Feedback} />
        <Route
          exact
          path="/employee/feedback/:username"
          component={FeedbackT}
        />
        <Route exact path="/employee/viewF/:id" component={ViewFeedbackT} />
        <Route exact path="/member/trainers/" component={Trainers} />
        <Route
          exact
          path="/member/trainer/:username"
          component={TrainerDetails}
        />
        <Route
          exact
          path="/member/trainer/createF/:id"
          component={CreateFeedback}
        />
        <Route exact path="/member/updateF/:id" component={UpdateFeedback} />
        <Route exact path="/member/deleteF/:id" component={DeleteFeedback} />

        {/* Admin */}
        <Route path="/admin/login" component={AdminLoginScreen} />
        <Route path="/admin/admin-profile" component={AdminProfileScreen} />
        <Route path="/admin/adminHome" component={() => <AdminHomePage />} />
        <Route path="/admin/createnote" component={CreateNote} />
        <Route path="/admin/note/:id" component={SingleNote} />

        <Route path="/member" component={Footer} />
        <Route path="/employee" component={FooterTrainer} />
        <Route path="/admin" component={Footer} />
      </main>
    </BrowserRouter>
  );
};

export default App;
