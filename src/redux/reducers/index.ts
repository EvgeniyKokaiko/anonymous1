import {combineReducers} from "redux";
import {Dispatcher, userInfo} from "../../interfaces/interface";
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
    }

    return state
}



export default combineReducers({
    UserReducer,
    SignReducer
})