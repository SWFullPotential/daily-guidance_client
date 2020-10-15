import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./layouts/Home";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Card from "./deck/Card";
import DeckContainer from "./deck/DeckContainer";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route path="/cards" component={DeckContainer} />
      <Route path={`/cards/:id`} component={Card} />
    </Switch>
  );
};

export default Router;
