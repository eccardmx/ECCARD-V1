import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

class Header extends Component {
  render() {
    return (
      <AppBar
        style={{
          backgroundColor: "transparent",
          boxShadow: "none"
        }}
      >
        <Toolbar>
          <Typography style={{ flex: 1, fontSize: "1.5rem" }}>
            Welcome to Ec Cards!
          </Typography>
          <Button style={{ fontSize: "1.5rem" }}>About Us</Button>
          <Button style={{ fontSize: "1.5rem" }}>Login</Button>
          <Button style={{ fontSize: "1.5rem" }}>Register</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
