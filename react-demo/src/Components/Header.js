import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Categories } from "./Categories";

let auth = localStorage.getItem("authorized");
let find = `"User Not Found}"`;
if (auth != null) {
  find = auth.substring(auth.search(`"username":`) + 11);
}
export var user = find.substring(1, find.length - 2);
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isHovered: ""
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen(event) {
    event.preventDefault();
    this.setState({ isOpen: true, isHovered: "dropdown__content" });
  }
  handleClose() {
    this.setState({ isOpen: false, isHovered: "" });
  }
  render() {
    if (user==="User Not Found" && localStorage.getItem('admin')===null) {
      return (
        <div className="header__wrapper">
        <nav className="header" role="banner">
          <Link to="/" className="header__logo">
            <img
              src={process.env.PUBLIC_URL + "/img/image.png"}
              alt="header logo"
            />
          </Link>
          <ul className="menu">
            <li
              className="menu__item"
              onMouseEnter={this.handleOpen}
              onMouseLeave={this.handleClose}
              open={this.state.isOpen}
            >
              <Link to="/categories">EXPLORE</Link>
              {this.state.isOpen ? (
                <Categories className={this.state.isHovered} />
              ) : null}
            </li>

            <li className="menu__item">
              <Link to="/support">SUPPORT</Link>
            </li>

            <li className="menu__item">
              <Link to="company">COMPANY</Link>
            </li>
          </ul>

          <ul className="nav">
            <li>
              <Link to="/search">
                <i className="fas fa-search" />
              </Link>
            </li>
            <li>
              <Link to="/login">
                {<i className="fa fa-user" />}
                {/* {user} */}
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fas fa-shopping-cart" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      );
    } else if (user !== "admin" && localStorage.getItem("admin") == null && auth !==null) {
      return (
        <div className="header__wrapper">
          <nav className="header" role="banner">
            <Link to="/" className="header__logo">
              <img
                src={process.env.PUBLIC_URL + "/img/image.png"}
                alt="header logo"
              />
            </Link>
            <ul className="menu">
              <li
                className="menu__item"
                onMouseEnter={this.handleOpen}
                onMouseLeave={this.handleClose}
                open={this.state.isOpen}
              >
                <Link to="/categories">EXPLORE</Link>
                {this.state.isOpen ? (
                  <Categories className={this.state.isHovered} />
                ) : null}
              </li>

              <li className="menu__item">
                <Link to="/support">SUPPORT</Link>
              </li>

              <li className="menu__item">
                <Link to="company">COMPANY</Link>
              </li>
            </ul>

            <ul className="nav">
              <li>
                <Link to="/search">
                  <i className="fas fa-search" />
                </Link>
              </li>
              <li>
                <Link to="/profile">
                  {/* {<i className="fa fa-user" />} */}
                  {user}
                </Link>
              </li>
              <li>
                <Link to="/cart">
                  <i className="fas fa-shopping-cart" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      );
    } else if (localStorage.getItem("admin") !== null) {
      return (
        <div className="header__wrapper">
          <nav className="header" role="banner">
            <Link to="/" className="header__logo">
              <img
                src={process.env.PUBLIC_URL + "/img/image.png"}
                alt="header logo"
              />
            </Link>
            <ul className="menu">
              <li
                className="menu__item"
                onMouseEnter={this.handleOpen}
                onMouseLeave={this.handleClose}
                open={this.state.isOpen}
              >
                <Link to="/categories">EXPLORE</Link>
                {this.state.isOpen ? (
                  <Categories className={this.state.isHovered} />
                ) : null}
              </li>

              <li className="menu__item">
                <Link to="/support">SUPPORT</Link>
              </li>

              <li className="menu__item">
                <Link to="company">COMPANY</Link>
              </li>
            </ul>

            <ul className="nav">
              <li>
                <Link to="/search">
                  <i className="fas fa-search" />
                </Link>
              </li>
              <li>
                <Link to="/data">
                  <i className="fas fa-table" />
                </Link>
              </li>
              <li>
                <Link to="/product">
                  <i className="fas fa-shopping-cart" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      );
    }
  }
}
