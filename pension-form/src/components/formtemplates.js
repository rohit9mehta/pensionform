//todo: get this from admin specific to client

var FormTemplates = {};

FormTemplates["A"] = {"field1": {placeholder:"Name", type:"text"}, "field2": {placeholder:"Email", type:"email"}, "field3": {placeholder:"Phone Number", type:"number"}};
FormTemplates["B"] = {"field1": {placeholder:"Name", type:"text"}, "field2": {placeholder:"Snapchat", type:"text"}, "field3": {placeholder:"SSN", type:"number"}};
FormTemplates["C"] = {"field1": {placeholder:"Name", type:"text"}, "field2": {placeholder:"Instagram", type:"text"}, "field3": {placeholder:"Age", type:"number"}, "field4": {placeholder:"Gender", type:"text"}};

export { FormTemplates };
