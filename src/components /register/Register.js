import React, { Component, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import { NavButton } from "../../utils/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogContent";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Divider from "@material-ui/core/Divider";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      registerName: "",
      registerLastName: "",
      registerEmail: "",
      registerPassword: ""
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
  onNameChange = event => {
    this.setState({
      registerName: event.target.value
    });
  };
  onLastNameChange = event => {
    this.setState({
      registerLastName: event.target.value
    });
  };
  onEmailChange = event => {
    this.setState({ registerEmail: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ registerPassword: event.target.value });
  };

  onSubmitSignIn = () => {
    fetch("http://localhost:3001/register" /*server side data fetch */, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.registerName,
        lastname: this.state.registerLastName,
        email: this.state.registerEmail,
        password: this.state.registerPassword
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
        <NavButton onClick={this.handleClickOpen}>Register</NavButton>
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
            Hola! Please Register
          </DialogTitle>
          <div className="login-wrapper">
            <DialogContent>
              <form onSubmit={event => this.onSubmitSignIn(event)}>
                <TextField
                  id="outlined-name"
                  label="Name"
                  value={this.state.registerName}
                  onChange={event => this.onNameChange(event)}
                  margin="normal"
                  variant="outlined"
                />
                <Divider />
                <TextField
                  id="outlined-name"
                  label=" Last Name"
                  value={this.state.registerLastName}
                  onChange={event => this.onLastNameChange(event)}
                  margin="normal"
                  variant="outlined"
                />
                <Divider />
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
                Register
              </NavButton>
            </DialogActions>
          </div>
        </Dialog>
      </Fragment>
    );
  }
}

export default Register;
