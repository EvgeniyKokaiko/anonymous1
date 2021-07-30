import axios from "axios";
import {Dispatcher, userInfo, userPosts} from "../../interfaces/interface";
import {Dispatch} from "redux";
import {redux_types} from "../types";


export const fetchUsers = () => async (dispatch: Dispatch<Dispatcher>) => {
    const response = await axios.get('http://localhost:3001/users');

    dispatch({ type: redux_types.FetchUsers, payload: response.data });
};



export const Login = (login: string, pass: string) => async (dispatch: Dispatch<Dispatcher>) => {
try {
    const response = await axios.get(`http://localhost:3001/users/${login}`)
    const password = response.data.password;

    if (password === pass && response.data.login === login) {
        dispatch({ type: redux_types.FetchMe, payload: response.data });
    }
    } catch (e) {
    console.log("Bebra");
}
}

export const Register = (name: string, surname: string, email: string, login: string, password: string, re_password: string, image: string) => async (dispatch: Dispatch<Dispatcher>) => {

    const response = axios.post('http://localhost:3001/users', {
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
        friendList: []
    })

    dispatch({ type: redux_types.Register});

}


export const MyAddPost = (login: string,editValues: userPosts[]) => async (dispatch: Dispatch<Dispatcher>) => {

    const response = await axios.patch(`http://localhost:3001/users/${login}`, {posts: editValues})

    dispatch({type: redux_types.MeAddPost, payload: response.data})
}

export const LogOut = () => {
    return {
        type: redux_types.LogOut,
    }
}
