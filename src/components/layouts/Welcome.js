import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import NavBar from "../layouts/NavBar";

export class Welcome extends Component {
  render() {
    return (
      <div className="text_center">
        <h1>Welcome</h1>
        <NavLink className="link" to="/daily_draw">
          Daily Reading
        </NavLink>
        <br />
        <br />
        <NavLink className="link" to="/cards">
          All Cards
        </NavLink>
      </div>
    );
  }
}

export default connect()(Welcome);
