import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { destroySession } from "../../actions/userActions";

export class SignedInLinks extends Component {
  logout = () => {
    this.props.destroySession();
  };
  render() {
    return (
      <nav>
        <NavLink className="nlink" to="/welcome">
          Home
        </NavLink>

        <NavLink className="nlink" to="/" onClick={this.logout}>
          Logout
        </NavLink>
      </nav>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    destroySession: () => dispatch(destroySession()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
