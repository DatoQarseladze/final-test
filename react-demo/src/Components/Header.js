import React from "react";
import { Link } from "react-router-dom";
import { Categories } from "./Categories";

export const Header = () => {
  return (
    <div className="header__wrapper">
      <nav className="header" role="banner">
        <Link to="/" className="header__logo">
          <img
            src={process.env.PUBLIC_URL + "/img/logo.jpg"}
            alt="header logo"
          />
        </Link>

        <ul className="menu">
          <li className="menu__item dropdown">
            <Link to="/categories">EXPLORE</Link>
            {/* <Categories className="dropdown-content" /> */}
          </li>
          <li className="menu__item">
            <Link to="support">SUPPORT</Link>
          </li>
          <li className="menu__item">
            <Link to="company">COMPANY</Link>
          </li>
        </ul>

        <ul className="nav">
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
        </ul>
      </nav>
    </div>
  );
};
