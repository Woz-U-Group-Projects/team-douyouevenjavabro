import React from 'react';
import axios from 'axios';

export default class DeleteVehicle extends React.Component {
  state = {
    id: '',
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.delete(`https://localhost:8080/api/vehicles/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Vehicle ID:
            <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit">Delete Vehicle</button>
        </form>
      </div>
    )
  }
}