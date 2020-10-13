import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false, 
      user: {}
    };
  };
  componentDidMount() {
    this.loginStatus()
  }
//should this be moved to my actions? --WILL NEED THUNK MIDDLEWARE
  loginStatus = () => {
    fetch('http://localhost:3001/logged_in', {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true, 
      user: data.user
    })
  }
  handleLogout = () => {
    this.setState({
      isLoggedIn: false, 
      user: {}
    })
  }

  render() {
    return (
      <div>
        <BrowserRoute>
          <Switch>
            <Route exact path='/' component={}/>
            <Route exact path='/login' component={}/>
            <Route exact path='/signup' component={}/>

          </Switch>
        </BrowserRoute>
      </div>
    );
  }
};
export default App;
