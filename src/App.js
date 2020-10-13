import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Home'
import Login from './components/authent/Login'
import Signup from './components/authent/Signup'

function App () {
      return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/signup' component={Signup}/>

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
export default App;
