import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header/Header';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import { Route } from "react-router-dom";
import Register from '../Pages/Register';
import Home from "../Pages/Home";
import About from "../Pages/About";
import Login from "../Pages/Login";
import Admin from "../Pages/Admin";
import Profile from '../Pages/Profile'

import AllUsersList from '../components/Users/AllUsersList';
import UpdateUser from '../components/Users/ManageUser';
import Dashboard from '../Pages/Dashboard';

library.add(faStroopwafel)

class App extends Component {
    render() {


        return (
            <Router>
                <Header/>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/admin" component={Admin} />
                    <Route exact path="/profile" component={AllUsersList} />
                    <Route exact path="/profile/:id" component={Profile} />
                    <Route exact path="/edituser" component={AllUsersList} />
                    <Route exact path="/edituser/:id" component={UpdateUser} />

                </div>
            </Router>

        );
    }
}

export default App;