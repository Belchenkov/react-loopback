import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="cyan">
          <div className="nav-wrapper">
            <a  href="/" className="brand-logo">Meetupz</a>
            <a href="" data-activates="main-menu" className="button-collapse">
              <i className="material-icons">menu</i>
            </a>
            <ul id="nav-mobile" className="right hide-on-small-only">
              <li>
                <Link to="/">
                  <i className="material-icons">person</i>
                </Link>
              </li>
            </ul>
            <ul className="side-nav" id="main-menu">
              <li>
                <Link to="/">
                  <i className="material-icons">person</i> Meetups
                </Link>
              </li>
              <li>
                <Link to="/meetups/add">
                  <i className="material-icons">add</i> Add Meetups
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

