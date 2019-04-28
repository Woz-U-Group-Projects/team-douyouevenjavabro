import React from "react";
import * as usersApi from "../../APIs/usersApi";
// import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

class Users extends React.Component {
  state = {
    users: []
  };

  callUsers = () => {
    usersApi.fetchValues().then(response => {
      console.log("callUsers: ", response);
      this.setState(() => {
        return {
          users: response
        };
      });
      console.log("after SetState: ", this.state.users);
    });
  };

  componentDidMount() {
    this.callUsers();
    console.log("componentDidMount: ", this.state.users);
  }

  renderUsers() {
    const CustomTableCell = withStyles(theme => ({
      head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
      },
      body: {
        fontSize: 14
      }
    }))(TableCell);
//JSX - creating table populated with all users
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
            <CustomTableCell>ID</CustomTableCell>
              <CustomTableCell>First Name</CustomTableCell>
              <CustomTableCell>Last Name</CustomTableCell>
              <CustomTableCell>Username</CustomTableCell>
              <CustomTableCell>Password</CustomTableCell>
              <CustomTableCell>Role</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.users.map(user => (
              <TableRow key={user.id}>
                <CustomTableCell component="th" scope="row">
                  {user.id}
                </CustomTableCell>
                <CustomTableCell>{user.firstName}</CustomTableCell>
                <CustomTableCell>{user.lastName}</CustomTableCell>
                <CustomTableCell>{user.username}</CustomTableCell>
                <CustomTableCell>{user.password}</CustomTableCell>
                <CustomTableCell>{user.role}</CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }

  render() {
    return <div>{this.renderUsers()}</div>;
  }
}

export default Users;
