import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "./AppMenu.css";
import CreateAccount from "./pages/CreateAccount";
import Home from "./pages/About";
import About from "./pages/About";
import Login from "./pages/Login";
import UserProfile from "./user-components/UserProfile";
import Test from "./pages/Test";

class AppMenu extends Component {
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
    let searchForm = this.state.showForm ? (
      <form className="menu__search-form" method="POST">
        <input
          className="menu__search-input"
          placeholder="Type and hit enter"
        />
        >
      </form>
    ) : (
      ""
    );

    let linksMarkup = this.props.links.map((links, index) => {
      let linkMarkup = links.active ? (
        <Link className="menu__link menu__link--active" to={links.link}>
          {links.label}
        </Link>
      ) : (
        <Link className="menu__link" to={links.link}>
          {links.label}
        </Link>
      );
      return (
        <li key={index} className="menu__list-item">
          {linkMarkup}
        </li>
      );
    });

    return (
      <div>
        <div className="container center">
          <nav className="menu">
            <h1
              style={{ backgroundImage: "url(" + this.props.logo + ")" }}
              className="menu__logo"
            >
              CarWell!
            </h1>
            <h3>CarWell</h3>
            <div className="menu__right">
              <ul className="menu__list">{linksMarkup}</ul>

              <button
                onClick={this.showForm.bind(this)}
                style={{
                  backgroundImage: "url(" + this.props.searchIcon + ")"
                }}
                className="menu__search-button"
              />

              {searchForm}
            </div>
          </nav>
        </div>
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/create" component={CreateAccount} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/user/profile/{id}" component={UserProfile} />
          <Route exact path="/test" component={Test} />
        </div>
      </div>
    );
  }
}

export default AppMenu;
