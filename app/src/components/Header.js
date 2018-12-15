import React from "react";
import {BrowserRouter as Router, Link } from "react-router-dom"
import logo from "./image/logo.jpg";

class Header extends React.Component {
  render() {
    return (
      <div className="header_wrapper">
        <nav className="header" role="banner">
          <img src={logo} alt="" />

          <div className="menu">
            <Link className="menuItem" to="/categories">EXPLORE</Link>
            <div className="menuItem">SUPPORT</div>
            {/* <Link className="menuItem" to = "/">SUPPORT</Link> */}
            <div className="menuItem">COMPANY</div>
          </div>

          <div className="nav">
            <i className="fas fa-search"></i>
            <i className="fas fa-user"></i>
            <i className="fas fa-shopping-cart"></i>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
