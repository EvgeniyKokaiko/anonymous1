import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./../assets/logo.png"


const Footer = () => {
    return (
    <div className="footer">
        <img className="logo_footer" src={Logo} alt=""/>
        <NavLink className="nav_buttons" to="/">Main</NavLink>
        <NavLink className="nav_buttons" to="/contacts">Contacts</NavLink>
        <NavLink className="nav_buttons" to="/user_profile">My Account</NavLink>
        <NavLink className="nav_buttons" to="/Music">Music</NavLink>
        <NavLink className="nav_buttons" to="/Videos">Videos</NavLink>
        <NavLink className="nav_buttons" to="/Photos">Videos</NavLink>
        <NavLink className="nav_buttons" to="/AllUsers">AllUsers</NavLink>
    </div>
    )
}


export default Footer