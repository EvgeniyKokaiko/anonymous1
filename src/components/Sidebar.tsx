import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import {ReactReduxContext} from "react-redux";




const Sidebar = () => {

    const context = useContext(ReactReduxContext)
    console.log(context.store.getState().SignReducer.login)
const user = context.store.getState().SignReducer.id
    return (
        <div className="aside_bar">
            { user !== undefined ? <NavLink className="nav_buttons" exact to={`/my_user_profile/${user}`}><i className="address book outline icon"></i> My Anonymous</NavLink> : <span className="nav_buttons">Not Found</span>}
            <NavLink className="nav_buttons" exact to="/"><i className="newspaper outline icon"></i> AnoNews</NavLink>
            <NavLink className="nav_buttons" exact to="/AllUsers"><i className="user secret icon"></i>User Database</NavLink>
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