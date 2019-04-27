import React from "react";
import * as vehiclesApi from "../../APIs/vehiclesApi";
// import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

class Vehicles extends React.Component {
  state = {
    vehicles: []
  };

  callVehicles = () => {
    vehiclesApi.fetchValues().then(response => {
      console.log("callVehicles: ", response);
      this.setState(() => {
        return {
          vehicles: response
        };
      });
      console.log("after SetState: ", this.state.vehicles);
    });
  };

  componentDidMount() {
    this.callVehicles();
    console.log("componentDidMount: ", this.state.vehicles);
  }

  renderVehicles() {
    const CustomTableCell = withStyles(theme => ({
      head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
      },
      body: {
        fontSize: 14
      }
    }))(TableCell);

    // ObjectId id;
    // String owner;
    // String make;
    // String model;
    // Integer releaseYear;
    // Integer milesPerDay;
    // Integer milesAtRegestration;
    // String regDate = setTimeStamp();

    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
            <CustomTableCell>ID</CustomTableCell>
            <CustomTableCell>Owner</CustomTableCell>
              <CustomTableCell>Make</CustomTableCell>
              <CustomTableCell>Model</CustomTableCell>
              <CustomTableCell >Year</CustomTableCell>
              <CustomTableCell>Miles Per Day</CustomTableCell>
              <CustomTableCell>Miles @ Registration</CustomTableCell>
              <CustomTableCell>Registration Date</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.vehicles.map(vehicle => (
              <TableRow key={vehicle.id}>
              <CustomTableCell>{vehicle.id}</CustomTableCell>
              <CustomTableCell>{vehicle.owner}</CustomTableCell>
              <CustomTableCell>{vehicle.make}</CustomTableCell>
                <CustomTableCell>{vehicle.model}</CustomTableCell>
                <CustomTableCell>{vehicle.releaseYear}</CustomTableCell>
                <CustomTableCell>{vehicle.milesPerDay}</CustomTableCell>
                <CustomTableCell>{vehicle.milesAtRegestration}</CustomTableCell>
                <CustomTableCell>{vehicle.regDate}</CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }

  render() {
    return <div>{this.renderVehicles()}</div>;
  }
}

export default Vehicles;
