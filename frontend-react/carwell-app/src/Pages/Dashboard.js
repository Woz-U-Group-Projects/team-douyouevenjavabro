import React, { Component } from "react";
import AllUsersList from '../components/Users/AllUsersList';
import CreateUser from '../components/Users/CreateUser';
import DeleteUser from "../components/Users/DeleteUser";
import UpdateUser from "../components/Users/UpdateUser";
import AllVehiclesList from "../components/Vehicles/AllVehiclesList";


class Dashboard extends Component {
  render() {
    return (
      <div>
        <hr />
        {/* <h2>Vehicles Table</h2>
        <Vehicles /> */}
        <h2>Vehicles List</h2>
        <AllVehiclesList />
        <hr />
        <h2>CreateVehicleForm</h2>
        {/* <CreateVehicleForm /> */}
        <hr />
        <h2>Vehicle</h2>
        {/* <Vehicle /> */}
        <hr />
        <h2>User</h2>
        {/* <User /> */}
        <hr />
        <h2>UserProfile</h2>
        {/* <UserProfile /> */}
        <hr />
        {/* <h2>All Users Table</h2>
        <AllUsersTable />
        <br /> */}
        <h2>All Users List</h2>
        <AllUsersList />
        <hr />
        <h2>Create User </h2>
        <CreateUser />
        <h2>Update User </h2>
        <UpdateUser />
        <h2>Delete User </h2>
        <DeleteUser />
        <hr />

      </div>
    );
  }
}


export default Dashboard;
