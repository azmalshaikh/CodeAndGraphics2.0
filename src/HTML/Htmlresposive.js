import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Introandbuttons from '../Utilities/Introandbuttons';
import Navigationtop from '../Utilities/Navigationtop';
import PandList from '../Utilities/PandList';
import SideNavigationbar from '../Utilities/SideNavigationbar';
import "./Common.css";

function Htmlresposive({props}) {

    const pandlistdata = [
        [
            {"listitems": "Automatically resize, hide, shrink, enlarge a webiste to make attractive in all devices (desktops, tablets, and phones)"},
            {"listitems": "This can be done in following ways : Setting the viewport, Width property, Text size and Media Queries."},
            {"listitems": "Note : We will learn Media Queries later in CSS Tutorial"}
        ],
        [
            {"heading": "Setting the viewport :", "listitems": "Control the page's dimensions and scaling."},
            {"listitems": "Already done in HTML Head Section (meta tag)."}
        ],
        [
            {"heading": "Width property :", "listitems": "If the max-width property is set to 100%, the image will scale down if it has to, but never scale up to be larger than its original size."},
        ],
        [
            {"heading": "Text Size :", "listitems": 'The text size can be set with a "vw" unit, which means the "viewport width".'},
            {"listitems": "1vw = 1 % of viewport width (Viewport is the browser window size)."}
        ],
    ]

    return (
        <div>
            <Header />
            <Navigationtop text={props} number={1} numbertwo={19}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={19}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="HTML Responsive"
                            buttonone={["HTML Figure and FigureCaption", "/htmlfigure"]}   
                        />

                        <PandList text={pandlistdata[0]}/>
                        <PandList text={pandlistdata[1]}/>
                        <PandList text={pandlistdata[2]}/>
                        <PandList text={pandlistdata[3]}/>

                        <Introandbuttons 
                            buttonone={["HTML Figure and FigureCaption", "/htmlfigure"]}     
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Htmlresposive
