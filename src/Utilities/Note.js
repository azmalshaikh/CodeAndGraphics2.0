import React from 'react';
import "./Note.css";

function Note({lines}) {
    return (
        <div className="note">
            <b>Note : </b>
            {lines.map((lines) => {
                return <span>{lines.line1}<br/></span>
            })}
        </div>
    )
}

export default Note
