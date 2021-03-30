import React from 'react';
import "./Footer.css";
import Logo from "./Images/Code&GraphicsLogo2.png";
import { FaTwitter, FaGithub, FaInstagram, FaHeart, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            {/* Logo */}
            <div className="footer__image">
                <Link to="/" className="footer__link">
                    <img src={Logo} alt="Code And Graphics Logo" className="footer__logo"/> 
                </Link>
            </div>

            {/* Social Media Links */}
            <ul className="footer__socialMedia">

                <li className="footer__socialMediaItems">
                    <p className="socialMedia__follow">
                        Follow Us 
                    </p>
                </li>
                <li className="footer__socialMediaItems">
                    <a href="https://twitter.com/azmal_shaikh89" className="socialMedia__Links" target="_blank" rel="noreferrer">
                        <FaTwitter className="socialMediaIcons"/>
                    </a>
                </li>
                <li className="footer__socialMediaItems">
                    <a href="https://github.com/azmalshaikh" className="socialMedia__Links" target="_blank" rel="noreferrer">
                        <FaGithub className="socialMediaIcons"/>
                    </a>
                </li>
                <li className="footer__socialMediaItems">
                    <a href="https://www.instagram.com/azmal_shaikh89/" className="socialMedia__Links" target="_blank" rel="noreferrer">
                        <FaInstagram className="socialMediaIcons"/>
                    </a>
                </li>
                <li className="footer__socialMediaItems">
                    <a href="https://www.linkedin.com/in/azmal-shaikh/" className="socialMedia__Links" target="_blank" rel="noreferrer">
                        <FaLinkedinIn className="socialMediaIcons"/>
                    </a>
                </li>
            </ul>

            {/* Copyright */}

            <div className="copyright">
                <div className="creator">
                    Made with <FaHeart className="heartred"/> by Azmal Shaikh
                </div>
                
                <div className="copyright__info">
                    © 2020 Copyright: 
                    <a href="https://codeandgraphics.web.app" className="copyright__infoLink"> codeandgraphics.web.app</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
