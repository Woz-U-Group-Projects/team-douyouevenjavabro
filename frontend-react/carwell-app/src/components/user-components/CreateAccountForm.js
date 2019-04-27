import React from "react";


export default class CreateAccountForm extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
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
        name="firstName"
        placeholder= "First Name" 
        value={this.state.firstName} 
        onChange={e => this.change(e)} >
        </input> 
        <br />

        <input 
        name="lastName"
        placeholder= "Last Name" 
        value={this.state.lastName} 
        onChange={e => this.change(e)} >
        </input> 
        <br /> 
       
        <input 
        name="email"
        placeholder= "email" 
        value={this.state.email} 
        onChange={e => this.change(e)} >
        </input>
        <br />  

        <input 
        name="userName"
        placeholder= "UserName" 
        value={this.state.userName} 
        onChange={e => this.change(e)} >
        </input> 
        <br /> 


        <input 
        name="password"
        type="password"
        placeholder= "Password" 
        value={this.state.password} 
        onChange={e => this.change(e)} >
        </input>
        <br />   

        <button onClick={e => this.onSubmit(e)}>Create Account</button>
        
      </form>

    )
  
  }

}