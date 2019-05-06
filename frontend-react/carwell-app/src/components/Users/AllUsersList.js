import Paper from "@material-ui/core/Paper";
import axios from 'axios';
import React from "react";
import '../../index.css';
import { Link } from 'react-router-dom'


const viewUser = "/profile/";
const editUser = "/edituser/"


export default class AllUsersList extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios.get('http://ec2-35-173-230-63.compute-1.amazonaws.com:8080/api/users/admin').then(res => {
      console.log('Result for GET request to get all users: ', res);
      this.setState({ users: res.data });
    });
  }

  render() {
    return (

      <ul>
        {this.state.users.map(user =>
          <Paper key={user.id} className="tableRow">
            <li key={user.id} className="oneListItem  liteText">
              <Link to={viewUser + user.id}>
                <span>
                  <label className="boldText liteText">&nbsp;&nbsp;ID:&nbsp;&nbsp;</label>{user.id}
                </span>
              </Link>
              <span className="line">
                <label className="boldText liteText">&nbsp;&nbsp;First Name:&nbsp;&nbsp;</label>{user.firstName}
              </span>
              <span className="line">
                <label className="boldText liteText">&nbsp;&nbsp;Last Name:&nbsp;&nbsp;</label>{user.lastName}
              </span>
              <span className="line lastLine">
                <label className="boldText liteText">&nbsp;&nbsp;Username:&nbsp;&nbsp;</label>{user.username}
                <Link to={editUser + user.id}>
                  <span>
                    <i className="fas fa-edit fontAwesomeIcon fontAwesomeIconRight2"></i>
                  </span>
                </Link>
                <a href={viewUser + user.id}>
                  <i className="fas fa-trash-alt fontAwesomeIcon fontAwesomeIconRight1"></i>
                </a>
              </span>
            </li>
          </Paper>
        )}
      </ul>

    )
  }
}
