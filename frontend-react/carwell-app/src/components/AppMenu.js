import React, { Component } from 'react';
import './AppMenu.css';

class AppMenu extends Component {

    constructor() {
        super();

        this.state = {
            showForm: false
        };
    }

    showForm(){

        this.setState({
            showForm: !this.state.showForm
        })        

    }

    render() {

        let searchForm = this.state.showForm ? (

                <form className="menu__search-form" method="POST"> 
                    
                    <input className="menu__search-input" placeholder="Type and hit enter"/>>
                
                </form>

        ) : '';

        let linksMarkup = this.props.links.map((links, index) => {

        let linkMarkup = links.active ? (
        <a className="menu__link menu__link--active" href={links.link}>{links.label}</a>
        ) : (
            <a className="menu__link" href={links.link}>{links.label}</a>
        );   
            return (
            <li key={index} className="menu__list-item">
                {linkMarkup}
            </li>
            );               
        })

        return (
            
            
                <div className="container center">
                    <nav className="menu">
                        <h1 style={{backgroundImage: 'url(' + this.props.logo + ')'}} className="menu__logo">CarWell!</h1>
                        <h3>CarWell</h3>
                        <div className="menu__right">
                        <ul className="menu__list">
                            {linksMarkup}
                        </ul>

                        <button onClick={this.showForm.bind(this)} style={{
                            backgroundImage: 'url('+ this.props.searchIcon +')'
                        }} className="menu__search-button"></button>

                        {searchForm}

                        </div>
                    </nav>
                </div>  
                             
             
            
        );
    }
}

export default AppMenu;