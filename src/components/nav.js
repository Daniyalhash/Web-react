import React from "react";import { Link } from 'react-router-dom';
import "./nav.css";
class Nav extends React.Component{
  state = {
    showNav: false,
  };

  toggleNav = () => {
    this.setState((prevState) => ({ showNav: !prevState.showNav }));
  };
    render(){
      return (
        <div>
          <nav className="custom-navbar">
            <div className="container">
              <Link className="navbar-brand font-bold" to="/">
                Future
              </Link>
              <div
                className={`menu-toggle ${this.state.showNav ? "show" : ""}`}
                onClick={this.toggleNav}
              >
                &#9776;
              </div>
              <ul className={`nav-list ${this.state.showNav ? "show" : ""}`}>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>    <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      );
    }
  }
export default Nav