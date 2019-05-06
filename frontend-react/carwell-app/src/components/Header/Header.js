import React, { Component } from "react";
import "./Header.css";
import logo from '../../resources/logoWheel.png'
import { Route, Link } from 'react-router-dom';
import Home from "../../Pages/Home";


export default class AppMenu extends Component {
  constructor() {
    super();

    this.state = {
      showForm: false
    };
  }

  showForm() {
    this.setState({
      showForm: !this.state.showForm
    });
  }

  render() {
    return (
      <div>
        <div className="header">
          {/* Navbar */}
          <nav className="navbar navbar-inverse navbar-expand-md navbar-dark bg-dark">
            {/* Navbar brand */}
            <Link to='/'>
              <span className="navbar-brand" href="/">
                <img
                  src={logo}
                  width="auto"
                  height="30"
                  className="d-inline-block align-top"
                  alt=""
                />{" "}
                Carwell
          </span>
            </Link>
            {/* Collapse button */}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#basicExampleNav"
              aria-controls="basicExampleNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            {/* Collapsible content */}
            <div className="collapse navbar-collapse" id="basicExampleNav">

              <ul className="navbar-nav mr-auto">
                <Link to='/'>
                  <li className="nav-item">
                    <span className="nav-link" href="/">
                      Home
                  <span className="sr-only">(current)</span>
                    </span>
                  </li>
                </Link>
                <Link to='/about'>
                  <span className="nav-item">
                    <span className="nav-link">
                      About
                </span>
                  </span>
                </Link>
                <Link to='/register'>
                  <li className="nav-item">
                    <span className="nav-link" href="/register">
                      Register
                </span>
                  </li>
                </Link>
                {/* Dropdown */}
                <li className="nav-item dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    href="/login"
                  >
                    Enter
                </span>
                  <div
                    className="dropdown-menu dropdown-primary"
                    aria-labelledby="navbarDropdownMenuLink"
                  ><Link to='/login'>
                      <span className="dropdown-item" >
                        Login
                  </span>
                    </Link>
                    <Link to='/dashboard'>
                      <span className="dropdown-item">
                        Dashboard
                  </span>
                    </Link>
                    <Link to='/profile'>
                      <span className="dropdown-item">
                        Profile
                  </span>
                    </Link>
                    <Link to='/logout'>
                      <span className="dropdown-item">
                        Logout
                  </span>
                    </Link>
                    <Link to='/admin'>
                      <span className="dropdown-item">
                        Admin
                  </span>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          <Route path='/' Component={Home} />
        </div>
      </div>
    );
  }
}