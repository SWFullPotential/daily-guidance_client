import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { checkSession } from "../actions/userActions";
import { connect } from "react-redux";
import Home from "./layouts/Home";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Card from "./deck/Card";
import DeckContainer from "./deck/DeckContainer";
import DailyDrawContainer from "./daily_draw/DailyDrawContainer";
import Welcome from "./layouts/Welcome";

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

        <Route exact path="/daily_draw" component={DailyDrawContainer} />
      </Switch>
    );
  }
}

export default connect(null, { checkSession })(Router);
