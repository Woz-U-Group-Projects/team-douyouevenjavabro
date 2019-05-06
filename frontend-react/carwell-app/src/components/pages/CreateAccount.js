import React, { Component } from 'react';
import CreateAccountForm from '../user-components/CreateAccountForm';



class CreateAccount extends Component{

onSubmit = (fields) => {

console.log('App Component got: ', fields)
    
}

render() {    

    return(
        <div>            
            Create Account
            <CreateAccountForm onSubmit={fields => this.onSubmit(fields)} />
        </div>
    )
}

}

export default CreateAccount;