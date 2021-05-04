import React, { useEffect, useState }  from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Demofile from '../Utilities/Demofile';
import Introandbuttons from '../Utilities/Introandbuttons';
import Navigationtop from '../Utilities/Navigationtop';
import PandList from '../Utilities/PandList';
import SideNavigationbar from '../Utilities/SideNavigationbar';
import "./Common.css";

function HtmlInlineandblock({props}) {

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
            {"heading": "1. Block Elements :", "listitems": "Block level elements always start on a new line and also takes the full width (available)."},
        ],
        [
            {"heading": "Some block-level elements :", "listitems": "Heading (<h1>...<h6>)"},
            {"listitems": "Paragraph (<p>)"},
            {"listitems": "Table (<table>)"},
            {"listitems": "HTML List (<ul>, <ol>, <li>, <dl>, <dd> and <dt> )"},
            {"listitems": "Note : Only that elements are mentioned above which we have discussed yet."},
        ],
        [
            {"heading": "2. Inline elements :", "listitems": "Inline level elements does not start on a new line and it only takes up as much width as necessary."},
        ],
        [
            {"heading": "Some inline-level elements :", "listitems": "<span>"},
            {"listitems": "Image (<img>)"},
            {"listitems": "<input>"},
            {"listitems": "Bold & Italic(<b> & <i>)"},
            {"listitems": "Bold & Italic(<b> & <i>)"},
            {"listitems": "<sup> & <sub>"},
            {"listitems": "Anchor (<a>)"},
            {"listitems": "Note : Only that elements are mentioned above which we have discussed yet."}
        ]
    ]

    const demodata = [
        [
            {"heading": "Example :", "start": '<p>',"blue": ' Paragraph1 ', "rest": "</p>"},
            {"start": '<p>',"blue": ' Paragraph2 ', "rest": "</p>"}
        ],
        [
            {"heading": "Example :", "start": '<span>',"blue": ' Inline-level element ', "rest": "</span>"},
        ],
    ]

    return (
        <div>
            <Header />
            <Navigationtop text={props} number={1} numbertwo={11} navbar={navbar} activenavbar={setNavbar}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={11}/>

                    <div className="maincontent" id="maincontent">
                        <Introandbuttons 
                            heading="HTML Inline and Block"
                            buttonone={["HTML Forms", "/htmlforms"]}
                            buttontwo={["HTML Id's and Classes", "/htmlisandclass"]}    
                        />

                        <p className="answer">Every HTML elements has a default display value i.e. block and inline.</p><br/>
                        <PandList text={pandlistdata[0]}/>
                        <Demofile demodata={demodata[0]}/>
                        <PandList text={pandlistdata[1]}/><br/>

                        <PandList text={pandlistdata[2]}/>
                        <Demofile demodata={demodata[1]}/>
                        <PandList text={pandlistdata[3]}/>

                        <Introandbuttons 
                            buttonone={["HTML Forms", "/htmlforms"]}
                            buttontwo={["HTML Id's and Classes", "/htmlisandclass"]}     
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HtmlInlineandblock
