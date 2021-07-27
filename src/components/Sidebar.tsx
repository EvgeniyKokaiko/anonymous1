import React from "react";
import { NavLink } from "react-router-dom";




const Sidebar = () => {

    return (
        <div className="aside_bar">
            <NavLink className="nav_buttons" exact to="/user_profile"><i className="address book outline icon"></i> My Anonymous</NavLink>
            <NavLink className="nav_buttons" exact to="/"><i className="newspaper outline icon"></i> AnoNews</NavLink>
            <NavLink className="nav_buttons" exact to="/Messenger"><i className="phone volume icon"></i> Letters</NavLink>
            <NavLink className="nav_buttons" exact to="/Friends"><i className="users white icon"></i> Friends</NavLink>
            <NavLink className="nav_buttons" exact to="/Groups"><i className="handshake outline icon"></i> Groups</NavLink>
            <NavLink className="nav_buttons" exact to="/Photos"><i className="object group outline icon"></i> Secret(Photos)</NavLink>
            <NavLink className="nav_buttons" exact to="/Music"><i className="music white icon"></i> Free Music</NavLink>
            <NavLink className="nav_buttons" exact to="/Videos"><i className="eye slash outline icon"></i> Video - "How to break Pentagon"</NavLink>
        </div>
    )
}

/*
"/user_profile"
"/News"
"/Messenger"
"/Friends"
"/Groups"
"/Photos"
"/Music"
"/Videos"
 */

export default Sidebar