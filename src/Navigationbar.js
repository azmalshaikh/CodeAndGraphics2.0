import React, { useState } from 'react';
import "./Navigationbar.css";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

function Navigationbar() {

    const [expanded, setExpanded] = useState(false);

    return (
        
        <Navbar expand="lg" variant="dark" sticky="top" expanded={expanded} className="navigationBar">
            <Navbar.Brand href="#home" className="webname"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto nav__items">
                    <Nav.Link href="htmlintro" className="nav__item" onClick={() => setExpanded(false)}>Web Development</Nav.Link>
                    <Nav.Link href="javaintro" className="nav__item" onClick={() => setExpanded(false)}>Programming</Nav.Link>
                    <Nav.Link href="illustratorintro" className="nav__item" onClick={() => setExpanded(false)}>Graphic Designing</Nav.Link>
                    <Nav.Link href="dsalgo" className="nav__item" onClick={() => setExpanded(false)}>Data Structure and Algorithms</Nav.Link>
                    {/* <Nav.Link href="/androiddevintro" className="nav__item" onClick={() => setExpanded(false)}>Android Development</Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigationbar
