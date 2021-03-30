import React from 'react';
import "./Container.css";
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Container({image, heading, text, buttonone, buttonlink}) {
    return (
        <Card className="card">
            <Card.Img variant="top" src={image} className="card__image card__imageTablet"/>
            <Card.Body>
                <Card.Title className="carddetails__heading"><h1 className="carddetails__headingTablet">{heading}</h1></Card.Title>
                <Card.Text className="carddetails__tablet">{text}</Card.Text>
            </Card.Body>
            <Card.Body className="card__button">
                <Link to={buttonlink} className="card__buttonlink">{buttonone}</Link>
            </Card.Body>
        </Card>
    )
}

export default Container;
