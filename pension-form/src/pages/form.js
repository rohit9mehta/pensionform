import React from "react";
import { useState } from "react";
import ContactForm from "../components/ContactForm.jsx";
import ContactList from "../components/ContactList.jsx";
 
const Form = ({ form_id }) => {
    // here we create an array state to store the contact form data
    const [contacts, updateContacts] = useState([]);

    const addContact = (contact) => {
        updateContacts([...contacts, contact]);
    };
    return (
        <div>
            <ContactForm addContact={addContact} formID={form_id}/>
            <ContactList contacts={contacts} />
        </div>
    );
};
 
export default Form;