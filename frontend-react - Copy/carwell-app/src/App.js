import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import logo from './logo/logo.png';
import searchIcon from './logo/search-icon.png';
import AppMenu from './components/AppMenu';
import './App.css'


class App extends Component {
    render() {
        let links = [
            { label: 'Home', link: './', active: true },
            { label: 'About', link: '/about' },
            { label: 'Register', link: '/create' },
            { label: 'Login', link: '/login' },
            { label: 'Test', link: '/test' }

        ];

        return (


            <BrowserRouter>
                <AppMenu links={links} logo={logo} searchIcon={searchIcon} />
            </BrowserRouter>
            


        );
    }
}

export default App;