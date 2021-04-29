import React from 'react';
import Container from "./Container";
import firstweb from "./Images/html5.png";
import secondweb from "./Images/css3.png";
import thirdweb from "./Images/js.png";
import firstcode from "./Images/java1.png";
import secondcode from "./Images/DSAlgo.jpg";
import thirdcode from "./Images/react.png";
import firstdesign from "./Images/Illustrator1.jpg";
import thirddesign from "./Images/PremierePro.png";
import "./Cards.css";
import { CardDeck } from 'react-bootstrap';

function Cards() {
    return (
        <div className="cards">
            {/* HTML, CSS and JS */}
            <CardDeck className="cardeck" id="webdev">
                <Container 
                    image={firstweb} 
                    heading="HTML" 
                    text="Hyper Text Markup Language. Backbone of all webpages."
                    buttonone="Learn HTML"
                    buttonlink={"/htmlintro"}
                />

                <Container 
                    image={secondweb} 
                    heading="CSS" 
                    text="Cascading style sheets Providing Webpages a rich and attractive look"
                    buttonone="Learn CSS"
                    buttonlink={"/cssintro"}
                />

                <Container 
                    image={thirdweb} 
                    heading="Java Script" 
                    text="Programming language used to make interactive webpages."
                    buttonone="Learn JS"
                    buttonlink={"/jsintro"}
                />
            </CardDeck>

            <CardDeck className="cardeck">
                <Container 
                    image={firstcode} 
                    heading="Java" 
                    text="General purpose programming language. Large community (more than 20M Java Developers)."
                    buttonone="Learn Java"
                    buttonlink={"/javaintro"}
                />

                <Container 
                    image={secondcode} 
                    heading="DS and Algo" 
                    text="Implementation Of DS in Java. Topics Include are Collection Framework and Important Interview Questions."
                    buttonone="Learn DS and Algo"
                    buttonlink={"/dsalgo"}
                />

                <Container 
                    image={thirdcode} 
                    heading="ReactJS" 
                    text="JS Library created by Facebook. Used to build powerful Web Apps which runs on Browser."
                    buttonone="Learn ReactJS"
                    buttonlink={"/react"}
                />
            </CardDeck>

            {/* Graphics design */}
            <CardDeck className="cardeck" id="graphic">
                <Container 
                    image={firstdesign} 
                    heading="Illustrator" 
                    text="Software application for creating drawings, illustrations, and artwork. Widely used by graphic designer and web designers."
                    buttonone="Learn Illustrator"
                    buttonlink={"/illustratorintro"}
                />

                <Container 
                    image={thirddesign} 
                    heading="Premiere Pro" 
                    text="Software applications for video editing. Used for editing videos, commercials and other film, television, and online video. Works seamlessly with other apps."
                    buttonone="Learn Premiere Pro"
                    buttonlink={"/premiereprointro"}
                />
            </CardDeck>
        </div>
    )
}

export default Cards
