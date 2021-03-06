import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css";

class Nav extends Component {

    handleLogin() {
        return (
            <div className="logged-in-container">
                <a style={{ textDecoration: "none" }} href={process.env.REACT_APP_LOGOUT}><div className="btn">Logout</div></a>
            </div>
        )
    }

    render() {

        return (
            <div>
                <div className="header-parent">
                    <div className="header-child-left">
                        <Link to="/browse" className="logo-container" >Browse</Link>
                        <Link className="logo-container" to="/cart"> Cart </Link>
                        <Link className="logo-container" to="/shelf"> My Shelf </Link>

                    </div>
                    <div className="header-child-right">
                        {this.handleLogin.bind(this)()}
                    </div>
                </div>
            </div>
        )
    }
}


export default (Nav);