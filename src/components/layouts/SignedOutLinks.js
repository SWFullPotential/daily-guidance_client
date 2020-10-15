import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <nav>
      <NavLink to="/login">Log-In</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
    </nav>
  );
};

export default SignedOutLinks;
