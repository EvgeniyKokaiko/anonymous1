export interface userInfo {
    login: string,
    password: string
    userphoto: string
    name: string,
    about: string,
    surname: string,
    city: string,
    country: string,
    friends: number,
    subscribers: number,
    photos: number,
    videos: number,
    id: number,
    isAdmin: boolean,
    posts: userPosts[],
    friendList: string[]
}


export interface userPosts {
    id: number,
    value: string,
    date: string
}


export interface Dispatcher {
    type: string,
    payload?: object
}