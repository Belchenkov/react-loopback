import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="cyan">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">Meetups</a>
            <a href="" data-activates="main-menu" className="button-collapse">
              <i className="material-icons">menu</i>
            </a>
            <ul id="nav-mobile" className="right hide-on-small-only">
              <li>
                <Link to="/">
                  <i className="material-icons">people</i>
                </Link>
              </li>
            </ul>
            <ul className="side-nav" id="main-menu">
              <li>
                <Link to="/">
                  <i className="material-icons">people</i> Meetups
                </Link>
              </li>
              <li>
                <Link to="/meetups/add">
                  <i className="material-icons">add</i> Add Meetups
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <i className="material-icons">live_help</i> About
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }

}

export default Navbar;

