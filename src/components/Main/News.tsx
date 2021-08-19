import React, {ChangeEvent, ReactComponentElement, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AddNews, FetchNews} from "../../redux/actions";
import {NewsPost, Store, userInfo} from "../../interfaces/interface";






const News = () => {
    const on = useDispatch();
    const store = useSelector<Store>(state => state.NewsReducer)
    const User = useSelector((state: Store) => {return state.SignReducer})

    const [data,setData]: [NewsPost[], Function] = useState([])
    console.log(store)
    const [term, setTerm] = useState("")
    let [photo, setPhoto] = useState("")
    let [video, setVideo] = useState("")
    const [handler, setHandler] = useState(0)


    const onPostAdd = () =>  {
        const a = photo.length < 10  ?  "none" : photo
        const b = video.length < 10  ?  "none" : video
        on(AddNews(term, a, b, `${User.name} ${User.surname}`,  User.userphoto, User.id ,DateParser()))
        on(FetchNews(0))
    }

    useEffect(() => {
        on(FetchNews(0))
    }, [on])

    useEffect(() => {
        if (store !== undefined) {
            setData(store)
        }
    },[store])

    const DateParser = () => {
        let dateObj = new Date();
        let month = dateObj.getUTCMonth() + 1;
        let day = dateObj.getUTCDate();
        let year = dateObj.getUTCFullYear();

        return year + "/" + month + "/" + day
    }



    const RenderActions = () => {
        if (handler === 1) {
            return (
                <>
                    <input className="ui purple" type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setPhoto(e.target.value)} placeholder="Write Photo Url"/>
                    <input className="ui purple right floated" type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setVideo(e.target.value)} placeholder="Write Video Id"/>
                    <button onClick={() => setHandler(0)} className="ui right floated red button">Undo</button>
                    <br/>
                </>
            )
        } else {
   return <>
        <button onClick={() => setHandler(1)}  className="ui purple button">Add Photo</button>
        <button onClick={() => setHandler(1)} className="ui violet button">Add Video</button>
    </>
        }
    }


    const RenderNews = () => {
        return data?.map(el => {
            return (

                <div className="comment news_item">
                             <span className="avatar">
                            <img src={el.userPhoto} alt="comment_image" />
                         </span>
                    <div className="content">
                        <span className="author">{el.username}</span>
                        <div className="metadata">
                            <span className="date">{el.date}</span>
                        </div>
                        <div className="text">{el.value}</div>
                        {el.video !== "none" ? <div className="text">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/gs-H9z2h0TA"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe></div> : ""}
                        {el.photo === "none" ? "" : <div className="text">
                            <img style={{width: "25vw", height: "50vh"}} src={el.photo} alt=""/>
                        </div>}
                        <div className="actions">
                            <button className="ui button"><i className="heart outline icon"/> {el.likes.length}</button>
                        </div>
                    </div>
                </div>

            )
        })
    }

    return (
        <div>
            <div className="ui segment">
                <div className="ui icon input video_input" style={{width: "100%", gridColumnStart: "1", gridColumnEnd: "3"}}>
                    <input className="video_input" value={term} onChange={(e) => setTerm(e.target.value)} type="text" placeholder="Write something..."/>
                    <i onClick={() => {onPostAdd(); console.log(true)}} className="inverted circular search link terminal icon" />
                </div>
                <br/>
                <br/>
                {RenderActions()}
                <br/>
            </div>
            <div className="ui segment">
                <div style={{ width: "100vw" }} className="ui comments news_container">
                {RenderNews()}
                </div>
            </div>
        </div>
    )
}


export default News