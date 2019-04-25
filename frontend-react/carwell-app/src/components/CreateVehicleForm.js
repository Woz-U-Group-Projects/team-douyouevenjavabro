import React from "react";


export default class CreateVehicleForm extends React.Component {

  state = {
    Make: '',
    Model: '',
    Year: '',
    Mileage: '',
    
  };
  
  change = (e) => {

    this.setState({
      [e.target.name]: e.target.value
    });

  };

  onSubmit = e => {

    e.preventDefault();
    this.props.onSubmit(this.state);
    console.log(this.state);

  }

  render() {

    return(

      <form>
        <input 
        name="make"
        placeholder= "Make" 
        value={this.state.make} 
        onChange={e => this.change(e)} >
        </input> 
        <br />

        <input 
        name="model"
        placeholder= "Model" 
        value={this.state.model} 
        onChange={e => this.change(e)} >
        </input> 
        <br /> 
       
        <input 
        name="year"
        placeholder= "Year" 
        value={this.state.year} 
        onChange={e => this.change(e)} >
        </input>
        <br />  

        <input 
        name="mileage"
        placeholder= "Mileage" 
        value={this.state.mileage} 
        onChange={e => this.change(e)} >
        </input> 
        <br /> 

          

        <button onClick={e => this.onSubmit(e)}>Add Vehicle</button>
        
      </form>

    )
  
  }

}