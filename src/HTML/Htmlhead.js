import React, { useEffect, useState }  from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Demofile from '../Utilities/Demofile';
import Introandbuttons from '../Utilities/Introandbuttons';
import Navigationtop from '../Utilities/Navigationtop';
import Note from '../Utilities/Note';
import PandList from '../Utilities/PandList';
import SideNavigationbar from '../Utilities/SideNavigationbar';
import "./Common.css";

function Htmlhead({props}) {

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
            {"listitems" : "Container for many elements such as meta, title, link etc."},
            {"listitems" : "We will Discuss these - <title>, <style>, <meta>, <link>, <script> and <base>."},
            {"listitems" : "Metadata (data about data) define the document title, character set, styles, scripts, link, and other meta information."},
        ],
        [
            {"heading": "1. <title> :", "listitems": "Defines title in browser."},
            {"listitems" : "This tag is required in HTML documents."},
            {"listitems" : "Important for SEO (Search engine optimization)."},
        ],
        [
            {"heading": "2. <style> :", "listitems": "To specify style information in HTML page."},
            {"listitems" : "In other words To add CSS in html file."},
            {"listitems" : "Syntax is same as in CSS file."},
        ],
        [
            {"heading": "3. <link> :", "listitems": "Used to link an external file to the current file."},
            {"listitems" : "Usually used to link external style sheet (CSS file)."},
        ],
        [
            {"heading": "4. <meta>:", "listitems": "Specify the Description of webpage, keywords, author, Character set, Viewport etc."},
            {"listitems" : "These are used by browser, and search engines."},
        ],
        [
            {"heading": "5. <script>:", "listitems": "To define Javascripts in HTML file."},
        ]
    ]

    const demodata = [
        [
            {"heading": "Example :", "simple": "<head>"},
            {"start": '        <title> ',"blue": ' Webpage ', "rest": "</title>"},
            {"simple": "</head>"},
        ],
        [
            {"heading": "Example :", "simple": "<head>"},
            {"start": '        <style> ',"blue": ' // CSS Code ', "rest": "</style>"},
            {"simple": "</head>"},
        ],

        [
            {"heading": "Example :", "simple": "<head>"},
            {"start": '        <link> ',"blue": ' rel="stylesheet" href="mystyle.css" ', "rest": ">"},
            {"simple": "</head>"},
        ],
        [
            {"heading": "Character Set :", "start": '<meta> ',"blue": ' charset="UTF-8" ', "rest": ">"},
        ],
        [
            {"heading": "Description of webpage :", "start": '<meta> ',"blue": ' name="description" content="Web, Programming and Graphic design Tutorials" ', "rest": ">"},
        ],
        [
            {"heading": "Keywords for Search Engines :", "start": '<meta> ',"blue": ' name="keywords" content="HTML, CSS, JS, Photoshop, Illustrator, PremierePro, Java, C++, Python"name="keywords" content="HTML, CSS, JS, Photoshop, Illustrator, PremierePro, Java, C++, Python" ', "rest": ">"},
        ],
        [
            {"heading": "Author of Webpage :", "start": '<meta> ',"blue": ' name="author" content="Name" ', "rest": ">"},
        ],
        [
            {"heading": "Setting the viewport :", "start": '<meta> ',"blue": ' name="viewport" content="width=device-width, initial scale=1.0" ', "rest": ">"},
        ],
        [
            {"heading": "Example :", "simple": "<head>"},
            {"start": '        <script> ',"blue": ' // JS Code ', "rest": "</script>"},
            {"simple": "</head>"},
        ],
    ]

    const notedata = [
        {"line1": "Viewport is user's visible area of webpage."},
        {"line1": "The width=device-width part sets the width of page to follow the screen-width of device."},
        {"line1": "The initial-scale = 1.0 part sets the initial zoom level when the page is first loaded by browser."},
    ]

    return (
        <div>
            <Header />
            <Navigationtop text={props} number={1} numbertwo={17} navbar={navbar} activenavbar={setNavbar}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={17}/>

                    <div className="maincontent" id="maincontent">
                        <Introandbuttons 
                            heading="HTML Head"
                            buttonone={["HTML Layout", "/htmllayout"]}
                            buttontwo={["HTML Figure and FigureCaption", "/htmlfigure"]}    
                        />

                        <PandList text={pandlistdata[0]}/>

                        {/* Title */}
                        <PandList text={pandlistdata[1]}/>
                        <Demofile demodata={demodata[0]}/><br/>

                        {/* Style */}
                        <PandList text={pandlistdata[2]}/>
                        <Demofile demodata={demodata[1]}/><br/>

                        {/* Link */}
                        <PandList text={pandlistdata[3]}/>
                        <Demofile demodata={demodata[2]}/><br/>

                        {/* Meta */}
                        <PandList text={pandlistdata[4]}/>
                        <Demofile demodata={demodata[3]}/>
                        <Demofile demodata={demodata[4]}/>
                        <Demofile demodata={demodata[5]}/>
                        <Demofile demodata={demodata[6]}/>
                        <Demofile demodata={demodata[7]}/>
                        <Note lines={notedata}/><br/>

                        {/* Script */}
                        <PandList text={pandlistdata[5]}/>
                        <Demofile demodata={demodata[8]}/>

                        <Introandbuttons 
                            buttonone={["HTML Layout", "/htmllayout"]}
                            buttontwo={["HTML Figure and FigureCaption", "/htmlfigure"]}     
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Htmlhead
