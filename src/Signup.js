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
        const {username, email, password} = this.state 
        let user = {
            username: username, 
            email: email, 
            password: password
        }
        fetch('http;//localhost:3001/login', {user}, {withCredentials: true})
        .then(response => {
            if (response.data.logged_in) {
                this.props.handleLogin(response.data)
            }
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

export default Signup;
