import React from 'react';
import axios from 'axios';

export default class CreateUser extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        userName: '',
        password: ''
    };

    // handleChange = event => {
    //     this.setState({ name: event.target.value });
    // };

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
    };
    // handleSubmit = event => {
    //     event.preventDefault();

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);

        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName
        };


        axios.post(`http://localhost:8080/api/users/`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    First Name:
          <input
          type="text" 
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}>
          </input>
                    <br />
                </label>


                <input
                    name="lastName"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    onChange={this.handleChange} >
                </input>
                <br />


                <input
                    name="userName"
                    placeholder="UserName"
                    value={this.state.username}
                    onChange={this.handleChange} >
                </input>
                <br />


                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange} >
                </input>
                <br />
                <button type="submit">Create User</button>
            </form>
        );
    }
}