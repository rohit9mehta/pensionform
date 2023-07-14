import { useState } from "react";
import { FormTemplates } from "./formtemplates.js"

export default function UserForm({addContact, formID}) {

  const formTemplate = FormTemplates[formID];

  //fix, have to use map or something to initialize all keys to "" instead of hardcoding fields
  const [contactInfo, setContactInfo] = useState({
    field1: "",
    field2: "",
    field3: "",
    field4: "",
  });

  const buttonState = {
    button: 1
  };

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addContact(contactInfo);
    setContactInfo({ ...contactInfo, [event.target.name]: "" });
    if (buttonState.button === 1) {
        //generate key
        //prompt user for email
        //send key to user
        console.log("Saved!");
    }
    if (buttonState.button === 2) {
        //write to database
        console.log("Submitted!");
    }
    console.log(contactInfo);
  };

  const mapFunction = (x) => {
    return <div key={x}>
        <input
        type={formTemplate[x]["type"]}
        name={x}
        placeholder={formTemplate[x]["placeholder"]}
        value={contactInfo[x]}
        onChange={handleChange}
        />
    </div>
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}> 
        <div>
          <h3>{formID}</h3>
        </div>
        {Object.keys(formTemplate).map(mapFunction)}
        <div>
          <button onClick={() => (buttonState.button = 1)} type="save">Save Form</button>
          <button onClick={() => (buttonState.button = 2)} type="submit">Submit Form</button>
        </div>
      </form>
    </div>
  );
}