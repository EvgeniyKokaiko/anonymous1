import React from 'react';
import './App.css';
import ContainerComponent from "./ContainerComponent";


interface IProps {}
interface IState {}



class App extends React.Component<IProps, IState> {
   render() {
       //@ts-ignore
       return (<ContainerComponent/>)
   }
}


export default App ;
