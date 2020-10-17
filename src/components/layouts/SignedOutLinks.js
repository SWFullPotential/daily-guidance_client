import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <nav>
      <NavLink className="nlink" to="/login">
        Log-In
      </NavLink>
      <NavLink className="nlink" to="/signup">
        Sign Up
      </NavLink>
    </nav>
  );
};

export default SignedOutLinks;
