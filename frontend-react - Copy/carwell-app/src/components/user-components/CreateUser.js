import React from 'react';
import axios from 'axios';

export default class CreateUser extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        username: '',
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
            lastName: this.state.lastName,
            username: this.state.username,
            password: this.state.password
        };


        axios.post(`http://localhost:8080/api/users/`, user)
            .then(res => {
                console.log(res);
                console.log(res.data);
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
                <button type="submit">Create User</button>
            </form>
        );
    }
}