import React, { Component, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import { NavButton } from "../../utils/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogContent";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Divider from "@material-ui/core/Divider";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      signInEmail: "",
      signInPassword: ""
    };
  }
  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClickClose = () => {
    this.setState({
      open: false
    });
  };

  onEmailChange = event => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ signInPassword: event.target.value });
  };

  onSubmitSignIn = () => {
    fetch("http://localhost:3001/signin" /*server side data fetch */, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      })
      .catch(err => {
        console.log(err, "user not authenticated");
      });
  };

  render() {
    const { open } = this.state;
    return (
      <Fragment>
        <NavButton onClick={this.handleClickOpen}>Login</NavButton>
        <Dialog
          open={open}
          onClose={this.handleClickClose}
          aria-labelledby="form-dialog-title"
          style={{}}
        >
          <DialogTitle
            id="form-dialog-title"
            onClose={this.handleClickClose}
            style={{
              fontSize: "1.5rem"
            }}
          >
            Hola! Please Login
          </DialogTitle>
          <div className="login-wrapper">
            <DialogContent>
              <form onSubmit={event => this.onSubmitSignIn(event)}>
                <TextField
                  id="outlined-email-input"
                  label="Email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  margin="normal"
                  variant="outlined"
                  onChange={event => this.onEmailChange(event)}
                />
                <Divider />
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  margin="normal"
                  variant="outlined"
                  onChange={event => this.onPasswordChange(event)}
                />
              </form>
            </DialogContent>
            <DialogActions>
              <NavButton color="primary" onClick={this.handleClickClose}>
                Signin
              </NavButton>
            </DialogActions>
          </div>
        </Dialog>
      </Fragment>
    );
  }
}

export default Login;
