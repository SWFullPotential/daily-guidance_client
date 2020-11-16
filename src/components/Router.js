import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { checkSession } from "../actions/userActions";
import { connect } from "react-redux";
import Home from "./layouts/Home";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Card from "./deck/Card";
import DeckContainer from "./deck/DeckContainer";
import DrawContainer from "./daily_draw/DrawContainer";
import Welcome from "./layouts/Welcome";
import RandCard from "./daily_draw/RandCard";

class Router extends Component {
  componentDidMount() {
    this.props.checkSession();
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />

        <Route exact path="/welcome" component={Welcome} />

        <Route exact path="/cards" component={DeckContainer} />
        <Route exact path={`/cards/:id`} component={Card} />

        <Route exact path="/daily_draw" component={DrawContainer} />
      </Switch>
    );
  }
}

export default connect(null, { checkSession })(Router);
