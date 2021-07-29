import React from "react";
import {connect} from "react-redux";
import {fetchUsers} from "../../redux/actions";
import {Dispatcher, userInfo} from "../../interfaces/interface";
import {Dispatch} from "redux";
import axios from "axios";


interface IProps {
    fetchUsers(): Function
}


const AllUsers = (props:IProps) => {

    const Login = async (login: string, password: string)  => {
        const response = await axios.get(`http://localhost:3001/users/${login}`)
        console.log(response.data);

    }

    const FetchUsers = () => {
        console.log("DADA")
        props.fetchUsers()
        console.log(props)
    }

    return (
        <div>
            <button onClick={FetchUsers}>Click Me</button>
            <button onClick={() => Login("re1nhart", '')}>Click Me</button>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return state
}


export default connect(mapStateToProps, {fetchUsers})(AllUsers)