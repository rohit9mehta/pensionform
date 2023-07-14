import React, { useState } from "react";
import { Dropdown, Option } from "../components/Dropdown.js";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import { Link } from "react-router-dom";
// import { FormBuilder } from 'cb-react-forms';
import Home from '../pages';

 
const FormList = () => {
    return (
        <div>
            <h1>
                Form Selector
            </h1>
            <Link to="/formA">Form A</Link>
            <br></br>
            <Link to="/formB">Form B</Link>
            <br></br>
            <Link to="/formC">Form C</Link>
        </div>
    );
};
 
export default FormList;