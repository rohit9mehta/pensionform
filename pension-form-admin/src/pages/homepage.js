import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import { Link } from "react-router-dom";
// import { FormBuilder } from 'cb-react-forms';

 
const HomePage = () => {
    return (
        <div>
            <h1>
                Welcome
            </h1>
            <Link to="/createForm">Create New Form Template</Link>
            <br></br>
            <Link to="/manageForms">Manage Form Templates</Link>
        </div>
    );
};
 
export default HomePage;