import React from "react";
import Body from "./ItemBody";
import Img from "./ItemImage";
import "./index.css";
import DeleteButton from "./DeleteButton";

function Data({MovieName, Realease, Desc, Image, id, onDelete}) {
    return(
        <div className="dataMovie">
            <div className="item">
                <div className="text">
                    <Body MovieName={MovieName} Realease={Realease} Desc={Desc}/>
                </div>
                <div className="image">
                    <Img Image={Image}/>
                </div>
                <DeleteButton id={id} onDelete={onDelete}/>
            </div>
        </div>
    )
}

export default Data;