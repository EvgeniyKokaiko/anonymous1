import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {userInfo} from "../../interfaces/interface";
import axios from "axios";
import {MyFriendList, MySubList} from "../../redux/actions";


interface IProps {
    SignReducer: userInfo,
    getFriendsReducer: userInfo[]
    getSubsReducer: userInfo[]
    MyFriendList(friendId: string[]): Function
    MySubList(friendId: string[]): Function
}

const MyFriends = (props: IProps) => {

    const {friendList, friends, subscriberList, subscribers} = props.SignReducer
    console.log(friendList, friends, subscriberList, subscribers)
    const [subscriber, setSubscribers] = useState([])
    const [friend, setFriends] = useState([])
    const [list, setList] = useState(false)
    const friendData: userInfo[] = props.getFriendsReducer

    const getData =  () => {
       if (friendList === undefined) {

       }
       props.MySubList(subscriberList)
      console.log(friendData)
    }

    useEffect(getData, [])

  // const renderList = () {

    // }



    return (
        <div>
            <button onClick={() => {
                setList(true)
            }} className="ui inverted brown button">Friends</button>
            <button  onClick={() => {
                setList(false);
            }} className="ui inverted yellow button">Subscribers</button>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    console.log(state);
    return state
}


export default connect(mapStateToProps ,{MyFriendList, MySubList})(MyFriends)