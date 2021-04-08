import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Demofile from '../Utilities/Demofile';
import Introandbuttons from '../Utilities/Introandbuttons';
import Navigationtop from '../Utilities/Navigationtop';
import Note from '../Utilities/Note';
import PandList from '../Utilities/PandList';
import SideNavigationbar from '../Utilities/SideNavigationbar';
import "./Common.css";

function Htmlimgandanchor({props}) {

    const pandlistdata = [
        [
            {"heading": "1. Image :", "listitems": "Denotations : <img>"},
            {"listitems": "Location : Inside Body tag"},
            {"listitems": "Usage : To add an image to the webpage"},
            {"listitems": 'Syntax : <img src="url">'},
            {"listitems": "Here src is attribute to include image's path/url. Image mainly contains attributes namely alt , width and height."},
        ],
        [
            {"heading": "The alt Attribute - ", "listitems": "Defines text/name for an image (In case it can't be displayed)."},
            {"listitems": "Value of alt attribute should described about image."}
        ],
        [
            {"heading": "The width and height - ", "listitems": "Attribute to set the width and height of image."},
            {"listitems": "The width and height attributes always set the width and height of the image in pixels."}
        ]
    ]
    
    const demofiledata = [
        [
            {"heading": "Example :", "start": "<img ", "blue": 'src="url"', "rest": ">"}
        ],
        [
            {"heading": "Example :", "start": "<img ", "blue": 'src="rose.jpg" alt="Rose Flower"', "rest": ">"}
        ],
        [
            {"heading": "Example :", "start": "<img ", "blue": 'src="rose.jpg" width="300" height="400"" alt="Rose Flower"', "rest": ">"}
        ]
    ]

    const notedata = [
        [
            {"line1": "The alt attribute is required. A web page will not validate correctly without it."},
        ],
        [
            {"line1": "Always specify the width and height of an image."},
            {"line1": "Now pracitce image tag and it's attribute (alt, width, height)"}
        ]
    ]

    return (
        <div>
            <Header />
            <Navigationtop text={props} number={1} numbertwo={8}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={8}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="HTML Image and Anchor"
                            buttonone={["HTML Attributes", "/htmlattributes"]}
                            buttontwo={["HTML List and Tables", "/htmllistandtables"]}    
                        />

                        <PandList text={pandlistdata[0]}/>
                        <Demofile demodata={demofiledata[0]}/><br/>
                        
                        <PandList text={pandlistdata[1]}/>
                        <Demofile demodata={demofiledata[1]}/>

                        <Note lines={notedata[0]}/><br/>

                        <PandList text={pandlistdata[2]}/>
                        <Demofile demodata={demofiledata[2]}/>

                        <Note lines={notedata[1]}/>

                        <Introandbuttons 
                            buttonone={["HTML Attributes", "/htmlattributes"]}
                            buttontwo={["HTML List and Tables", "/htmllistandtables"]}      
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Htmlimgandanchor
