import React, { Component } from 'react';
import './App.css';
import Vehicles from './components/vehicles';

class App extends Component {
    render() {
        return (
            <div className="App">                
                <Vehicles />
            </div>
        );
    }
}

export default App;