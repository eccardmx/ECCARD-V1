import React from "react";
import Button from "@material-ui/core/Button";

const Button = props => {
  return (
    <div style={{ backgroundColor: props.color }}>
      <div>Button</div>
    </div>
  );
};

export default Button;
