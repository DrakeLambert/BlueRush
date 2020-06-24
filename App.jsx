import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => (
  <div className="container">
    <Quote />
  </div>
);

const optionTypes = {
  number: "number",
  text: "text",
  option: "option"
};

const quoteOptions = {
  squareFootage: {
    type: optionTypes.number,
    displayName: "Room Area (square feet)",
    unitPrice: 165
  },
  vanityLength: {
    type: optionTypes.number,
    displayName: "Vanity Length (linear inches)",
    unitPrice: 19
  }
};

function TextField(props) {
  return Field({ ...props, type: "text" });
}

function NumberField(props) {
  return Field({ ...props, type: "number" });
}

function Field(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <input className="form-control" placeholder={props.placeholder} id={props.id} type={props.type} onChange={props.onChange} />
      <small id={props.id + "_helpText"} className="form-text text-muted">
        {props.helpText}
      </small>
    </div>
  );
}

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squareFootage: null,
      vanityLength: null
    };
  }

  handleSquareFootageChange(event) {
    const squareFootage = event.target.value;
    this.setState({
      squareFootage: event.target.value
    });
  }

  handleVanityLengthChange(event) {
    const squareFootage = event.target.value;
    this.setState({
      vanityLength: event.target.value
    });
  }

  getTotalText() {
    if (this.state.squareFootage && this.state.vanityLength) {
      return this.state.squareFootage * 165 + this.state.vanityLength * 19
    }
    return "--.--";
  }

  render() {
    return (
      <div>
        <h4>First, tell us about you.</h4>
        <div className="form-row">
          <div className="col">
            <TextField id="first_name" label="First Name" placeholder="John" />
          </div>
          <div className="col">
            <TextField id="last_name" label="Last Name" placeholder="Doe" />
          </div>
        </div>
        <h4>Next, a little about your room.</h4>
        <div className="form-row">
          <div className="col-sm">
            <NumberField placeholder="70" type="number" label="Room Area (square feet)" helpText="Please include the area taken up by vanities, tubs, showers, and toilets." onChange={this.handleSquareFootageChange.bind(this)} />
          </div>
          <div className="col-sm">
            <NumberField placeholder="60" type="number" label="Vanity Length (inches)" onChange={this.handleVanityLengthChange.bind(this)} />
          </div>
        </div>
        <h4>Ok, here's your quote!</h4>
        <h1 className="text-center">${this.getTotalText()}</h1>
      </div>
    );
  }
}

export default App;
