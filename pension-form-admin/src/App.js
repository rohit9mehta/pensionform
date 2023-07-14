import React from 'react';
import { useState } from "react";
import "./App.css";
// import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
// import { FormBuilder } from 'cb-react-forms';
import HomePage from './pages/homepage.js';
import CreateForm from './pages/create_form.js';
import ManageForms from './pages/manage_forms.js';
// import CreateForm from './pages/create_form';

// import GenerateForm from './pages/generate_form';
// import Navbar from './components/index';

function App() {

  return (
    <div className="App">
      <Router>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/createForm' element={<CreateForm />}  />
                <Route path='/manageForms' element={<ManageForms />} />
            </Routes>
        </Router>
    </div>

  );
}

export default App;