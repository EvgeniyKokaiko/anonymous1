import React, {useContext, useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import AuthModal from "./components/AuthModal";
import {connect, ReactReduxContext, ReactReduxContextValue} from "react-redux";
import {Login, Register} from "./redux/actions";
import {userInfo} from "./interfaces/interface";



interface IProps {
    Login(login: string, password: string): Function
    Register(name: string, surname: string, email: string, login: string, password: string, re_password: string, image: string): Function
    SignReducer: userInfo | LogOut
}

interface LogOut {
    username: string,
    login?: string
}

interface IState {
    showModal: boolean
    creator: number
    AuthUser: string,
    AuthPass: string,
    RememberMe: boolean
}

const ContainerComponent = (props: IProps) => {
    const context = useContext(ReactReduxContext)
    console.log(context.store.getState().SignReducer[0])
    const [creator, setCreator] = useState(0)
    const [modal, showModal] = useState(false)

    //Auth
    const [authUsername, setAuthUsername] = useState("")
    const [authPassword, setAuthPassword] = useState("")
    const [remember, setRemember] = useState(false)

    //Register
    const [email, setEmail] = useState("");
    const [RegUsername, setRegUsername] = useState("");
    const [RegPassword, setRegPassword] = useState("");
    const [RegRePassword, setRegRePassword] = useState("");
    const [RegImage, setRegImage] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("")
    const [isAuth, setAuth] = useState(false);

    const ShowModal = (val: boolean, c: number):void =>  {
       showModal(prev => !prev)
       setCreator(c)
    }


   const  LoginSubmit = () => {
        props.Login(authUsername, authPassword);
        console.log(props);
    }

    const  RegisterSubmit = () => {
        props.Register(name,surname,email,RegUsername,RegPassword,RegRePassword,RegImage);
        console.log(props);
    }

    const isAuthHandler = () => {
        if (props.SignReducer.login !== undefined) {
            setAuth(true)
        }
    }

    const LogOut = () => {
        return () => {}
    }

    useEffect(() => {
        isAuthHandler()
    })

   const LoginNdRegister = () => {
        if (creator === 1) {
            return (
                <>
                    <div className="header modal_header">Login</div>
                    <div className="content">
                        <div className="ui input">
                            <input type="text" value={authUsername} onChange={(e) => setAuthUsername(e.target.value)} placeholder="Login or Email" className="modal_input"/>
                        </div>
                        <br/>
                        <br/>
                        <div className="ui input">
                            <input type="password" value={authPassword} onChange={(e) => setAuthPassword(e.target.value)} placeholder="Password" className="modal_input" />
                        </div>
                        <br/>
                        <br/>
                        <div className="ui input">
                            <br/>
                            <br/>
                            <div className="ui read-only checkbox">
                                <input type="checkbox" onClick={() => setRemember(prev => !prev)}  />
                                <label>Remember Me</label>
                            </div>
                        </div>
                    </div>
                    <div className="actions">
                        <button className="ui inverted green button" onClick={LoginSubmit}>Submit</button>
                        <button className="ui inverted red button" onClick={() => showModal(prev => !prev)}>Cancel</button>
                    </div>
                </>
            )
        } else if (creator === 2) {
            return (
                <>
                    <div className="header modal_header">Register</div>
                    <div className="content">
                        <div className="ui input email_input">
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="modal_input" />
                        </div>
                        <br/>
                        <br/>
                        <div className="ui input login_input">
                            <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} placeholder="Surname" className="modal_input" />
                        </div>
                    </div>
                    <div className="content">
                        <div className="ui input email_input">
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="modal_input" />
                        </div>
                        <br/>
                        <br/>
                        <div className="ui input login_input">
                            <input type="text" value={RegUsername} onChange={(e) => setRegUsername(e.target.value)} placeholder="Login" className="modal_input" />
                        </div>
                    </div>
                    <div className="content">
                        <div className="ui input email_input">
                            <input type="password" value={RegPassword} onChange={(e) => setRegPassword(e.target.value)} placeholder="Password" className="modal_input" />
                        </div>
                        <br/>
                        <br/>
                        <div className="ui input email_input">
                            <input type="password" value={RegRePassword} onChange={(e) => setRegRePassword(e.target.value)} placeholder="Re-Password" className="modal_input" />
                        </div>
                        <br/>
                        <br/>
                        <div className="ui input email_input">
                            <input type="text" placeholder="Image" value={RegImage} onChange={(e) => setRegImage(e.target.value)} className="modal_input" />
                        </div>
                    </div>
                    <div className="actions">
                        <button className="ui inverted green button" onClick={RegisterSubmit}>Submit</button>
                        <button className="ui inverted red button" onClick={() => showModal(prev => !prev)}>Cancel</button>
                    </div>
                </>
            )
        }
    }

    return (
        <BrowserRouter>
            {modal === false ?
                <div className="grid-container">
                    <Header modalHandler={ShowModal} isAuth={isAuth} LogOut={LogOut}  />
                    <Sidebar/>
                    <Main/>
                    <Footer/>
                </div>
                :
                <div className="grid-container_modal">
                    <Header modalHandler={ShowModal} isAuth={isAuth} LogOut={LogOut}  />
                    <AuthModal data={LoginNdRegister}  modalHandler={ShowModal} />
                </div>
            }
        </BrowserRouter>
    )
}

const mapStateToProps = (state: any) => {
    console.log(state);
    return state
}

export default connect(mapStateToProps, {Login, Register})(ContainerComponent);