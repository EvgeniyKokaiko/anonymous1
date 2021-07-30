import React, {useContext, useState} from "react";
import {Link, NavLink } from "react-router-dom";
import Logo from "./../assets/logo.png"
import {connect, ReactReduxContext} from "react-redux";
import {LogOut} from "../redux/actions";
import {userInfo} from "../interfaces/interface";


interface IProps {
    modalHandler(val: boolean, c: number): void
    isAuth: boolean
   LogOut(): Function
    SignReducer?: userInfo
}

const Header = (props: IProps) => {

const [modal, setModal] = useState(true)
    const [creator, setCreator] = useState(0)
    const [render, setRender] = useState(false)

    const modalHandler = (c: number) => {
    setModal(prev => !prev)
        props.modalHandler(modal, c)
        console.log(props);
    }


    const renderButtons = () => {
        return ( props?.SignReducer?.login !== undefined ?
            <button onClick={() => {props?.LogOut();window.location.href = "/"}} className="ui inverted red button header_button">Log Out</button>
        :
                <React.Fragment>
                    <button onClick={() => {modalHandler(1);setRender(true)}} className="ui inverted teal button header_button">Sign In</button>
                    <button onClick={() => {modalHandler(2);setRender(true)}} className="ui inverted primary button header_button">Sign up</button>
                </React.Fragment>
        )

    }

    return (
        <div className="header">
            <div className="container">
                <NavLink className="logo_route" exact
                         to="/"><img className="logo_image" src={Logo} alt=""/></NavLink>
                    <div className="ui icon input header_input">
                    <input type="text" placeholder="Search..." />
                        <i className="circular search link icon" style={{position: "relative", left: "-6%"}}></i>
                </div>
                {renderButtons()}
            </div>

        </div>
    )
}

const mapStateToProps = (state: any) => {
    return state
}


export default connect(mapStateToProps, {LogOut})(Header)