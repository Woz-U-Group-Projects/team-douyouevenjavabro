import React, { Component } from "react";
import largeLogo from "../resources/largeLogo.png";
import "./pages.css";
// import HomeContent from '../components/content/HomeContent'
// import "bootstrap/dist/css/bootstrap.css";

class Home extends Component {
  render() {
    return (





        <div className="row column">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">

            <div className="carousel-item heroSlide1 active">
              <div className="carousel-caption d-none d-md-block">
                <h2 className="display-4">First Slide</h2>
                <p className="lead">This is a description for the first slide.</p>
              </div>
            </div>
            
            <div className="carousel-item">
              <div className="carousel-caption d-none d-md-block">
                <h2 className="display-4">Second Slide</h2>
                <p className="lead">This is a description for the second slide.</p>
              </div>
            </div>
            
            <div className="carousel-item">
              <div className="carousel-caption d-none d-md-block">
                <h2 className="display-4">Third Slide</h2>
                <p className="lead">This is a description for the third slide.</p>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
        </div>
          <div className="col-12 image">
            <img src={largeLogo} alt="logo" />
          </div>

          <div className="text">
            <h2>Welcome!</h2>
            <p>We are glad to see you here at Carwell. We hope you will find this
          application useful. In a nutshell, Carwell application will help your
          car(s) to be well. I know I know playing with words here... but really
          it is what it is. Here you can add your car(s) and Carwell will
          monitor your car(s) mileage. It will keep you informed about coming up
          milestones and will provide recommended services. These
          recommendations are official instructions from your car maker.</p>
          </div>
        </div>
    );
  }
}

export default Home;
