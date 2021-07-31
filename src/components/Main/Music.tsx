import React from "react";
import axios from "axios";


const Music = () => {

    const aa = async () => {
        const response = await axios.get(`http://localhost:3001/users/re1nhart`)
    }

    return (
        <div>
            <button onClick={aa}></button>
        </div>
    )
}


export default Music