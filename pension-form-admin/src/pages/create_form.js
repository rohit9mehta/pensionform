import React from "react";
import ReactDOM from 'react-dom';
import { ReactFormBuilder } from 'react-form-builder2';
import 'react-form-builder2/dist/app.css';
 
var items = [
    {
    key: 'TextInput',
  }, {
    key: 'Range',
  }, {
    key: 'RadioButtons',
  }, {
    key: 'Checkboxes',
  }, {
    key: 'Image',
  }, {
    key: 'NumberInput',
    }, {
    key: 'FileUpload',
    }
//   {
//     key: 'Number Input',
//     name: 'Number Input',
//     static: true,
//     // icon: 'fa fa-number',
//     content: 'Placeholder Number'
//   },
];

const CreateForm = () => {
    return (
        <div>
            <h1>
                Create Form Template
            </h1>
            <hr></hr>
            <ReactFormBuilder 
            url='path/to/GET/initial.json'
            toolbarItems={items}
            saveUrl='path/to/POST/built/form.json'
            />
        </div>
    );
};

export default CreateForm;