//Functionality complete and tested - Nikos 05/02/2019
import React from 'react';
import axios from 'axios';

export default class CreateUser extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        username: '',
        password: ''
    };



    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        // e.preventDefault();
        console.log("Request to create user with: ", this.state);

        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            username: this.state.username,
            password: this.state.password
        };

        //--------------------------------------------------------------------------
        //uncomment line below for running local
        //const CreateUserAPI = "http://localhost:8080/api/users/";

        //--------------------------------------------------------------------------
        //uncomment and modify if needed line below for running with AWS
        const CreateUserAPI = "http://ec2-35-173-230-63.compute-1.amazonaws.com:8080/api/users/";


        axios.post(CreateUserAPI, user)
            .then(res => {
                console.log("Server Response: ", res);
                console.log("Result: ", res.data);
            });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="submissionForm">
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={this.state.firstName}
                    onChange={this.handleChange}>
                </input>
                <br />

                <input
                    name="lastName"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    onChange={this.handleChange} >
                </input>
                <br />

                <input
                    name="username"
                    placeholder="Username"
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
                <button className="btn btn-success btn-md btn-block" type="submit">Create User</button>
            </form>
        );
    }
}