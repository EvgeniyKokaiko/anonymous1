import axios from "axios";
import {Dispatcher, userInfo, userPosts} from "../../interfaces/interface";
import {Dispatch} from "redux";
import {redux_types} from "../types";


export const fetchUsers = () => async (dispatch: Dispatch<Dispatcher>) => {
    const response = await axios.get('http://localhost:3001/users');
    response.data.map((el: userInfo) => {
       delete el.password
        delete el.login
    })
    dispatch({ type: redux_types.FetchUsers, payload: response.data });
};



export const Login = (login: string, pass: string) => async (dispatch: Dispatch<Dispatcher>) => {

    const response = await axios.get(`http://localhost:3001/users/${login}`).then(el => {
        const password = el.data.password;
        if (password === pass && el.data.login === login) {
            dispatch({ type: redux_types.FetchMe, payload: el.data });
            console.log(el.data)
            localStorage.setItem("MyId", JSON.stringify(el.data.login))
        }
    })




    console.log("Bebra");

}

export const Register = (name: string, surname: string, email: string, login: string, password: string, re_password: string, image: string) => async (dispatch: Dispatch<Dispatcher>) => {

    await axios.post<userInfo>('http://localhost:3001/users', {
        login: login,
        password: password,
        userphoto: image,
        name: name,
        about: "",
        surname: surname,
        city: "",
        country: "",
        email: email,
        friends: 0,
        subscribers: 0,
        photos: 0,
        videos: 0,
        id: login,
        isAdmin: false,
        posts: []
    ,
        friendList: [],
        subscriberList: []
    })

    dispatch({ type: redux_types.Register});

}


export const MyAddPost = (login: string,editValues: userPosts[]) => async (dispatch: Dispatch<Dispatcher>) => {

    const response = await axios.patch(`http://localhost:3001/users/${login}`, {posts: editValues})

    dispatch({type: redux_types.MeAddPost, payload: response.data})
}

export const LogOut = () => {
    localStorage.setItem("isAuthAnonym", JSON.stringify(false))
    localStorage.setItem("MyId", "")
    return {
        type: redux_types.LogOut,
    }
}


export const ChangeUserData = (login: string, about: string, city: string, country: string, userphoto: string) => async (dispatch: Dispatch<Dispatcher>) => {

    const response = await axios.patch(`http://localhost:3001/users/${login}`, {
        about: about,
        city: city,
        country: country,
        userphoto: userphoto,
    })
    dispatch({type: redux_types.ChangeMyData, payload: response.data})
}


export const AddSubscribers = (login: string, subscriber: string, sublist: string[], subscribersCount: number) => async (dispatch:Dispatch<Dispatcher>) => {

    const response = await axios.patch(`http://localhost:3001/users/${login}`, {
        subscriberList: [...sublist, subscriber],
        subscribers: subscribersCount + 1
    })

    dispatch({type: redux_types.AddSub, payload: response.data})

}


export const MyFriendList = (userArray: string[] = []) => async (dispatch: Dispatch<Dispatcher>)  => {
    const data: userInfo[] = [];
    for (let i = 0;i < userArray.length; i++) {
    const response = await axios.get(`http://localhost:3001/users/${userArray[i]}`)
            data.push(response.data)
    }
   dispatch({type:redux_types.getFriends, payload: data})
}

export const MySubList = (userArray: string[] = []) => async (dispatch: Dispatch<Dispatcher>)  => {
    const data: userInfo[] = [];
    for (let i = 0;i < userArray.length; i++) {
        const response = await axios.get(`http://localhost:3001/users/${userArray[i]}`)
        delete response.data.login
        delete response.data.password
        data.push(response.data)
    }

    dispatch({type:redux_types.getSubs, payload: data})
}