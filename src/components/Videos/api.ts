import axios from "axios";



const Key = "AIzaSyDWFSUNANYNgbV0WmDA3Hac3H76I0g4v_M"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: Key,
    },
});

