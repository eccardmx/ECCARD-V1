import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export const NavButton = props => (
  <Link to={props.linkTo}>
    <Button
      style={{
        backgroundColor: "transparent",
        fontSize: "1.5rem",
        textDecoration: "none",
        onClick: props.onClick
      }}
    >
      {props.children}
    </Button>
  </Link>
);
