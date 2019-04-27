import React, { Component } from "react";
import Vehicles from "../vehicle-components/Vehicles";
import CreateVehicleForm from "../vehicle-components/CreateVehicleForm";
import Vehicle from "../vehicle-components/Vehicle";
import User from "../user-components/User";
import UserProfile from "../user-components/UserProfile";
import Users from "../user-components/Users";

class Test extends Component {
  render() {
    return (
      <div>
        <hr />
        <h2>Vehicles</h2>
        <Vehicles />
        <hr />
        <h2>CreateVehicleForm</h2>
        <CreateVehicleForm />
        <hr />
        <h2>Vehicle</h2>
        <Vehicle />
        <hr />
        <h2>User</h2>
        <User />
        <hr />
        <h2>UserProfile</h2>
        <UserProfile />
        <hr />
        <h2>Users</h2>
        <Users />
        <hr />

      </div>
    );
  }
}

export default Test;
