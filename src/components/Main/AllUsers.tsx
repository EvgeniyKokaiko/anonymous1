import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {fetchUsers} from "../../redux/actions";
import {Dispatcher, userInfo} from "../../interfaces/interface";
import {Dispatch} from "redux";
import axios from "axios";
import {Link, NavLink } from "react-router-dom";


interface IProps {
    fetchUsers(): Function
    UserReducer: userInfo[]
}


const AllUsers = (props:IProps) => {

    const [data, setData]: [userInfo[], Function] = useState([])


    const FetchUsers = () => {
        props.fetchUsers()
        setData(props.UserReducer)
    }

    useEffect(() => {
        props.fetchUsers()

    },[])

    const renderList = () => {
        if (data.length > 1) {
            return data.map((el, index) => {
                console.log(el)
                return (
                    <div className="ui segment">
                        <Link to={{pathname: `/user_profile/${el.id}`, state: {el}}}>
                            <div key={el.id} className="ui comments">
                                <div className="comment">
                <span className="avatar">
                        <img src={el.userphoto}/>
                </span>
                                    <div className="content">
                                        <a className="author">{el.name} {el.surname}</a>
                                        <div className="metadata">
                                        </div>
                                        <div className="text">
                                            {el.email}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })
        }
}


    return (
        <div>
            <button style={{width: "100%"}} className="ui inverted purple button" onClick={FetchUsers}>Fetch Users</button>
            {renderList()}
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return state
}


export default connect(mapStateToProps, {fetchUsers})(AllUsers)