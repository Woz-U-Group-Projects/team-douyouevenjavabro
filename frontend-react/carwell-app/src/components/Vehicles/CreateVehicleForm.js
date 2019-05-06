//Functionality complete and tested - Rafael 2019/05/04
import React from "react";
import axios from 'axios';
// import * as createVehicleApi from "../../APIs/createVehicleApi";
// import PropTypes from 'prop-types';

export default class CreateVehicleForm extends React.Component {

  state = {
      owner: '',
      make: '',
      model: '',
      releaseYear: '',
      milesPerDay: '',
      milesAtRegistration: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    // e.preventDefault();
    console.log("Request to create vehicle with: ", this.state);

    const vehicle = {
      owner: this.state.owner,
      make: this.state.make,
      model: this.state.model,
      releaseYear: this.state.releaseYear,
      milesPerDay: this.state.milesPerDay,
      milesAtRegistration: this.state.milesAtRegistration
    }


    const CreateVehicleAPI = "http://ec2-35-173-230-63.compute-1.amazonaws.com:8080/api/vehicles/";
    
    // e.preventDefault();
    // this.props.onSubmit(this.state);
    // console.log(this.state);

    axios.post(CreateVehicleAPI, vehicle)
      .then(res => {
        console.log("Server response: ", res);
        console.log("Result: ", res.data);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="submissionForm">
        <input
          type="text"
          name="owner"
          placeholder="Owner"
          value={this.state.owner}
          onChange={this.handleChange}
        >
        </input>
        <br/>
        <input
          name="make"
          placeholder="Make"
          value={this.state.make}
          onChange={this.handleChange}
        >
        </input>
        <br />

        <input
          name="model"
          placeholder="Model"
          value={this.state.model}
          onChange={this.handleChange}
        >
        </input>
        <br />

        <input
          type="number"
          name="releaseYear"
          placeholder="Release Year"
          value={this.state.releaseYear}
          onChange={this.handleChange}
        >
        </input>
        <br />

        <input
          type="number"
          name="milesPerDay"
          placeholder="Average miles per day"
          value={this.state.milesPerDay}
          onChange={this.handleChange}
        >
        </input>
        <br />

        <input
          type="number"
          name="milesAtRegistration"
          placeholder="Current Meleage"
          value={this.state.milesAtRegistration}
          onChange={this.handleChange}
        >
        </input>
        <br />

        <button className="btn btn-success btn-md btn-block" type="submit">Create Vehicle</button>
      </form>
    );
  }
}
