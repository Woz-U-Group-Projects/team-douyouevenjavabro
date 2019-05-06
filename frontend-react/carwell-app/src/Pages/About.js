import React, { Component } from "react";
import three from '../resources/three.gif'
import Helmet from 'react-helmet'

class About extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>CARWELL | About</title>
        </Helmet>
    <div className="columnAbout">
          <div className="image">
            <img src={three} alt="three" />
          </div>

          <div className="text">
            <h1>About!</h1>
            <p>Hm.. We had to do a lot of that to come up with the idea for the app.</p>
          </div>
        </div>
        </div>
    );
  }
}

export default About;
