import React from 'react';
import * as userApi from '../APIs/userApi';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class User extends React.Component {
  

    state = {
        users: []
    };

    callUsers = () => {
        userApi.fetchValues().then(response => {
            console.log('callUsers: ', response);
            this.setState(() => {
                return {
                    users: response
                };
            });
            console.log('after SetState: ', this.state.users);
        });
    };

    componentDidMount() {
        this.callUsers();
        console.log('componentDidMount: ', this.state.users);
    }

    renderUsers() {

        const CustomTableCell = withStyles(theme => ({
            head: {
              backgroundColor: theme.palette.common.black,
              color: theme.palette.common.white,
            },
            body: {
              fontSize: 14,
            },
          }))(TableCell);
          
          // const styles = theme => ({
          //   root: {
          //     width: '100%',
          //     marginTop: theme.spacing.unit * 3,
          //     overflowX: 'auto',
          //   },
          //   table: {
          //     minWidth: 700,
          //   },
          //   row: {
          //     '&:nth-of-type(odd)': {
          //       backgroundColor: theme.palette.background.default,
          //     },
          //   },
          // });

        return (
            
           
                  <Paper>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <CustomTableCell>First Name</CustomTableCell>
                          <CustomTableCell align="right">Last Name</CustomTableCell>
                          <CustomTableCell align="right">Username</CustomTableCell>
                          <CustomTableCell align="right">Email</CustomTableCell>            
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {this.state.users.map(user => (
                          <TableRow key={user.id}>
                            <CustomTableCell component="th" scope="row">{user.firstName}</CustomTableCell>
                            <CustomTableCell align="right">{user.lastName}</CustomTableCell>
                            <CustomTableCell align="right">{user.userName}</CustomTableCell>
                            <CustomTableCell align="right">{user.email}</CustomTableCell>             
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

export default User;