//Functionality complete and tested - Rafael 2019/05/04
import React from 'react';
import axios from 'axios';

export default class DeleteVehicle extends React.Component {
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
        console.log("Request to delete vehicles with: ", this.state);

        const DeleteVehicleAPI = `http://ec2-35-173-230-63.compute-1.amazonaws.com:8080/api/vehicles/${this.state.id}`;

        axios.delete(DeleteVehicleAPI)
            .then(res => {
                console.log("Server Response: ", res);
                console.log("Result: ", res.data);
            });

    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="submissionForm">

                <input type="text" name="ID" placeholder="Vehicle ID" value={this.state.id} onChange={this.handleChange} />

                <br />
                 <button className="btn btn-danger btn-md btn-block" type="submit">Delete Vehicle</button>
            </form>
        );
    }
}