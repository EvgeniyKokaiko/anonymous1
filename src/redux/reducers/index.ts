import {combineReducers} from "redux";
import {Dispatcher} from "../../interfaces/interface";
import {redux_types} from "../types";



const init = [{
    username: "404 ERROR | DATA NOT FOUND / NOT AUTH"
}]

function UserReducer(state = init , action: Dispatcher) {
    if (action.type === redux_types.FetchUsers) {
        return action.payload
    }

    return [...state]
}


function SignReducer(state = init, action: Dispatcher) {
    if (action.type === redux_types.FetchMe) {
        return action.payload
    } else if (action.type === redux_types.Register) {
    } else if (action.type === redux_types.LogOut) {
        return {username: "404 ERROR | DATA NOT FOUND / NOT AUTH"}
    }

    return state
}

function MeAddPostReducer(state = [], action: Dispatcher) {
    if (action.type === redux_types.MeAddPost) {
        return action.payload
    }
    return state
}


function MeChangeDataReducer(state = "", action: Dispatcher) {
    if (action.type === redux_types.ChangeMyData) {
        return action.payload
    }
    return state
}


function AddSubscribersReducer(state = {}, action: Dispatcher) {
    if (action.type === redux_types.AddSub) {
        return action.payload
    }

    return state
}

function getFriendsReducer(state = [], action: Dispatcher) {
    if (action.type === redux_types.getFriends) {
        return action.payload
    }
    return state
}
function getSubReducer(state = [], action: Dispatcher) {
    if (action.type === redux_types.getSubs) {
        return action.payload
    }
    return state
}

function AddFriendsReducer(state = {}, action: Dispatcher) {
    if (action.type === redux_types.AddFriend) {
        return action.payload
    }

    return state
}

export default combineReducers({
    UserReducer,
    SignReducer,
    MeAddPostReducer,
    MeChangeDataReducer,
    AddSubscribersReducer,
    getFriendsReducer,
    getSubReducer,
    AddFriendsReducer
})