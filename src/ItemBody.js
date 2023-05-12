import React from "react";
import "./index.css";


function Body({MovieName, Realease, Desc}) {
    return(
        <div>
            <h3 className="movieName">{MovieName}</h3>
            <h4 className="realease">{Realease}</h4>
            <p className="desc">{Desc}</p>
        </div>
    )
}

export default Body;