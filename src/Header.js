import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import Logo from "./Images/Code&GraphicsLogo2.png";

function Header() {
    return (
        <div className="header">
            <Link to="/" className="header__link">
                <img src={Logo} alt="Code And Graphics Logo" className="header__logo"/> 
            </Link>
        </div>
    )
}

export default Header
