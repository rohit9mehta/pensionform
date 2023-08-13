import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ReactFormBuilder } from 'react-form-builder2';
// import DemoBar from './demobar';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import * as variables from './variables';

// const GlobalDndContext = (props) => {
//   return (
//       <DndProvider backend={HTML5Backend} key={1}>
//           {props.children}
//       </DndProvider>
//   );
// };

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// const app = ReactDOM.createRoot(
//   document.getElementById('form-builder'),
// );
// app.render(
//   <React.StrictMode>
//     <ReactFormBuilder variables={variables}
//       url='/api/formdata'
//       saveUrl='/api/formdata'
//     />
//   </React.StrictMode>,
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <DemoBar variables={variables} />
//   </React.StrictMode>,
//   document.getElementById('demo-bar')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
