import React from 'react';
import axios from 'axios';

export default class CreateVehicle extends React.Component {
    state = {
        make: '',
        model: '',
        releaseYear: '',
        milesPerDay: '',
        milesAtRegistration: ''
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

        const vehicle = {
            make: this.state.make,
            model: this.state.model,
            releaseYear: this.state.releasYear,
            milesPerDay: this.state.milesPerDay,
            milesAtRegistration: this.state.milesAtRegistration
        };


        axios.post(`http://localhost:8080/api/vehicles/`, vehicle)
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
                        name="make"
                        placeholder="Make"
                        value={this.state.make}
                        onChange={this.handleChange}>
                    </input>
                <br />

                    <input
                        name="model"
                        placeholder="Model"
                        value={this.state.model}
                        onChange={this.handleChange} >
                    </input>
                <br />

                <input
                    name="releaseYear"
                    placeholder="Year"
                    value={this.state.releaseYear}
                    onChange={this.handleChange} >
                </input>
                <br />

                <input
                    name="milesPerDay"                    
                    placeholder="Miles Per Day"
                    value={this.state.milesPerDay}
                    onChange={this.handleChange} >
                </input>
                <br />

                <input
                    name="milesAtRegistration"                    
                    placeholder="Current Mileage"
                    value={this.state.milesAtRegistration}
                    onChange={this.handleChange} >
                </input>
                <br />

                <button type="submit">Create Vehicle</button>
            </form>
        );
    }
}