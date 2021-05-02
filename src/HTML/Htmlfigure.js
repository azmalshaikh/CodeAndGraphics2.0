import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Demofile from '../Utilities/Demofile';
import Introandbuttons from '../Utilities/Introandbuttons';
import Navigationtop from '../Utilities/Navigationtop';
import SideNavigationbar from '../Utilities/SideNavigationbar';
import "./Common.css";

function Htmlfigure({props}) {

    const demodata = [
        {"heading": "Example :", "simple": "<figure>"},
        {"start": '        <img ',"blue": 'src ="path.jpg"', "rest": ">"},
        {"start": '        <figcaption>',"blue": ' Image tag or name', "rest": "</figcaption>"},
        {"simple": "</figure>"},
    ]

    return (
        <div>
            <Header />
            <Navigationtop text={props} number={1} numbertwo={18}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={18}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="HTML Figure and FigureCaption"
                            buttonone={["HTML Head", "/htmlhead"]}
                            buttontwo={["HTML Responsive", "/htmlresponsive"]}    
                        />

                        <p className="answer">Use figure element to mark up a photo in a document.</p>
                        <p className="answer">Figcaption is used to define a caption for the photo.</p><br/>
                        <Demofile demodata={demodata}/>

                        <Introandbuttons 
                            buttonone={["HTML Head", "/htmlhead"]}
                            buttontwo={["HTML Responsive", "/htmlresponsive"]}     
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Htmlfigure
