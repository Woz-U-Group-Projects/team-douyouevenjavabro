//Functionality complete and tested - Rafael 2019/05/04
//Edited by Nikos 2019/05/05
import React from 'react';
import axios from 'axios';

export default class UpdateVehicle extends React.Component {
    state = {
        id: '',
        owner: '',
        make: '',
        model: '',
        releaseYear: '',
        milesPerDay: '',
        milesAtRegistration: '',
        regDate: '',
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Request to update vehicle with: ", this.state);

        const vehicle = {
            id: this.state.id,
            owner: this.state.owner,
            make: this.state.make,
            model: this.state.model,
            releaseYear: this.state.releaseYear,
            milesPerDay: this.state.milesPerDay,
            milesAtRegistration: this.state.milesAtRegistration,
            regDate: this.state.regDate,
        };

        //--------------------------------------------------------------------------
        //uncomment line below for running local
        //const UpdateVehicleAPI = "http://localhost:8080/api/vehicles/${this.state.id}`";

        //--------------------------------------------------------------------------
        //uncomment and modify if needed line below for running with AWS
        const UpdateVehicleAPI = `http://ec2-35-173-230-63.compute-1.amazonaws.com:8080/api/vehicles/${this.state.id}`;

        axios.put(UpdateVehicleAPI, vehicle)
            .then(res => {
                console.log("Server Response: ", res);
                console.log("Result: ", res.data);
            });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="submissionForm">
                <input type="text" name="id" placeholder="Vehicle ID" value={this.state.id} onChange={this.handleChange} >
                </input>
                <br />

                <input type="text" name="owner" placeholder="owner" value={this.state.owner} onChange={this.handleChange}>
                </input>
                <br />

                <input type="text" name="make" placeholder="make" value={this.state.make} onChange={this.handleChange}>
                </input>
                <br />

                <input type="text" name="model" placeholder="model" value={this.state.model} onChange={this.handleChange}>
                </input>
                <br />

                <input type="number" name="releaseYear" placeholder="Release Year" value={this.state.releaseYear} onChange={this.handleChange}>
                </input>
                <br />

                <input type="number" name="milesPerDay" placeholder="Miles Per Day" value={this.state.milesPerDay} onChange={this.handleChange}>
                </input>
                <br />

                <input type="number" name="milesAtRegistration" placeholder="Miles At Registration" value={this.state.milesAtRegistration} onChange={this.handleChange}>
                </input>
                <br />
                
                <button className="btn btn-warning btn-md btn-block" type="submit">Update Vehicle</button>
            </form>
        );
    }
}