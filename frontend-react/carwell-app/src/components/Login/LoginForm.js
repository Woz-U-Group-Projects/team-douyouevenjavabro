import React from "react";
import axios from 'axios';

export default class LoginForm extends React.Component {
  state = {
    id: '',
  };
  handleChange = (e) => {
    this.setState({
      // [e.target.name]: e.target.value
      id: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Request to get user with: ", this.state);


    //--------------------------------------------------------------------------
    //uncomment line below for running local
    //const GetUserByIdAPI = "http://localhost:8080/api/users/";

    //--------------------------------------------------------------------------
    //uncomment and modify if needed line below for running with AWS
    const GetUserByIdAPI = `http://ec2-35-173-230-63.compute-1.amazonaws.com:8080/api/users/${this.state.id}`;


    axios.get(GetUserByIdAPI)
      .then(res => {
        console.log("Server Response: ", res);
        console.log("Result: ", res.data);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="submissionForm">

        <input type="text" name="ID" placeholder="User ID" value={this.state.id} onChange={this.handleChange} />

        <br />

        <button className="btn btn-danger btn-md btn-block" type="submit">Go to User</button>
      </form>
    );
  }
}