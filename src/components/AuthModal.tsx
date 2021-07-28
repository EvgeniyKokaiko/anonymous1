import React, {useState} from "react"
import {createPortal} from "react-dom";
import Logo from "./../assets/logo.png"

const Element = document.querySelector("#modal") as HTMLElement;
interface IProps {
    modalHandler(val: boolean, c: number): void
    data: Function
}

const AuthModal = (props: IProps) => {


        const [modal, setModal] = useState(false)
        const modalHandler = () => {
            setModal(prev => !prev)
            props.modalHandler(modal, 0)
        }

    return createPortal(
        <div onClick={modalHandler} className="ui dimmer modals visible active modalWindow">
            <div
                onClick={e => e.stopPropagation()}
                className="ui standard modal visible active"
            >
                {props.data()}
            </div>
        </div>
       ,
        Element
    )
}


export default AuthModal

