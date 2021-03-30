import React from 'react';
import { Link } from 'react-router-dom';
import "./Introandbuttons.css";

function Introandbuttons({ heading, buttonone, buttontwo }) {
    return (
        <div className="headingandbuttons">
            <h1 className="heading">{heading}</h1>
            <div className="buttons">
                <div className="buttonstyling">
                    {buttonone != null ? <Link to={buttonone[1]} title={buttonone[0]} className="button__link">Prev &lt;</Link> : <span></span>}
                    {buttontwo != null ? <Link to={buttontwo[1]} title={buttontwo[0]} className="button__link">Next &gt;</Link> : <span></span>}
                </div>
            </div>
        </div>
    )
}

export default Introandbuttons
