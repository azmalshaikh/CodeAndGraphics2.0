import React, { useEffect, useState }  from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Introandbuttons from '../Utilities/Introandbuttons';
import Navigationtop from '../Utilities/Navigationtop';
import PandList from '../Utilities/PandList';
import Note from '../Utilities/Note';
import SideNavigationbar from '../Utilities/SideNavigationbar';
import "./Common.css";
import Demofile from '../Utilities/Demofile';

function Htmlattributes({props}) {

    const [navbar, setNavbar] = useState(false);

    useEffect(() => {
        var a = document.getElementById("maincontent");
        if(navbar === true) {
            a.style.position = "fixed";
            a.style.overflow = "hidden";
        } else {
            a.style.position = "relative";
            a.style.overflow = "auto";
        }
    }, [navbar]);

    const pandlistdata = [
        [
            {"listitems": "Gives some extra info about HTML elements to the browser."},
            {"listitems": "It can be property related to width, height, or color of an object."},
            {"listitems": "All HTML elements can have attributes."},
            {"listitems": "We will discuss about various attributes like as href , alt , src , width , height , style , title and many more"}
        ],
        [
            {"heading": "Title attribute : ", "listitems": "To give some extra information"},
            {"listitems": "The value of the title attribute will be displayed as a tooltip when you mouse over the element"}
        ]
    ]

    const notedata = [
        [
            {"line1": "We will explore about href , alt , src , width , height attributes in HTML img & Anchor section and style attributes in HTML styles section. Here we will learn about title attribute."},
        ],
        [
            {"line1": "Always use quotes around attributes values. Double quotes around attribute values are the most common in HTML, but single quotes can also be used."}
        ]
    ]

    const demofiledata = [
        [
            {"heading": "Example :", "start": "<p ", "blue": 'title="WebsiteName"', "rest": "> CodeAndGraphics <p>"}
        ],
        [
            {"heading": "Preview : (Hover the mouse over CodeAndGraphics)", "simple": "Code And Graphics", "title": "Website Name"}
        ]
    ]

    return (
        <div>
            <Header />
            <Navigationtop text={props} number={1} numbertwo={7} navbar={navbar} activenavbar={setNavbar}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={7}/>

                    <div className="maincontent" id="maincontent">
                        <Introandbuttons 
                            heading="HTML Attributes"
                            buttonone={["HTML Text Formatting", "/htmltextformat"]}
                            buttontwo={["HTML Image and Anchor", "/htmlimgandanchor"]}    
                        />

                        <PandList text={pandlistdata[0]}/>
                        <p className="answer">Attribute is made up of two parts -</p>
                        <p className="answer__breif">1. Attribute name                          2. Attribute value</p>
                        <p className="answer__breif">   '=' is used to set the value</p>
                        <p className="answer__breif">   Syntax : attribute = "value"</p>
                        <br/>
                        <Note lines={notedata[0]}/><br/>

                        <PandList text={pandlistdata[1]}/>

                        <Demofile demodata={demofiledata[0]}/>
                        <Demofile demodata={demofiledata[1]}/>

                        <Note lines={notedata[1]}/><br/>
                        
                        <Introandbuttons 
                            buttonone={["HTML Text Formatting", "/htmltextformat"]}
                            buttontwo={["HTML Image and Anchor", "/htmlimgandanchor"]}     
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Htmlattributes
