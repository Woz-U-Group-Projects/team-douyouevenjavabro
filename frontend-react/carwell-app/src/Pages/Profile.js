import axios from 'axios';
import React from "react";
import { Image } from 'semantic-ui-react';
import '../index.css';
import './pages.css'
import { Link } from 'react-router-dom';

const userAPI = "/user/";
const editUser = "/edituser/"

export default class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = { user: { id: '' } };
    this.handleDelete = this.handleDelete.bind(this);
  }
  goToManageUser() {
    console.log("goToManageUser was clicked");
    var url = editUser + this.user.id;
    window.location(url);
  }

  componentDidMount() {
    const { match: { params } } = this.props;

    axios.get(`http://ec2-35-173-230-63.compute-1.amazonaws.com:8080/api/users/${params.id}`)
      .then(({ data: user }) => {
        this.setState({ user });
      });
  }
  handleDelete() {
    const { match: { params } } = this.props;
    axios.delete(`http://ec2-35-173-230-63.compute-1.amazonaws.com:8080/api/users/${params.id}`)
      .then(() => {
        console.log('User deleted');

      });
  }


  render() {
    const { user } = this.state;
    return (
      <div className="profile">
        <h2>Profile</h2>
        <h4>Delete button is not wired in yet. Click Edit button to proceed to editing.</h4>
        <span key={user.id} className="">
          <span className="line">
            <div className="avatar">
              <Image wrapped size="small" src={`https://api.adorable.io/avatars/250/${user.id}`} />
            </div>
            <label className="boldText">&nbsp;&nbsp;ID:&nbsp;&nbsp;</label>{user.id}
          </span>
          <span className="line">
            <label className="boldText">&nbsp;&nbsp;First Name:&nbsp;&nbsp;</label>{user.firstName}
          </span>
          <span className="line">
            <label className="boldText">&nbsp;&nbsp;Last Name:&nbsp;&nbsp;</label>{user.lastName}
          </span>
          <span className="line lastLine">
            <label className="boldText">&nbsp;&nbsp;Username:&nbsp;&nbsp;</label>{user.username}
            <a href={userAPI + this.id}>
              <i className="fas fa-trash-alt fontAwesomeIcon fontAwesomeIconRight1"></i>
            </a>
          </span>

        </span>

        <Link to={editUser + user.id}>
          <span>
            <i className="fas fa-edit fontAwesomeIcon fontAwesomeIconRight2"></i>
          </span>
        </Link>

      </div>
    )
  }
}