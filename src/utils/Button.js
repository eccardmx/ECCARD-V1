import React from "react";
import Button from "@material-ui/core/Button";

export const NavButton = props => (
  <Button
    style={{
      backgroundColor: "transparent",
      fontSize: "1.5rem",
      textDecoration: "none"
    }}
    onClick={props.onClick}
  >
    {props.children}
  </Button>
);
