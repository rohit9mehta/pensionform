import React from 'react';
import { useState } from "react";
import ContactForm from "./components/ContactForm.jsx";
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

// class App extends React.Component {
  
//     state = {
//         details : [],
//     }
  
//     componentDidMount() {
  
//         let data ;
  
//         axios.get('http://localhost:8000/wel/')
//         .then(res => {
//             data = res.data;
//             this.setState({
//                 details : data    
//             });
//         })
//         .catch(err => {})
//     }
  
//   render() {
//     return(
//         <div className="App">
//             <Router>
//                 <Routes>
//                     <Route path='/' element={<FormList />} />
//                     <Route path='/formA' element={<Form form_id={"A"} />} />
//                     <Route path='/formB' element={<Form form_id={"B"} />} />
//                     <Route path='/formC' element={<Form form_id={"C"} />} />
//                 </Routes>
//             </Router>
//             <div>
//                     {this.state.details.map((detail, id) =>  (
//                     <div key={id}>
//                     <div >
//                         <div >
//                                 <h1>{detail.detail} </h1>
//                                 <footer >--- by
//                                 <cite title="Source Title">
//                                 {detail.name}</cite>
//                                 </footer>
//                         </div>
//                     </div>
//                     </div>
//                     )
//                 )}
//             </div>
//         </div>
        
//       );
//   }
// }
  
// export default App;