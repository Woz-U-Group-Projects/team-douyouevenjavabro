import React from 'react';
import * as api from '../utils/api';

class Vehicles extends React.Component {
    state = {
        vehicles: []
    };

    callVehicles = () => {
        api.fetchValues().then(response => {
            console.log('callVehicles: ', response);
            this.setState(() => {
                return {
                    vehicles: response
                };
            });
            console.log('after SetState: ', this.state.vehicles);
        });
    };

    componentDidMount() {
        this.callVehicles();
        console.log('componentDidMount: ', this.state.vehicles);
    }

    render() {
        return <div>{this.state.vehicles}</div>;
    }
}

export default Vehicles;