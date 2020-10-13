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
        event.preventDefault();
        this.props.createUser(this.state)
        this.setState({
            username: '',
            email: '',
            password: '',
            password_confirmation: ''
        })
        this.props.history.push('/')
    };
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    placeholder="username" 
                    type="text" 
                    name="username"
                    value={this.state.username}
                    onchange={this.handleChange} 
                    />
                    <br></br>
                    <input 
                    placeholder="email" 
                    type="text" 
                    name="email"
                    value={this.state.email}
                    onchange={this.handleChange} 
                    />
                    <br></br>
                    <input 
                    placeholder="password" 
                    type="password" 
                    name="password"
                    value={this.state.password}
                    onchange={this.handleChange} 
                    />
                    <br></br>
                    <input 
                    placeholder="password confirmation" 
                    type="password" 
                    name="password_confirmation"
                    value={this.state.password_confirmation}
                    onchange={this.handleChange} 
                    />
                    <br></br>
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

