import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

export class Welcome extends Component {
  render() {
    return (
      <div className="text_center">
        <h1>Welcome</h1>
        <NavLink className="link" to="/cards">
          All Cards
        </NavLink>
        <br />
        <br />
        <NavLink className="link" to="/daily_draw">
          Daily Reading
        </NavLink>
      </div>
    );
  }
}

export default connect()(Welcome);
