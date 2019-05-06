import React from "react";
import LoginFormBox from './LoginFormBox';

export default class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      
    };
  }

  showLoginBox() {
    this.setState({isLoginOpen: true, isRegisterOpen: false});
  }

  

  render() {

    return (
      <div className="root-container">

        
        <LoginFormBox />

      </div>
    );

  }

}






