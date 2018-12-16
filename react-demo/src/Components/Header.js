import React from "react";
import logo from "./image/logo.jpg";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="header_wrapper">
        <nav className="header" role="banner">
          <Link to="/">
            <img src={logo} alt="header logo" className="header__logo" />
          </Link>

          <div className="menu">
            <div className="menu__item">
              <Link to="/categories">EXPLORE</Link>
            </div>
            <div className="menu__item">
              <Link to="support">SUPPORT</Link>
            </div>
            <div className="menu__item">
              <Link to="company">COMPANY</Link>
            </div>
          </div>

          <div className="nav">
            <li>
              <Link to="/">
                <i className="fa fa-search" />
              </Link>
            </li>
            <li>
              <Link to="/login">
                <i className="fa fa-user" />
              </Link>
            </li>
            <li>
              <Link to="/search">
                <i className="fa fa-shopping-cart" />
              </Link>
            </li>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
