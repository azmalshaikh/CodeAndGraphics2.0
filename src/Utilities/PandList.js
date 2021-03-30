import React from 'react';
import "./PandList.css";

function PandList({text}) {

    return (
        <div>
            <p class="pandlist__heading">{text[0].heading}</p>
            <p class="pandlist__contents">
                {text.map((text) => {
                    return <li class="pandlist__items"><b>{text.define}</b>{text.listitems}</li>
                })}
            </p>
        </div>
    )
}

export default PandList
