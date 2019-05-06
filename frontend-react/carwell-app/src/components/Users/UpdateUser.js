//Functionality complete and tested - Nikos 05/02/2019
import React from 'react';
import axios from 'axios';

export default class UpdateUser extends React.Component {
    state = {
        id: '',
        firstName: '',
        lastName: '',
        username: '',
        password: '',
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        // e.preventDefault();
        console.log("Request to udate user with: ", this.state);
        const user = {
            id: this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            username: this.state.username,
            password: this.state.password
        };

        //--------------------------------------------------------------------------
        //uncomment line below for running local
        //const UpdateUserAPI = "http://localhost:8080/api/users/";

        //--------------------------------------------------------------------------
        //uncomment and modify if needed line below for running with AWS
        const UpdateUserAPI = `http://ec2-35-173-230-63.compute-1.amazonaws.com:8080/api/users/${this.state.id}`;


        axios.put(UpdateUserAPI, user)
            .then(res => {
                console.log("Server Response: ", res);
                console.log("Result: ", res.data);
            });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="submissionForm">

                <input type="text" name="id" placeholder="User ID" value={this.state.id} onChange={this.handleChange} />

                <br />
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
                <button className="btn btn-warning btn-md btn-block" type="submit">Update User</button>
            </form>
        );
    }
}