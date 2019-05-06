import Paper from "@material-ui/core/Paper";
import axios from 'axios';
import React from "react";
import '../../index.css';


const vehicleAPI = "http://ec2-35-173-230-63.compute-1.amazonaws.com:8080/api/vehicles/";
const vehicleServicesAPI = "http://ec2-35-173-230-63.compute-1.amazonaws.com:8080/api/servicemaster/reminder/";

export default class AllVehiclesList extends React.Component {
  state = {
    vehicles: []
  };

  componentDidMount() {
    axios.get('http://ec2-35-173-230-63.compute-1.amazonaws.com:8080/api/vehicles/admin').then(res => {
      console.log('Result for GET request to get all vehicles: ', res);
      this.setState({ vehicles: res.data });
    });
  }

  render() {
    return (
<div className="oneListItem">
      <ul>
        {this.state.vehicles.map(vehicle =>
          <Paper key={vehicle.id} className="tableRow">
            <li key={vehicle.id} className="oneListItem  liteText">
              <span className="line">
                <label className="boldText liteText">&nbsp;&nbsp;ID: &nbsp;&nbsp;</label>{vehicle.id}
              </span>
              <span className="line">
                <label className="boldText liteText">&nbsp;&nbsp;Owner:&nbsp;&nbsp; </label>{vehicle.owner}
              </span>
              <span className="line">
                <label className="boldText liteText">&nbsp;&nbsp;Make: &nbsp;&nbsp;</label>{vehicle.make}
              </span>

              <span className="line">
                <label className="boldText liteText">&nbsp;&nbsp;Model: &nbsp;&nbsp;</label>{vehicle.model}
              </span>
              <span className="line">
                <label className="boldText liteText">&nbsp;&nbsp;Year: &nbsp;&nbsp;</label>{vehicle.releaseYear}
              </span>
              <span className="line">
                <label className="boldText liteText">&nbsp;&nbsp;Daily Mileage: &nbsp;&nbsp;</label>{vehicle.milesPerDay}
              </span>
              <span className="line">
                <label className="boldText liteText">&nbsp;&nbsp;Miles @ Registration: &nbsp;&nbsp;</label>{vehicle.milesAtRegistration}
              </span>
              <span className="line lastLine">
                <label className="boldText liteText">&nbsp;&nbsp;Registration: &nbsp;&nbsp;</label>{vehicle.regDate}
                <a href={vehicleAPI + vehicle.id}>
                  <i className="fas fa-external-link-alt fontAwesomeIcon fontAwesomeIconRight4"></i>
                </a>
                <a target="blank" href={vehicleServicesAPI + vehicle.milesAtRegistration + "/" + vehicle.regDate + "/" + vehicle.milesPerDay}>
                  <i className="fas fa-tachometer-alt fontAwesomeIcon fontAwesomeIconRight3"></i>
                </a>
                <a target="blank" href={vehicleAPI + vehicle.id}>
                  <i className="fas fa-edit fontAwesomeIcon fontAwesomeIconRight2"></i>
                </a>
                <a href={vehicleAPI + vehicle.id}>
                  <i className="fas fa-trash-alt fontAwesomeIcon fontAwesomeIconRight1"></i>
                </a>
              </span>
            </li>
          </Paper>
        )}
      </ul>
      </div>
    )
  }
}
