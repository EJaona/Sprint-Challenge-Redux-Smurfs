import React from "react";

class Form extends React.Component {
  state = {
    name: "",
    height: "",
    age: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addSmurf = smurf => {
    this.props.addSmurf(smurf);
    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.onChange}
          placeholder="Enter Name"
        />
        <input
          type="text"
          name="height"
          value={this.state.height}
          onChange={this.onChange}
          placeholder="Enter Height"
        />
        <input
          type="text"
          name="age"
          value={this.state.age}
          onChange={this.onChange}
          placeholder="Enter Age"
        />
        <input
          type="button"
          value="Add Smurf"
          onClick={() => this.addSmurf(this.state)}
        />
      </form>
    );
  }
}

export default Form;
