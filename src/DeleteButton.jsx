import React from "react";
import "./index.css";

function DeleteButton({id, onDelete}) {
    return (
     <div className="Button">
        <button className="btnDelete" onClick={() => onDelete(id)}> X </button>
     </div>
    );
}

export default DeleteButton; 