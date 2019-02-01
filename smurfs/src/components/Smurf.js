import React from "react";

const Smurf = props => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>{props.height} Tall</h3>
      <h4> {props.age} Years old</h4>
    </div>
  );
};

export default Smurf;
