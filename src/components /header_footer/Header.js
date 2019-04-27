import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

import { EccardLogo } from "../../utils/Icons";
import { NavButton } from "../../utils/Button";

import About from "../about_us/About";

class Header extends Component {
  render() {
    return (
      <AppBar
        style={{
          backgroundColor: "transparent",
          boxShadow: "none"
        }}
      >
        <Toolbar style={{ display: "flex" }}>
          <Grid
            container
            style={{
              width: "70%",
              display: "inline-block",
              padding: "2rem"
            }}
          >
            <EccardLogo link={true} linkTo="/" width="70px" height="70px" />
          </Grid>

          <About />

          <NavButton>Login</NavButton>

          <NavButton>Register</NavButton>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
