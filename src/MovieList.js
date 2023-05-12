import React from "react";
import Data from "./ItemData";

function MovieData({dataList, onDelete}) {
    return (
        <div>
            {
                dataList.map((data) => (
                    <Data
                    key={data.id}
                    id={data.id}
                    onDelete = {onDelete}
                    {...data}/>
                ))
            }
        </div>
    );
}

export default MovieData;