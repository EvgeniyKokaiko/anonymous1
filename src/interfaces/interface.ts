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
    userphoto: string
    name: string
    nameId: string
    id: number,
    value: string,
    date: string
}


export interface Dispatcher {
    type: string,
    payload?: object
}

export interface NewsPost {
    value: string,
    photo: string,
    video: string,
    username: string,
    userPhoto: string,
    userId: string,
    date: string,
    likes: Like[]
}

export interface Like {
    id: string,
    photo: string,
    username: string
}

export interface Store {
    MeAddPostReducer: userPosts[]
    MeChangeDataReducer: string
    NewsReducer: NewsPost[]
    SignReducer: userInfo,
    UserReducer: userInfo[]
    getFriendsReducer: string[]
    getSubReducer: string[]
    getUserFriendsReducer: userInfo[]
}