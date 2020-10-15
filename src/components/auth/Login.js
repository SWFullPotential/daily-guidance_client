import React, { Component } from "react";
import { connect } from "react-redux";
import { createSession } from "../../actions/userActions";

export class Login extends Component {
  state = {
    username: "",
    email: "",
    password: "",
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      username: "",
      email: "",
      password: "",
    });
    this.props.createSession(this.state);
    this.props.history.push("/welcome");
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h1>Log In</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="username"
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            placeholder="password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button placeholder="Submit" type="submit">
            Log In
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createSession: (userData) => dispatch(createSession(userData)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
