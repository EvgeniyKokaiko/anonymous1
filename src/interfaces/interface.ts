export interface userInfo {
    login?: string,
    password?: string
    userphoto: string
    name: string,
    about: string,
    surname: string,
    city: string,
    country: string,
    email: string
    friends: number,
    subscribers: number,
    photos: number,
    videos: number,
    id: string,
    isAdmin: boolean,
    posts: userPosts[],
    friendList: string[]
    subscriberList: string[]
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