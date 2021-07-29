import React, {useContext, useState} from "react";
import {Link, NavLink } from "react-router-dom";
import Logo from "./../assets/logo.png"
import {ReactReduxContext} from "react-redux";


interface IProps {
    modalHandler(val: boolean, c: number): void
    isAuth: boolean
    LogOut(): void
}

const Header = (props: IProps) => {
    const context = useContext(ReactReduxContext)
    console.log(context.store.getState().SignReducer[0])
const [modal, setModal] = useState(true)
    const [creator, setCreator] = useState(0)
    const [render, setRender] = useState(false)

    const modalHandler = (c: number) => {
    setModal(prev => !prev)
        props.modalHandler(modal, c)
    }


let a = context.store?.getState()?.SignReducer

    const LogOutHandler = () => {
        props.LogOut();
        setRender(prev => !prev)
    }


    const renderButtons = () => {
        console.log(context.store?.getState()?.SignReducer)
        console.log(render)
        return ( render === true ?
            <button onClick={() => {;props.LogOut();setRender(false)}} className="ui inverted red button header_button">Log Out</button>
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
                        <i className="circular search link icon"></i>
                </div>
                {renderButtons()}
            </div>

        </div>
    )
}


export default Header