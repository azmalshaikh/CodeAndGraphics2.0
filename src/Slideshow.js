import React from 'react';
import first from "./Images/PCcopy.jpg";
import second from "./Images/Laptop3copy.jpg";
import third from "./Images/Papercopy.jpg";
import fourth from "./Images/Android1Copy.jpg"
import { Carousel } from 'react-bootstrap';
import "./Slideshow.css";

function Slideshow() {
    return (
        <div className="slideshow">
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100 slideshow__images" src={first} alt="First slide" />

                    <Carousel.Caption>
                        <h2>Programming Language</h2>
                        <p class="erase">1. Java</p>
                        <p class="erase">2. Python</p>
                        <p class="erase">3. C++</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 slideshow__images" src={second} alt="Second slide"/>

                    <Carousel.Caption>
                        <h2>Web Development</h2>
                        <p class="erase">Step 1 : Learn the basics</p>
                        <p class="erase">Step 2 : Dig Deeper</p>
                        <p class="erase">Step 3 : Learn Frameworks</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 slideshow__images" src={third} alt="Second slide"/>

                    <Carousel.Caption className="slideshow__design">
                        <h2>Graphic Designing</h2>
                        <p class="erase">1. Adobe Illustrator</p>
                        <p class="erase">2. Adobe Photoshop</p>
                        <p class="erase">3. Adobe Premiere Pro</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 slideshow__images" src={fourth} alt="Third slide" />

                    <Carousel.Caption>
                        <h2>Android Development</h2>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slideshow
