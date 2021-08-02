import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {userInfo} from "../../interfaces/interface";
import axios from "axios";
import {AddFriend, MyFriendList, MySubList} from "../../redux/actions";
import {Link} from "react-router-dom";


interface IProps {
    SignReducer: userInfo,
    getFriendsReducer: userInfo[]
    getSubReducer: userInfo[]
    MyFriendList(friendId: string[]): Function
    MySubList(friendId: string[]): Function
    AddFriend(login: string ,subscriber: string, sublist: string[], friendList: string[],subscribersCount: number, friendsCount: number): Function
}

const MyFriends = (props: IProps) => {

    const {friendList, friends, subscriberList, subscribers} = props.SignReducer
    console.log(friendList, friends, subscriberList, subscribers)
    const [list, setList] = useState(true)
    const subData: userInfo[] = props.getSubReducer
    const friendsData: userInfo[] = props.getFriendsReducer

    const getData =  () => {
       if (friendList === undefined) {

       }
       props.MySubList(subscriberList)
        props.MyFriendList(friendList)
      console.log(subData)
    }

  useEffect(() => {
      getData()
  },[props.SignReducer])


    const onFriendsAdd = (Userid: string) => {
    props.AddFriend(props.SignReducer.id,Userid, subscriberList, friendList, subscribers, friends)
    }

    const onFriendsDecline = () => {

    }

  const renderSubList = () => {
      let List = list !== false ? friendsData : subData

      return List?.map((el : userInfo)=> {
            return (
                <div className="ui segment">
                        <div key={el.id} className="ui comments">
                            <div className="comment">
                <span className="avatar">
                        <img src={el.userphoto}/>
                </span>
                                <div className="content">
                                    <Link to={{pathname: `/user_profile/${el.id}`, state: {el}}}>
                                    <p className="author">{el.name} {el.surname}</p>
                                    </Link>
                                    <div className="metadata">
                                    </div>
                                    <div className="text">
                                        {el.email}
                                    </div>
                                    {list === false ?<div  className="right ui buttons">
                                        <button onClick={() => onFriendsAdd(el.id)} className="ui positive button">Accept</button>
                                        <div className="or"></div>
                                        <button onClick={onFriendsDecline} className="ui negative button">Decline</button>
                                    </div> : <span></span>}
                                </div>
                            </div>
                        </div>
                </div>
        )
  })
    }



    return (
        <div>
            <button onClick={() => {
                setList(true)
            }} className="ui inverted brown button">Friends {friendsData.length}</button>
            <button  onClick={() => {
                setList(false);
            }} style={{float: "right"}} className="ui inverted yellow button">Subscribers {subData.length}</button>
            {renderSubList()}
        </div>
    )
}

const mapStateToProps = (state: any) => {
    console.log(state);
    return state
}


export default connect(mapStateToProps ,{MyFriendList, MySubList, AddFriend})(MyFriends)