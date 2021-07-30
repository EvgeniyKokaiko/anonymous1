import React, {useEffect, useState} from "react";
import {userInfo} from "../../interfaces/interface";
import {connect} from "react-redux";
import {match, RouteComponentProps} from "react-router-dom";
import axios from "axios";


interface IProps {
    SignReducer: userInfo
    match: any
}

const UserPage = (props: IProps) => {

    const User: userInfo = props.match.params.id
    const [data, setData]: [any, Function] = useState([])
    const Me : userInfo = props.SignReducer
    console.log(User)

    const fetchUser = async () => {
        const response = await axios.get(`http://localhost:3001/users/${User}`).then(el => {
            setData(el.data);
            console.log(data)
        })
    }

    useEffect(() => {
       fetchUser()
    },[])

    const AddPost = () => {
        const random = Math.random()
        // User.posts.push({id:random, value: postVal, date: DateParser()})
        const value = postVal === "" ? "Anonymous" : postVal
        setRerender([...rerender, {id:random, value: value, date: DateParser()}])
        console.log(rerender)
        console.log(User.posts)
    }



    const RenderPosts = () => {
        console.log(data.posts)
        return data?.posts?.map((el: any) => {
            return (
                <div key={el.id} className="ui comments">
                    <div className="comment">
                        <a className="avatar">
                            <img src={data.userphoto} />
                        </a>
                        <div className="content">
                            <a className="author">{data?.name}{data?.surname}</a>
                            <div className="metadata">
                                <div className="date">{el.date}</div>
                            </div>
                            <div className="text">
                                {el.value}
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }


    const DateParser = () => {
        let dateObj = new Date();
        let month = dateObj.getUTCMonth() + 1;
        let day = dateObj.getUTCDate();
        let year = dateObj.getUTCFullYear();

        let newdate: string = year + "/" + month + "/" + day;
        return newdate
    }
    const [rerender, setRerender] = useState(User?.posts)


    let [postVal, setPostVal] = useState("")

    const AddFriend = () => {
        return (
            <>
                <button className="ui inverted violet button">Add Friend</button>
            </>
        )
    }

    return (
        <div className="profile_container">
            <div className="image_container">
                <div className="ui card">
                    <div className="image">
                        <img style={{height: "410px"}} className="avatar_img" src={data?.userphoto}/>
                    </div>
                </div>
            </div>
            <div className="user_information">
                <div className="ui segment black">
                    <h2>{data?.name} {data?.surname}</h2>
                    <h3>Thinks: {data?.about}</h3>
                    <h3>{AddFriend()}</h3>
                    <hr/>
                    <h4>My city: {data?.city}</h4>
                    <h4>My country: {data?.country}</h4>
                    <div className="ui buttons">
                        <button className="ui button">Friends: {data?.friends}</button>
                        <button className="ui button">Subscribers: {data?.subscribers}</button>
                        <button className="ui button">Photos: {data?.photos}</button>
                        <button className="ui button">Videos: {data?.videos}</button>
                    </div>
                </div>
            </div>
            <div className="user_photos">
                <div className="ui segment">

                </div>
            </div>

            <div className="user_posts">
                <div className="ui segment">
                    <div className="ui icon input post_input">
                        <input type="text" value={postVal} onChange={(e) => {setPostVal(e.target.value)}} placeholder="Write something..." />
                        <i className="circular plus link icon" onClick={AddPost} />
                    </div>
                    {RenderPosts()}
                </div>

            </div>

            <div className="user_friends">
                <div className="ui segment">

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: object) => {
    return state
}


export default connect(mapStateToProps , {})(UserPage)
