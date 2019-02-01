import React from "react";

const Smurf = props => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>{props.height} Tall</h3>
      <h4> {props.age} Years old</h4>
      <input
        type="button"
        value="X"
        onClick={e => props.deleteSmurf(props.id)}
      />
      <input
        type="button"
        value="Update"
        onClick={() => props.updateSmurf(props.id, this.state)}
      />
    </div>
  );
};

export default Smurf;
