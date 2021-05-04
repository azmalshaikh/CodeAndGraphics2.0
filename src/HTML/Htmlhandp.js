import React, { useEffect, useState }  from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Demofile from '../Utilities/Demofile';
import Introandbuttons from '../Utilities/Introandbuttons';
import Navigationtop from '../Utilities/Navigationtop';
import PandList from '../Utilities/PandList';
import SideNavigationbar from '../Utilities/SideNavigationbar';
import "./Common.css";

function Htmlhandp({props}) {

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

    const pandList = [
        // [
        //     {"heading": "1. Headings :", "define": "Denotation", "listitems": " : <h1></h1> , <h2></h2> , <h3></h3> ......"},
        //     {"define": "Location", "listitems": " : Inside the body tag"},
        //     {"define": "Usage", "listitems": " : Title/Heading you have to give to a paragraph or any other section"},
        //     {"listitems": "<h1> The most important heading (font-size = larger)"},
        //     {"listitems": "h1 followed by h2 headings and so on (Decreasing order of font-size)"},
        // ],

        [
            {"heading": "1. Heading :", "listitems": "Denotations : <h1></h1> , <h2></h2> , <h3></h3> ......"},
            {"listitems": "Location : Inside the body tag"},
            {"listitems": "Usage : Title/Heading you have to give to a paragraph or any other section"},
            {"listitems": "<h1> The most important heading (font-size = larger)"},
            {"listitems": "h1 followed by h2 headings and so on (Decreasing order of font-size)"},
        ],
        [
            {"heading": "2. Paragraph :", "listitems": "Denotation : <p></p>"},
            {"listitems": "Location : Inside the body tag"},
            {"listitems": "Usage : Make new paragraph"},
            {"listitems": "Visibility : Text placed inside this tag will visible on main webpage."},
            {"listitems": "A Paragraph always start on a new line"},
        ]
    ]

    const demofiledata = [
        [
            [
                {"heading": "HTML File :", "simple" : "<!DOCTYPE html>"},
                {"simple": "<html>"},
                {"simple": "<head>"},
                {"simple": "        <title> Heading And Paragraph </title>"},
                {"simple": "</head>"},
                {"simple": "<body>"},
                {"simple": "        <h1> Heading 1 <h1>"},
                {"simple": "        <h2> Heading 2 <h2>"},
                {"simple": "        <h3> Heading 3 <h3>"},
                {"simple": "</body>"},
                {"simple": "</html>"},
            ], 
            [
                {"heading": "Preview : ", "large": "Heading 1"},
                {"medium": "Heading 2"},
                {"simple": "Heading 3"},
            ],
        ],
        
        [
            [
                {"heading": "HTML File :", "simple" : "<!DOCTYPE html>"},
                {"simple": "<html>"},
                {"simple": "<head>"},
                {"simple": "        <title> Heading And Paragraph </title>"},
                {"simple": "</head>"},
                {"simple": "<body>"},
                {"simple": "        <p> This is paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, beatae. </p>"},
                {"simple": "</body>"},
                {"simple": "</html>"},
            ],
            [
                {"heading": "Preview : ","simple": "This is paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, beatae."},
            ]
        ]
    ]

    return (
        <div>
            <Header />
            <Navigationtop text={props} number={1} numbertwo={5} navbar={navbar} activenavbar={setNavbar}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={5}/>

                    <div className="maincontent" id="maincontent">
                        <Introandbuttons 
                            heading="HTML Heading and Paragraph"
                            buttonone={["HTML Elements", "/htmlelements"]}
                            buttontwo={["HTML Text Formatting", "/htmltextformat"]}    
                        />

                        <PandList text={pandList[0]}/>
                        <Demofile demodata={demofiledata[0][0]}/>
                        <Demofile demodata={demofiledata[0][1]}/>

                        <br/>

                        <PandList text={pandList[1]}/>
                        <Demofile demodata={demofiledata[1][0]}/>
                        <Demofile demodata={demofiledata[1][1]}/>

                        <Introandbuttons 
                            buttonone={["HTML Elements", "/htmlelements"]}
                            buttontwo={["HTML Text Formatting", "/htmltextformat"]}      
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Htmlhandp
