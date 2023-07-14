import React from 'react';
import { useState } from "react";
import ContactForm from "./components/ContactForm.jsx";
import ContactList from "./components/ContactList.jsx";
import FormList from "./pages/form_list.js";
import Form from './pages/form';
import "./App.css";
// import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
// import { FormBuilder } from 'cb-react-forms';
// import Home from './pages';
// import CreateForm from './pages/create_form';
// import GenerateForm from './pages/generate_form';
// import Navbar from './components/index';

function App() {

  return (
    <div className="App">
      <Router>
            <Routes>
                <Route path='/' element={<FormList />} />
                <Route path='/formA' element={<Form form_id={"A"} />} />
                <Route path='/formB' element={<Form form_id={"B"} />} />
                <Route path='/formC' element={<Form form_id={"C"} />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;