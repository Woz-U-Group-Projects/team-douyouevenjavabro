import React from 'react';
import largeLogo from '../../resources/largeLogo.png';
import "bootstrap/dist/css/bootstrap.css"
import '../../Pages/Home.css'

class HomeContent extends React.Component {
    constructor() {
        super();
        this.state = { someKey: 'someValue' };
    }

    render() {
        return (
            
            <div class="row">
            <Row>
                <div class="col-3 col-s-3 menu">
                    <img src={largeLogo} alt="logo" />
                </div>

                <div class="col-6 col-s-9">
                    <h1>Welcome!</h1>
                    <p>We are glad to see you here at Carwell. We hope you will find this
                    application useful. In a nutshell, Carwell application will help your
                    car(s) to be well. I know I know playing with words here... but really
                    it is what it is. Here you can add your car(s) and Carwell will
                    monitor your car(s) mileage. It will keep you informed about coming up
                    milestones and will provide recommended services. These
                    recommendations are official instructions from your car maker.</p>
                </div>
                </Row>
            </div>

        )

    }

    componentDidMount() {
        this.setState({ someKey: 'otherValue' });
    }
}

export default HomeContent;
