import React, { Component } from 'react';
import Vehicle from './Vehicle';
import User from './User';



class UserProfile extends Component{
render() {

    

    return(
        <div>
            User Profile 
            <User />
            <Vehicle />            
        </div>
    )
}

}

export default UserProfile;