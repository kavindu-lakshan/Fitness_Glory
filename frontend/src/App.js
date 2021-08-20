import axios from 'axios'
import React, { useState, Component } from 'react';

import { BrowserRouter, Route } from 'react-router-dom'
import AllProgramsAdmin from './components/AllProgramsAdmin';
import CreateProgramAdmin from './components/CreateProgramAdmin';
import EditProgramAdmin from './components/EditProgramAdmin';
import ProgramDetailsAdmin from './components/ProgramDetailsAdmin';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/footer";
import LandingPage from "./Screens/LandingPage/LandingPage";
import HomePage from "./Screens/HomePage/HomePage";
import { BrowserRouter, Route } from "react-router-dom";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen/RegisterScreen";
import ProfileScreen from "./Screens/ProfileScreen/ProfileScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Route path="/" component={LandingPage} exact />
        <Route path="/login" component={LoginScreen} />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/Home" component={() => <HomePage />} />

        <Route path='/admin-programs' component={AllProgramsAdmin}></Route>
        <Route path='/admin-add-program' component={CreateProgramAdmin}></Route>
        <Route path='/admin-edit-program/:id' component={EditProgramAdmin}></Route>
        <Route path='/admin-expand-program/:id' component={ProgramDetailsAdmin}></Route>

      </main>
      <Footer />
    </BrowserRouter>
  );
};
export default App;

