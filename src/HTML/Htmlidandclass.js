import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Introandbuttons from '../Utilities/Introandbuttons';
import Navigationtop from '../Utilities/Navigationtop';
import Note from '../Utilities/Note';
import PandList from '../Utilities/PandList';
import SideNavigationbar from '../Utilities/SideNavigationbar';
import "./Common.css";

function Htmlidandclass({props}) {

    const pandlistdata = [
        [
            {"heading": "HTML id Attribute :", "listitems": "This attribute specify a unique id for an HTML element. The value of id attribute must be unique within the HTML document."},
            {"listitems": "The id attribute is used to point to a specific style declaration in a style sheet. It is also used by JavaScript to access and manipulate the element with the specific id."},
            {"listitems": "The id attribute can be used on any HTML element."},
            {"listitems": "The id value must contain at least one character and must not contain whitespace (spaces, tabs, etc)."}
        ],
        [
            {"heading": "HTML class Attribute :", "listitems": "This attribute specify one or more class names for an element."},
            {"listitems": "The class attribute is often used to point to a class in a style sheet. It can also be used by a JavaScript to access and manipulate elements with the specific class name(s)."},
            {"listitems": "The class attribute can be used on any HTML element."},
            {"listitems": "Different HTML elements can point to the same class name."},
            {"define": "Multiple classes : ", "listitems": "HTML elements can have more than one class name."},
            {"define": "Multiple classes : ", "listitems": 'To specify multiple classes, separate the class names with a space, e.g. <p class="btn primary">. This allows you to combine several CSS classes for one HTML element.'}
        ],
    ]

    const notedata = [
        {"line1": "We will learn a lot of interesting things on use of class & id attribute in CSS Selector section."},
    ]

    return (
        <div>
            <Header />
            <Navigationtop text={props} number={1} numbertwo={12}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={12}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="HTML Id's and Classes"
                            buttonone={["HTML Inline and Block", "/htmlinlineandblock"]}
                            buttontwo={["HTML Entities", "/htmlentities"]}    
                        />

                        <PandList text={pandlistdata[0]}/><br/>
                        <PandList text={pandlistdata[1]}/>
                        <Note lines={notedata}/>

                        <Introandbuttons 
                            buttonone={["HTML Inline and Block", "/htmlinlineandblock"]}
                            buttontwo={["HTML Entities", "/htmlentities"]}         
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Htmlidandclass
