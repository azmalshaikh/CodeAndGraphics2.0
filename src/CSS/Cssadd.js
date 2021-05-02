import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Demofile from '../Utilities/Demofile'
import Note from '../Utilities/Note'
import PandList from '../Utilities/PandList';
import Introandbuttons from '../Utilities/Introandbuttons'
import Navigationtop from '../Utilities/Navigationtop'
import SideNavigationbar from '../Utilities/SideNavigationbar'

function Cssadd({props}) {

    const pandlistdata = [
        [
            {"heading": "How to add CSS --", "listitems": "External CSS"},
            {"listitems": "Internal CSS"},
            {"listitems": "Inline CSS"},
        ],
        [
            {"heading": "1. External CSS :", "listitems": "Style the HTML file using an single CSS File."},
            {"listitems": "HTML File must include this reference to external CSS File, inside the head section."},
            {"listitems": '<link rel="stylesheet" type="text/css href="text.css" >'},
        ],
        [
            {"heading": "2. Internal CSS :", "listitems": "Style the HTML file using <style> element, inside head element."},
        ],
        [
            {"heading": "3. Inline CSS :", "listitems": "Style the HTML file using <style> attribute, inside relevant element."},
        ],
    ]

    const demodata = [
        [
            {"heading": "HTML File :","simple" : "<!DOCTYPE html>"},
            {"simple": "<html>"},
            {"simple": "<head>"},
            {"simple": "        <title> CSS </title>"},
            {"start" : '        <link ',"blue": ' rel="stylesheet" type="text/css href="text.css" ', "rest": ">"},
            {"simple": "</head>"},
            {"simple": "<body>"},
            {"start" : '        <p> ',"blue": ' Code And Graphics ', "rest": "</p>"},
            {"simple": "</body>"},
            {"simple": "</html>"},
        ],
        [
            {"heading": "CSS File :", "simple": "p {"},
            {"blue": "      color: blue;"},
            {"simple": "}"}
        ],
        [
            {"heading": "Preview :", "blue": "Code And Graphics"}
        ],
        [
            {"heading": "HTML File :","simple" : "<!DOCTYPE html>"},
            {"simple": "<html>"},
            {"simple": "<head>"},
            {"simple": "        <title> CSS </title>"},
            {"simple": "        <style>"},
            {"simple": "            p {"},
            {"blue": "                color: red;"},
            {"simple": "            }"},
            {"simple": "        </style>"},
            {"simple": "</head>"},
            {"simple": "<body>"},
            {"start" : '        <p>',"blue": ' Code And Graphics ', "rest": "</p>"},
            {"simple": "</body>"},
            {"simple": "</html>"},
        ],
        [
            {"heading": "Preview :", "blue": "Code And Graphics"}
        ],
        [
            {"heading": "HTML File :","simple" : "<!DOCTYPE html>"},
            {"simple": "<html>"},
            {"simple": "<head>"},
            {"simple": "        <title> CSS </title>"},
            {"simple": "</head>"},
            {"simple": "<body>"},
            {"start" : '        <p',"blue": ' style="color: red;"', "rest": "> Code And Graphics </p>"},
            {"simple": "</body>"},
            {"simple": "</html>"},
        ],
        [
            {"heading": "Preview :", "blue": "Code And Graphics"}
        ],
    ]

    const notedata = [
        {"line1": "If there are more than one style for a HTML element, then which will be used?"},
        {"line1": "Priority Order:"},
        {"line1": "1. Inline CSS"},
        {"line1": "2. External or Internal CSS"},

    ]
    return (
        <div>
            <Header />
            <Navigationtop number={2}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={3}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="Add CSS"
                            buttonone={["CSS Selectors", "/cssselectors"]}
                            buttontwo={["CSS Background", "/cssbg"]}    
                        />

                        <PandList text={pandlistdata[0]}/>
                        
                        <PandList text={pandlistdata[1]}/>
                        <Demofile demodata={demodata[0]}/>
                        <Demofile demodata={demodata[1]}/>
                        <Demofile demodata={demodata[2]}/><br/>

                        <PandList text={pandlistdata[2]}/>
                        <Demofile demodata={demodata[3]}/>
                        <Demofile demodata={demodata[4]}/><br/>

                        <PandList text={pandlistdata[3]}/>
                        <Demofile demodata={demodata[5]}/>
                        <Demofile demodata={demodata[6]}/><br/>

                        <Note lines={notedata}/>

                        <Introandbuttons 
                            buttonone={["CSS Selectors", "/cssselectors"]}
                            buttontwo={["CSS Background", "/cssbg"]}    
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cssadd
