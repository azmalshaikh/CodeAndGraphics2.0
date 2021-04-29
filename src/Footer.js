import React from 'react';
import "./Footer.css";
import Logo from "./Images/CodeandGraphicsLogo2.png";
import { FaTwitter, FaGithub, FaInstagram, FaHeart, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <div class="leftside">
                <Link to="/">
                    <img src={Logo} alt="Code And Graphics Logo" height="70" />
                </Link>
                <p>Educational Website for learning Coding , Web Development and
                Graphic Designing. <br/> Contents include HTML, CSS, JS, Java, Data Structure and Algorithms, ReactJS, Adobe Illustrator, Adobe Premeire Pro.</p>
                <div className="creator">
                    Made with <FaHeart className="heartred"/> by Azmal Shaikh <br/>
                    <div className="copyright">© 2020 Copyright: <a href="https://codeandgraphics.web.app" className="copyright__infoLink">codeandgraphics.web.app</a></div>
                </div>
                <div class="socialmedialinks">
                    <li><a href="https://twitter.com/azmal_shaikh89" target="_blank" rel="noreferrer"><FaTwitter className="socialMediaIcons"/></a></li>
                    <li><a href="https://github.com/azmalshaikh"  target="_blank" rel="noreferrer"><FaGithub className="socialMediaIcons"/></a></li>
                    <li><a href="https://www.instagram.com/azmal_shaikh89/"  target="_blank" rel="noreferrer"><FaInstagram className="socialMediaIcons"/></a></li>
                    <li><a href="https://www.linkedin.com/in/azmal-shaikh/"  target="_blank" rel="noreferrer"><FaLinkedinIn className="socialMediaIcons"/></a></li>
                </div>
            </div>

            <div class="rightside">
                <ul class="rightside__links">
                    <h4>Coding</h4>
                    <li><Link to="/javaintro">Java</Link></li>
                    <li><Link to="/dsalgo">Data Structure <br/>and Algorithms</Link></li>
                    <li><Link to="/jsintro">JavaScript</Link></li>
                </ul>
                <ul class="rightside__links">
                    <h4>Development</h4>
                    <li><Link to="/htmlintro">HTML</Link></li>
                    <li><Link to="/cssintro">CSS</Link></li>
                    <li><Link to="/jsintro">JavaScript</Link></li>
                    <li><Link to="/react">ReactJS</Link></li>
                </ul>
                <ul class="rightside__links">
                    <h4>Graphic Designing</h4>
                    <li><Link to="/illustratorintro">Adobe Illustrator</Link></li>
                    <li><Link to="/premiereprointro">Adobe Premeire Pro</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
