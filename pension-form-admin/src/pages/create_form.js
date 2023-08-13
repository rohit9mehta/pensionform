import React from "react";
import ReactDOM from 'react-dom';
import { ReactFormBuilder, ElementStore, Registry } from 'react-form-builder2';
import 'react-form-builder2/dist/app.css';
import { get, post } from '../requests';
import axios from "axios";

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

class CreateForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formTemplate: {},
            error: null
        }
    }

    _onChange(formTemplate) {
        this.setState({
          formTemplate,
        });
      }

    componentDidMount() {
        let data;
        axios
            .get("http://localhost:8000/adminform/")
            .then((res) => {
                data = JSON.parse(res).data;
                this.setState({
                    formTemplate: data,
                });
            })
            .catch((err) => {});
        console.log(data);
        const update = this._onChange.bind(this);
        // ElementStore.subscribe((state) => update(state.data));
      }


    onPost = (data) => {
        // const update = this._onChange.bind(this);
        // ElementStore.subscribe((state) => update(state.formTemplate));
        this.setState({
            formTemplate: data,
        });
        return;
    }

    onPostHandler = (event) => {
        event.preventDefault();

        const url = 'http://localhost:8000/adminform/';

        console.log('onPost', url, this.state.formTemplate);

        axios
        .post("http://localhost:8000/adminform/", {
            detail: this.state.formTemplate,
        })
        .then((res) => {
            this.setState(prevState => ({
                formTemplate:{ ...this.state.formTemplate, [event.target.name]: "" }
            }));
        })
        .catch((err) => {});
    };

    render() {
        return (
            <div className="form-container">
                <form>
                    <div>
                        <h1>
                            Create Form Template
                        </h1>
                        <hr></hr>
                        <ReactFormBuilder
                        toolbarItems={items}
                        onPost={this.onPost}
                        />
                        <button onClick={this.onPostHandler} type="submit" className="btn btn-primary">Submit Form Template</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateForm;