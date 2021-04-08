import React from 'react';
import { Link } from 'react-router-dom';
import "./SideNavigationbar.css";

function SideNavigationbar({text, activenumber}) {

    let i = 0;

    return (
        <div className="sidenavigation">
            <nav className="navigationbar">
                <ul className="navigationbar__list">

                    <li className="listitems listitems__heading">
                        <h3 className="listitems__link">
                            {text[0].heading}
                        </h3>
                    </li>

                    {text.map((text) => {
                        i++;
                        return <li className="listitems">
                            <Link to={text.link} className={ i === activenumber ? "listitems__link activenumber" : "listitems__link"}>
                                {text.title}
                            </Link>
                        </li>
                    })}

                    <p className="listitemspadding"></p>
                </ul>
            </nav>
        </div>
    )
}

export default SideNavigationbar
