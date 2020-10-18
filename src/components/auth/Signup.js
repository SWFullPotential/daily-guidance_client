import React, { Component } from "react";
import { connect } from "react-redux";
import { createUser } from "../../actions/userActions";

export class Signup extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createUser(this.state);
    this.setState({
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
    });
    this.props.history.push("/welcome");
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };
  // both handleChange functions do same thing--dynamic handleChange
  //   handleChange = (event) => {
  //     this.setState({
  //       [event.target.name]: event.target.value,
  //     });
  //   };
  render() {
    return (
      <div className="text_center">
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="username"
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <br />
          <input
            placeholder="email"
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <input
            placeholder="password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />
          <input
            placeholder="password confirmation"
            type="password"
            name="password_confirmation"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
          />
          <br />
          <button placeholder="submit" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (userData) => dispatch(createUser(userData)),
  };
};

export default connect(null, mapDispatchToProps)(Signup);
