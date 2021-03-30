import React, { useState } from 'react';
import "./Navigationbar.css";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

function Navigationbar() {

    const [expanded, setExpanded] = useState(false);

    return (
        
        <Navbar expand="lg" variant="dark" sticky="top" expanded={expanded} className="navigationBar">
            <Navbar.Brand href="#home" className="webname">CodeAndGraphics</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto nav__items">
                    <Nav.Link href="#webdev" className="nav__item" onClick={() => setExpanded(false)}>Web Development</Nav.Link>
                    <Nav.Link href="#link" className="nav__item" onClick={() => setExpanded(false)}>Programming</Nav.Link>
                    <Nav.Link href="#link" className="nav__item" onClick={() => setExpanded(false)}>Graphic Designing</Nav.Link>
                    <Nav.Link href="/androiddevintro" className="nav__item" onClick={() => setExpanded(false)}>Android Development</Nav.Link>
                    <NavDropdown title={<span className="text-white">Exercises</span>} id="basic-nav-dropdown" className="nav__dropdown">
                        <NavDropdown.Item className="dropdown__heading"><b>Web Development Exercises</b></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1" onClick={() => setExpanded(false)}>HTML</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2" onClick={() => setExpanded(false)}>CSS</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3" onClick={() => setExpanded(false)}>Java Script</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item className="dropdown__heading"><b>Programming Practices</b></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4" onClick={() => setExpanded(false)}>Java</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.5" onClick={() => setExpanded(false)}>C++</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.6" onClick={() => setExpanded(false)}>Python</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigationbar
