import React from 'react';
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {BrowserRouter} from "react-router-dom";



class App extends React.Component<any, any> {
  render(): JSX.Element {
    return (
        <BrowserRouter>
        <div className="grid-container">
          <Header />
            <Sidebar />
            <Main />
            <Footer />
        </div>
        </BrowserRouter>
    )
  }
}

export default App;
