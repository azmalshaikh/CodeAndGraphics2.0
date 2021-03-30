import React from 'react';
import Container from "./Container";
import firstweb from "./Images/html5.png";
import secondweb from "./Images/css3.png";
import thirdweb from "./Images/js.png";
import firstcode from "./Images/java1.png";
import secondcode from "./Images/c++.png";
import thirdcode from "./Images/python1.jpg";
import firstdesign from "./Images/Illustrator1.jpg";
import seconddesign from "./Images/Photoshop.svg";
import thirddesign from "./Images/PremierePro.png";
import "./Cards.css";
import { CardDeck } from 'react-bootstrap';

function Cards() {
    return (
        <div className="cards">
            {/* Web Development */}
            <CardDeck className="cardeck">
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

            {/* Programming languages */}
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
                    heading="C++" 
                    text="General purpose programming language based on C. Statically typed, free-form, multiparadigm."
                    buttonone="Learn C++"
                    buttonlink={"/cppintro"}
                />

                <Container 
                    image={thirdcode} 
                    heading="Python" 
                    text="Interpreted, high-level, general-purpose programming language. Easy to code as compared to other."
                    buttonone="Learn Python"
                    buttonlink={"/pythonintro"}
                />
            </CardDeck>

            {/* Graphics design */}
            <CardDeck className="cardeck">
                <Container 
                    image={firstdesign} 
                    heading="Illustrator" 
                    text="Software application for creating drawings, illustrations, and artwork. Widely used by graphic designer and web designers."
                    buttonone="Learn Illustrator"
                    buttonlink={"/illustratorintro"}
                />

                <Container 
                    image={seconddesign} 
                    heading="Photoshop" 
                    text="Software that is extensively used for raster image editing, graphic design. Ability to create, enhance, or otherwise edit images, artwork, and illustrations"
                    buttonone="Learn Photoshop"
                    buttonlink={"/photoshopintro"}
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
