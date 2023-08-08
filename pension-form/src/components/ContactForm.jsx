import { useState } from "react";
import { FormTemplates } from "./formtemplates.js";
import React from "react";
import axios from "axios";

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    //fix, have to use map or something to initialize all keys to "" instead of hardcoding fields
    this.state = {
        contactInfo: {
            field1: "",
            field2: "",
            field3: "",
            field4: "",
        },
        error: null
    }
    this.formID = this.props.formID;
    this.formTemplate = FormTemplates[this.formID];
    this.button = 1;
    // this.mapFunction = (x) => {
    //     this.setState({component: <div key={x}>
    //         <input
    //         type={this.formTemplate[x]["type"]}
    //         name={x}
    //         placeholder={this.formTemplate[x]["placeholder"]}
    //         value={this.state.contactInfo[x]}
    //         onChange={this.handleChange}
    //         />
    //     </div>
    //     })
    // };
    // const buttonState = {
    //     button: 1
    // };
  }

  componentDidMount() {
    let data;
    axios
        .get("http://localhost:8000/wel/")
        .then((res) => {
            data = JSON.parse(res).data;
            this.setState({
                contactInfo: data,
            });
        })
        .catch((err) => {});
  }


  handleChange = (event) => {
    this.setState(prevState => ({
        contactInfo:{ ...this.state.contactInfo, [event.target.name]: event.target.value }
    }));
    // setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    const addContact = this.props.addContact;
    event.preventDefault();
    addContact(this.contactInfo);
    // this.setContactInfo({ ...this.state.contactInfo, [event.target.name]: "" });
    if (this.button === 1) {
        //generate key
        //prompt user for email
        //send key to user
        console.log("Saved!");
    }
    if (this.button === 2) {
        //write to database
        console.log("Submitted!");
  
        axios
            .post("http://localhost:8000/wel/", {
                detail: this.state.contactInfo,
            })
            // .then((res) => {
            //     this.setState(prevState => ({
            //         contactInfo:{ ...this.state.contactInfo, [event.target.name]: "" }
            //     }));
            // })
            .catch((err) => {});
    }
    console.log(this.state.contactInfo);
  };

  mapFunction = (x) => {
    return <div key={x}>
        <input
        type={this.formTemplate[x]["type"]}
        name={x}
        placeholder={this.formTemplate[x]["placeholder"]}
        value={this.state.contactInfo[x]}
        onChange={this.handleChange}
        />
    </div>
  };

  render() {
    // const mapFunction = this.mapFunction;
    return (
        <div className="form-container">
          <form onSubmit={this.handleSubmit}> 
            <div>
              <h3>{this.formID}</h3>
            </div>
            {Object.keys(this.formTemplate).map(this.mapFunction)}
            <div>
              <button onClick={() => (this.button = 1)} type="save">Save Form</button>
              <button onClick={() => (this.button = 2)} type="submit">Submit Form</button>
            </div>
          </form>
        </div>
      );
  }
}

export default UserForm;