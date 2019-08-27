import React from "react";
import "materialize-css/dist/css/materialize.min.css"
import "materialize-css/dist/js/materialize.min.js"

const App = () => (
  <div className="container">
    <Quote />
  </div>
);

function TextField(props) {
  return Field({ ...props, type: "text" });
}

function NumberField(props) {
  return Field({ ...props, type: "number" });
}

function Field(props) {
  return (
    <div className="input-field">
      <input placeholder={props.placeholder} id={props.id} type={props.type} onChange={props.onChange} />
      <label for={props.id}>{props.label}</label>
    </div>
  );
}

function Quote(props) {
  return (
    <div>
      <h3>Blue Rush Quote</h3>
      <hr />
      <h4>First, tell us about you.</h4>
      <div className="row">
        <div className="col s6">
          <TextField id="first_name" label="First Name" placeholder="John" />
        </div>
        <div className="col s6">
          <TextField id="last_name" label="Last Name" placeholder="Doe" />
        </div>
      </div>
      <hr />
      <h4>Next, a little about your room.</h4>
      <div className="row">
        <div className="col">
          <NumberField id="square_footage" label="Square Footage" placeholder="100" />
        </div>
        <div className="col s2">
          <RadioButton name="Blue" radioGroup="color" />
        </div>
        <div className="col s2">
          <RadioButton name="Green" radioGroup="color" />
        </div>
        <div className="col s2">
          <RadioButton name="Red" radioGroup="color" />
        </div>
        <div className="col s2">
          <RadioButton name="Yellow" radioGroup="color" />
        </div>
      </div>
    </div>
  );
}

function RadioButton(props) {
  return (
    <div>
      <label>
        <input type="radio" name={props.radioGroup} className="with-gap" />
        <span>{props.name}</span>
      </label>
    </div>
  );
}

export default App;
