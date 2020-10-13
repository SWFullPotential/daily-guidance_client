import React, { Component } from 'react';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '', 
            email: '', 
            password: '', 
            password_confirmation: '', 
            erros: ''
        };
    }

    handleChange = (event) => {
        const {name, value} = event.target 
        this.setState({
            [name]: value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault()
    };

    render() {
        const {username, email, passwork, password_confirmation} = this.statereturn (
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

export default Signup;

