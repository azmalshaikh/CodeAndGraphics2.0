import React, { useEffect, useState }  from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Introandbuttons from '../Utilities/Introandbuttons';
import Navigationtop from '../Utilities/Navigationtop';
import Note from '../Utilities/Note';
import PandList from '../Utilities/PandList';
import SideNavigationbar from '../Utilities/SideNavigationbar';
import "./Common.css";

function Htmlsemantictags({props}) {

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
            {"listitems": "Elements with a meaning."},
            {"listitems": "A semantic element clearly describes its meaning to both the browser and the developer."},
            {"listitems": "Examples : <form> , <table> and <nav>."},
            {"listitems": "In HTML there are some semantic elements that can be used to define different parts of a web page."},
        ], 
        [
            {"heading": "Header Element :", "listitems": "<nav> contains a set of important links of the website."},
            {"listitems": "It can contain name, Logo and Icon of the website."},
        ],
        [
            {"heading": "Nav Element :", "listitems": "<nav> contains a set of important links of the website."},
            {"listitems": "It can contain name, Logo and Icon of the website."},
        ],
        [
            {"heading": "Section Element :", "listitems": "<section> defines the section of document."},
            {"listitems": "It can contain contents, Introduction and chapters of the website."},
        ],
        [
            {"heading": "Footer Element :", "listitems": "<footer> defines the footer/End section of the website."},
            {"listitems": "It can contain authorship information, copyright information, contact information, language, back to top links and social media links."},
        ]
    ]

    const notedata = [
        {"line1": "There are many more semantic tags(article, aside ..). You don't have to learn all these!!"},
        {"line1": "Semantic tags are only for your convenience. It makes the information in webpage clearer."}
    ]

    return (
        <div>
            <Header />
            <Navigationtop text={props} number={1} numbertwo={14} navbar={navbar} activenavbar={setNavbar}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={14}/>

                    <div className="maincontent" id="maincontent">
                        <Introandbuttons 
                            heading="HTML Semantic Tags"
                            buttonone={["HTML Entities", "/htmlentities"]}
                            buttontwo={["HTML Colors", "/htmlcolors"]}    
                        />

                        <PandList text={pandlistdata[0]}/>
                        <PandList text={pandlistdata[1]}/>
                        <PandList text={pandlistdata[2]}/>
                        <PandList text={pandlistdata[3]}/>
                        <PandList text={pandlistdata[4]}/>

                        <Note lines={notedata}/>

                        <Introandbuttons 
                            buttonone={["HTML Entities", "/htmlentities"]}
                            buttontwo={["HTML Colors", "/htmlcolors"]}     
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Htmlsemantictags
