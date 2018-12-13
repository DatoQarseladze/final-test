import React from "react";
import logo from "./image/logo.jpg";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Products from "../DB/products.json";
import { Headphones } from "./Headphones";
import { Phones } from "./Phones";
import { Categories } from "./Categories";

class Header extends React.Component {
  render() {
    return (
      <Router>
        <div className="header_wrapper">
          <nav className="header" role="banner">
            <img src={logo} alt="" />

            <div className="menu">
              <div className="menuItem">
                <Link to="/categories">EXPLORE</Link>
              </div>
              <div className="menuItem">
                <Link to="support">SUPPORT</Link>
              </div>
              <div className="menuItem">
                <Link to="company">COMPANY</Link>
              </div>
            </div>

            <div className="nav">
              <i className="fa fa-search" />
              <i className="fa fa-user" />
              <i className="fa fa-shopping-cart" />
            </div>
          </nav>
          <Route path="/categories" component={Categories} />
          <Route
            exact
            path="/headphones"
            render={() => <Headphones items={Products.HEADPHONES} />}
          />
          <Route
            path="/phones"
            render={() => <Phones items={Products.PHONES} />}
          />
        </div>
      </Router>
    );
  }
}

export default Header;
