import React from 'react';
import * as vehicleApi from '../../APIs/manageVehicleApi';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class Vehicle extends React.Component {


  state = {
    vehicles: []
  };

  callVehicles = () => {
    vehicleApi.fetchValues().then(response => {
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

  renderVehicles() {

    const CustomTableCell = withStyles(theme => ({
      head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
      },
      body: {
        fontSize: 14,
      },
    }))(TableCell);

    return (


      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <CustomTableCell>Make</CustomTableCell>
              <CustomTableCell align="right">Model</CustomTableCell>
              <CustomTableCell align="right">Year</CustomTableCell>
              <CustomTableCell align="right">Miles Per Day</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.vehicles.map(vehicle => (
              <TableRow key={vehicle.id}>
                <CustomTableCell component="th" scope="row">{vehicle.make}</CustomTableCell>
                <CustomTableCell align="right">{vehicle.model}</CustomTableCell>
                <CustomTableCell align="right">{vehicle.releaseYear}</CustomTableCell>
                <CustomTableCell align="right">{vehicle.milesPerDay}</CustomTableCell>
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

export default Vehicle;