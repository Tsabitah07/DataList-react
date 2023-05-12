import React from "react";
import "./index.css";


function Img({Image}) {
    return(
        <div className="image">
            <img src={Image} width="470px" alt="picture"></img>
        </div>
    )
}

export default Img;