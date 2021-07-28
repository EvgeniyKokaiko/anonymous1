import React from 'react';
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {BrowserRouter} from "react-router-dom";
import AuthModal from "./components/AuthModal";


interface IProps {

}

interface IState {
showModal: boolean
    creator: number
}


class App extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {showModal: false, creator: 0};
    }


    ShowModal = (val: boolean, c: number):void => {
        this.setState({showModal: val, creator: c})
    }


    Register = (): JSX.Element => {
        return (
            <>
        <div className="header modal_header">Register</div>
        <div className="content">27</div>
        <div className="actions">
            <div className="ui button">Neutral</div>
        </div>
            </>
    )
    }


    LoginNdRegister = () => {
        console.log(this.state.creator)
        if (this.state.creator === 1) {
            return (
                <>
                    <div className="header modal_header">Login</div>
                    <div className="content">27</div>
                    <div className="actions">
                        <div className="ui button">Neutral</div>
                    </div>
                </>
            )
        } else if (this.state.creator === 2) {
            return (
            <>
                <div className="header modal_header">Register</div>
                <div className="content">27</div>
                <div className="actions">
                    <div className="ui button">Neutral</div>
                </div>
            </>
            )
        }
    }


  render(): JSX.Element {
      console.log(this.state.showModal)
      console.log(this.state.creator)
    return (
        <BrowserRouter>
            {this.state.showModal === false ?
                <div className="grid-container">
                    <Header modalHandler={this.ShowModal}/>
                    <Sidebar/>
                    <Main/>
                    <Footer/>
                </div>
            :
                <AuthModal data={this.LoginNdRegister}  modalHandler={this.ShowModal} />

            }
        </BrowserRouter>
    )
  }
}

export default App;
