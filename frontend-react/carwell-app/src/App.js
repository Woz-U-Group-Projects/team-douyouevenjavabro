import React, { Component } from 'react';
import './App.css';
import logo from './logo/logo.png';
import searchIcon from './logo/search-icon.png';
import Vehicles from './components/vehicles';
import AppMenu from './components/AppMenu';


class App extends Component {
    render() {
        let links = [
            { label: 'Home', link: 'localhost:3000/', active: true},
            { label: 'About', link: 'localhost:3000/about'},
            { label: 'Create Account', link: 'localhost:3000/create'},
            { label: 'Login', link: 'localhost:3000/login'}
        ];

        return (
            <div>
                <AppMenu links={links} logo={logo} searchIcon={searchIcon}/>                            
                <Vehicles />
            </div>
        );
    }
}

export default App;