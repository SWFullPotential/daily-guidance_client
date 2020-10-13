import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStore } from 'redux';
import { createSession } from '../../actions/userActions'

export class Login extends Component {
   state = {
            username: '',
            email: '',
            password: '', 
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            username: '', 
            email: '', 
            password: ''
        })
        this.props.createSession(this.state)
        this.props.history.push('/')
    }

    handleChange = (event) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return (
            <div>
                <h1>Log In</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    placeholder="username"
                    type="text"
                    name="username"
                    value={username}
                    onChange={this.handleChange}/>
                    <input
                    placeholder="password"
                    type="password"
                    name="passowrd"
                    value={password}
                    onChange={this.handleChange}/>
                    <button placeholder="Submit" type="submit">Log In</button>
                    <div>
                        or <Link to='/signup'>Sign Up</Link>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createSession: userData => dispatch(createStore(userData))
    }
}

export default connect(null, mapDispatchToProps)(Login);
