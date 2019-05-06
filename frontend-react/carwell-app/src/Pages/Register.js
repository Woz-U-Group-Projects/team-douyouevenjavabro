import React, { Component } from 'react';
import CreateUser from '../components/Users/CreateUser';



class CreateAccount extends Component{

onSubmit = (fields) => {

console.log('App Component got: ', fields)
    
}

render() {    

    return(
        <div>            
            <h4>Create Account</h4>
            <CreateUser onSubmit={fields => this.onSubmit(fields)} />
        </div>
    )
}

}

export default CreateAccount;