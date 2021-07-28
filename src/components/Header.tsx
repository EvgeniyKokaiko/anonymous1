import React, {useState} from "react";
import {Link, NavLink } from "react-router-dom";
import Logo from "./../assets/logo.png"


interface IProps {
    modalHandler(val: boolean, c: number): void
}

const Header = (props: IProps) => {
const [modal, setModal] = useState(true)
    const [creator, setCreator] = useState(0)

    const modalHandler = (c: number) => {
    setModal(prev => !prev)
        props.modalHandler(modal, c)
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
                <button onClick={() => {modalHandler(1)}} className="ui inverted teal button header_button">Sign In</button>
                <button onClick={() => {modalHandler(2)}} className="ui inverted primary button header_button">Sign up</button>
            </div>

        </div>
    )
}


export default Header