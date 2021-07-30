import React, {useEffect, useState} from "react"
import api from "./api";
import {Video} from "./VideoInterface";




const Videos = (): JSX.Element => {
    const [search, setSearch]: [string, Function] = useState("How To Break Pentagon?")
    const [videos, setVideos]: [Video[], Function] = useState([])
    const [current, setCurrent]: [Video, Function] = useState(videos[0]);

    const onTermSubmit = async () => {
        const response = await api.get("/search", {
            params: {
                q: search,
            },
        }).then(el => {
            setVideos(el.data.items);
            setCurrent(el.data.items[0]);
            console.log(videos)
        })
    }


        const onButtonSearch = () => {
            onTermSubmit()
            console.log(videos, current, 125234523)
        }







    const renderFrame = () => {
        let videoSrc = `https://www.youtube.com/embed/${current?.id?.videoId}`
        if (!videos) {
            videoSrc = ""
            return (
                <span>Loading...</span>
            )
        }

            return (
                <div className="frame_container">
                    <iframe title="video player" src={videoSrc} className="frame"/>
                    <div className="ui segment">
                        <h4 className="ui header">{current?.snippet?.title}</h4>
                        <p>{current?.snippet?.description}</p>
                    </div>
                </div>
            )

    }

    const RenderThumbs = () => {
        return videos.map((el: Video,index:number) => {
            if (current !== el) {
            return (
                <div onClick={() => setCurrent(videos[index])} className="ui segment item">
                    <img
                        alt="fas"
                        className="thumb_image"
                        src={el.snippet.thumbnails.high.url}
                    />
                    <div className="content">
                        <div className="header thumb_header">{el.snippet.title}</div>
                    </div>
                </div>
            )}

        })

    }




        return (
            <div className="video_container">
                <div className="ui icon input video_input" style={{width: "100%", gridColumnStart: "1", gridColumnEnd: "3"}}>
                    <input className="video_input" value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search..."/>
                    <i onClick={onButtonSearch} className="inverted circular search link icon video_button"></i>
                </div>
                <div>
                    {renderFrame()}
                </div>
                <div className="videos_thumb">
                    {RenderThumbs()}
                </div>
            </div>
        )

}
export default  Videos