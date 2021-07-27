import React from "react";
import {Link, NavLink } from "react-router-dom";
import Logo from "./../assets/logo.png"


const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <NavLink className="logo_route" exact
                         to="/"><img className="logo_image" src={Logo} alt=""/></NavLink>
                    <div className="ui icon input header_input">
                    <input type="text" placeholder="Search..." />
                        <i className="circular search link icon"></i>
                </div>
                <button className="ui inverted teal button header_button">Sign In</button>
            </div>
        </div>
    )
}


export default Header