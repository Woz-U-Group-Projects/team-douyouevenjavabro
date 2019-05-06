// import React from "react";
// import * as createVehicleApi from "../../APIs/createVehicleApi";
// // import PropTypes from 'prop-types';

// export default class CreateVehicleForm extends React.Component {
//   // ObjectId id;
//   // String owner;
//   // String make;
//   // String model;
//   // Integer releaseYear;
//   // Integer milesPerDay;
//   // Integer milesAtRegestration;
//   // String regDate = setTimeStamp();

//   createVehicle = () => {
//     createVehicleApi.postValues().then(response => {
//       console.log("callVehicles: ", response);
//       this.setState(() => {
//         return {
//           vehicles: response
//         };
//       });
//       console.log("after SetState: ", this.state.vehicles);
//     });
//   };

//   state = {
//     owner: "",
//     make: "",
//     model: "",
//     releaseYear: "",
//     milesPerDay: "",
//     milesAtRegestration: ""
//   };

//   change = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };

//   onSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     console.log(this.state);
//   };

//   render() {
//     return (
//       <form className="submissionForm">
//         <input
//           name="make"
//           placeholder="Make"
//           value={this.state.make}
//           onChange={e => this.change(e)}
//         />
//         <br />

//         <input
//           name="model"
//           placeholder="Model"
//           value={this.state.model}
//           onChange={e => this.change(e)}
//         />
//         <br />

//         <input
//           name="releaseYear"
//           placeholder="Release Year"
//           value={this.state.releaseYear}
//           onChange={e => this.change(e)}
//         />
//         <br />

//         <input
//           name="milesPerDay"
//           placeholder="Average miles per day"
//           value={this.state.milesPerDay}
//           onChange={e => this.change(e)}
//         />
//         <br />

//         <input
//           name="milesAtRegistration"
//           placeholder="Current Meleage"
//           value={this.state.milesAtRegistration}
//           onChange={e => this.change(e)}
//         />
//         <br />

//         <button onClick={e => this.onSubmit(e)}>Add Vehicle</button>
//       </form>
//     );
//   }
// }
