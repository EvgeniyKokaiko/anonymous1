import React, {ChangeEvent, useEffect, useRef, useState} from "react";
import api from "./api";
import {Photo} from "./PhotoInterface";


const Photos = () => {

    const [term, setTerm]: [string, Function] = useState("");
    const [apiData, setApiData]: [Photo[], Function] = useState([])
    const ref = useRef<HTMLImageElement>(null)
    const [active, setActive]: [number, Function] = useState(54)
    const [handler, setHandler]: [number, Function] = useState(0)
    const onFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        console.log(term)
        const response = await api.get('/search/photos', {
            params: { query: term }
        }).then(el => {
            setApiData(el.data.results)
        })

        console.log(apiData)
    }


  const setSpans = () => {
        const height = ref.current?.clientHeight || 0;
        const spans = Math.ceil(height / 10);
       setHandler(spans);
    };

const RenderPhotos = () => {
       return  apiData?.map((el:Photo, index: number) => {
            return (
                <div>
                    {active !== index ? <img ref={ref} onClick={() => setActive(index)} alt={el.description} src={el.urls.regular} /> :
                        <div className="ui segment" style={{height: ref?.current?.height, backgroundImage: el.urls.regular}}>
                            <div className="ui vertical buttons">
                                <a href={el.links.download} className="ui pink button">Download</a>
                                <div className="or"></div>
                                <button className="ui positive button">Save</button>
                            </div>
                        </div>
                        }
                </div>
            )
        })
}


    return (
        <div className="ui container" style={{ marginTop: '10px' }}>
            <div className="ui segment" >
                <form onSubmit={onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={term} onChange={(e:ChangeEvent<HTMLInputElement>) => setTerm(e.target.value)}/>
                    </div>
                </form>
            </div>
            <div className="image-list">{RenderPhotos()}</div>
        </div>
    )
}


export default Photos