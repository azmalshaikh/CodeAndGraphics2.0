import React, { useState } from 'react';
import "./Navigationtop.css";
import { Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigationtop({text , number, numbertwo}) {

    const [expanded, setExpanded] = useState(false);
    // text.map((text) => {
        console.log(text)
    // })

    const topnavdata = [
        {"link": "/htmlintro", "title": "HTML"},
        {"link": "/cssintro", "title": "CSS"},
        {"link": "/jsintro", "title": "JavaScript"},
        {"link": "/illustratorintro", "title": "Illustrator"},
        {"link": "/photoshopintro", "title": "Photoshop"},
        {"link": "/premiereprointro", "title": "Premiere Pro"},
        {"link": "/javaintro", "title": "Java"},
        {"link": "/cppintro", "title": "C++"},
        {"link": "/pythonintro", "title": "Python"},
        {"link": "/androiddevintro", "title": "Android"}
    ]
    
    let i = 0, j = 0;

    return (
        <Navbar expand="lg" variant="dark" sticky="top" expanded={expanded} className="navigationtopBar">
            <Navbar.Brand href="#home" className="webname"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto navtop__items">
                    {topnavdata.map((heading) => {
                        i++;
                        return <Link to={heading.link} className={ i === number ? "navtop__item active" : "navtop__item"} onClick={() => setExpanded(false)}>{heading.title}</Link>
                    })}
                </Nav>

                <Nav className="mr-auto navtop__itemstwo">
                    {text && text.map((text) => {
                        j++;
                        return <Link to={text.link} className={ j === numbertwo ? "navtop__item active" : "navtop__item"} onClick={() => setExpanded(false)}>{text.title}</Link>
                    })}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigationtop
