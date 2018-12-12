import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import logo from './image/logo.jpg';

class Header extends React.Component {
    render() {
        return (
            <nav className="header">
                <img src={logo} alt="" />

                <div className="menu">
                    <div className="menuItem">EXPLORE</div>
                    <div className="menuItem">SUPPORT</div>
                    <div className="menuItem">COMPANY</div>
                </div>

                <div className="nav">
                    <i className="fa fa-search"></i>
                    <i className="fa fa-user"></i>
                    <i className="fa fa-shopping-cart"></i>
                </div>
            </nav>
        )
    }
}

export default Header;