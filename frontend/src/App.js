import axios from 'axios'
import React, { useState, Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import AllProgramsAdmin from './components/AllProgramsAdmin';
import CreateProgramAdmin from './components/CreateProgramAdmin';
import EditProgramAdmin from './components/EditProgramAdmin';
import ProgramDetailsAdmin from './components/ProgramDetailsAdmin';

export default function App() {
  return (
    <BrowserRouter>
        <div className="container">
          <Route path='/admin-programs' component={AllProgramsAdmin}></Route>
          <Route path='/admin-add-program' component={CreateProgramAdmin}></Route>
          <Route path='/admin-edit-program/:id' component={EditProgramAdmin}></Route>
          <Route path='/admin-expand-program/:id' component={ProgramDetailsAdmin}></Route>

        </div>
    </BrowserRouter>
  )
}
