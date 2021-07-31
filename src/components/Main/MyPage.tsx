import React, {useEffect, useState} from "react";
import {Dispatcher, userInfo, userPosts} from "../../interfaces/interface";
import {connect} from "react-redux";
import {Login, MyAddPost} from "../../redux/actions";
import {ChangeUserData} from "../../redux/actions";



interface IProps {
    SignReducer: userInfo
    ChangeUserData(login: string,about: string, city: string, country: string, userphoto: string):any
    MyAddPost(login: string, editValues: userPosts[]) : any
    Login(login: string, password: string): any
}

const MyPage = (props: IProps) => {
    const [isChange, setChange] = useState(false)
    let User: userInfo = props.SignReducer
    const [thinks, setThinks] = useState(User?.about);
    const [city, setCity] = useState(User?.city);
    const [country, setCountry] = useState(User?.country);
    const [photo, changePhoto] = useState(User?.userphoto);


const InfoChanger = () => {
        return (
            <>
                <button onClick={ChangeData} className="ui inverted violet button">Change</button>
            </>
        )
}





const ChangeData = () => {
    setChange(prev=> !prev);

    if (isChange === true) {
        props.ChangeUserData(props.SignReducer.id, thinks, city, country, photo)
    }
}


    const AddPost = () => {
        const random = Math.random()
        const value = postVal === "" ? "Anonymous" : postVal
        setRerender([...rerender, {id:random, value: value, date: DateParser()}])
       props.MyAddPost(props.SignReducer.id, [...User.posts, {id:random, value: value, date: DateParser()}])
        console.log(rerender)
        console.log(User.posts)
    }



const RenderPosts = () => {
        User.posts = rerender
        console.log(User.posts)
       return User?.posts?.map(el => {
            return (
                <div key={el.id} className="ui comments">
                    <div className="comment">
                        <span className="avatar">
                            <img className="avatar_img" src={User?.userphoto} alt="UserPhoto" />
                        </span>
                        <div className="content">
                            <span className="author">{User?.name}{User?.surname}</span>
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

    return year + "/" + month + "/" + day
}
const [rerender, setRerender] = useState(User?.posts)


let [postVal, setPostVal] = useState("")


    return (
        <div className="profile_container">
            <div className="image_container">
                <div className="ui card">
                    <div className="image">
                        {isChange === false ? <img className="avatar_img" src={User?.userphoto} alt="UserPhoto"/> : <input onChange={e => changePhoto(e.target.value)} value={photo} type="text" placeholder="Change Photo"/>}
                    </div>
                </div>
            </div>
            <div className="user_information">
                <div className="ui segment black">
                    <h2>{User?.name} {User?.surname}</h2>
                    {isChange === false ? <h3>Thinks: {User?.about}</h3>: <input onChange={e => setThinks(e.target.value)} value={thinks} type="text" placeholder="Change Thinks"/>}
                    <h3>{InfoChanger()}</h3>
                <hr/>
                    {isChange === false ?<h4>My city: {User?.city}</h4> : <input onChange={e => setCity(e.target.value)} value={city} type="text" placeholder="Change City"/>}
                    {isChange === false ? <h4>My country: {User?.country}</h4> : <input onChange={e => setCountry(e.target.value)} value={country} type="text" placeholder="Change Country"/>}
                    <div className="ui buttons">
                        <button className="ui button">Friends: {User?.friends}</button>
                        <button className="ui button">Subscribers: {User?.subscribers}</button>
                        <button className="ui button">Photos: {User?.photos}</button>
                        <button className="ui button">Videos: {User?.videos}</button>
                    </div>
                </div>
            </div>
            <div className="user_photos">
            <div className="ui segment">

            </div>
            </div>

            <div className="my_user_posts">
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


export default connect(mapStateToProps , {MyAddPost, ChangeUserData, Login})(MyPage)