import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../actions/userActions'


export class Signup extends Component {
   state = {
            username: '', 
            email: '', 
            password: '', 
            password_confirmation: ''
    };
    
    handleSubmit = event => {
        event.preventDefault()
        this.state({
            username: '', 
            email: '', 
            password: '', 
            password_confirmation: ''
        })
        this.props.createUser(this.state)
        this.props.history.push('/')
    };
    
    handleChange = (event) => {
        const {name, value} = event.target 
        this.setState({
            [name]: value
        })
    };
    render() {
        const {username, email, password, password_confirmation} = this.state
        return (
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit()}>
                    <input 
                    placeholder="username" 
                    type="text" 
                    name="username"
                    value={username}
                    onchange={this.handleChange} 
                    />
                    <input 
                    placeholder="email" 
                    type="text" 
                    name="email"
                    value={email}
                    onchange={this.handleChange} 
                    />
                    <input 
                    placeholder="password" 
                    type="password" 
                    name="password"
                    value={password}
                    onchange={this.handleChange} 
                    />
                    <input 
                    placeholder="password confirmation" 
                    type="password" 
                    name="password_confirmation"
                    value={password_confirmation}
                    onchange={this.handleChange} 
                    />
                    <button placeholder="submit" type="submit">Sign Up</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createUser: (userData) => dispatch(createUser(userData))
    }
}

export default connect(null, mapDispatchToProps)(Signup);

