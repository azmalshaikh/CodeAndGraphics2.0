import React from 'react';
import "./Demofile.css";

function Demofile({ demodata }) {
    return (
        <div className="demo">
            <p className="demo__heading">{demodata[0].heading}</p>
            <p className="demo__content">
                {demodata.map((text) => {
                    return <p className="demo__contentremove">
                        <p className="demo__contentremove" title={text.title}>{text.simple}</p>
                        <p className="demo__contentremove large">{text.large}</p>
                        <p className="demo__contentremove medium">{text.medium}</p>
                        <span className="democontentremove">{text.start}</span>
                        <span className="demo__contentremove blue">{text.blue}</span>
                        <span className="democontentremove">{text.rest}</span>
                    </p>
                })}
            </p>
        </div>
    )
}

export default Demofile
