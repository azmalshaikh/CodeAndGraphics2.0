import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Demofile from '../Utilities/Demofile'
import Introandbuttons from '../Utilities/Introandbuttons'
import Navigationtop from '../Utilities/Navigationtop'
import Note from '../Utilities/Note'
import PandList from '../Utilities/PandList'
import SideNavigationbar from '../Utilities/SideNavigationbar'

function Cssmargin({props}) {

    const pandlistdata = [
        [
            {"listitems": "Used to separate main content's from page's edge (Create space around elements)."},
            {"listitems": "It can take values as auto, length(px, pt, cm), percentage(50%), inherit(Inherited from parent element)."},
        ],
        [
            {"heading": "Margin individual sides example:", "listitems": "margin-left"},
            {"listitems": "margin-right"},
            {"listitems": "margin-top"},
            {"listitems": "margin-bottom"},
        ],
        [
            {"heading": "Margin Shorthand example:", "define": "margin: top right bottom left"},
            {"define": "margin: 10px 20px 15px ", "listitems": "(Here the 10px is top margin, 20px is right and left margin, 15px is bottom margin)."},
            {"define": "margin: 10px 20px ", "listitems": "(Here the 10px is top and bottom margin, 20px is right and left margin)."},
            {"define": "margin: 10px", "listitems": "(Here the 10px is top margin, 20px is right and left margin, 15px is bottom margin)."},

        ],
        [
            {"heading": "Margin auto value :", "listitems": "Used to horizontally center the element within its container."},
            {"listitems": "For this to work you also have to specify width of that element. It takes up the width and the remaining space will be split equally between left and right margins."},
            {"listitems": "For inline and inline-block elements you can just do text-align: center on the parent and the text will be centred."},
        ],
        [
            {"heading": "Margin inherit value :", "listitems": "Inherit the margin value from it's parent element."},
        ],
        [
            {"heading": "", "listitems": ""},
            {"listitems": ""},
            {"listitems": ""},
        ],
    ]

    const notedata = [
        {"line1": "Explore Margin Shorthand and Individual sides yourself!!"}
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
            {"blue": "      border: 1px solid black;"},
            {"blue": "      margin: 5px;"},
            {"simple": "}"}
        ],
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
            {"blue": '      border: 1px solid black;'},
            {"blue": '      margin: auto;'},
            {"blue": '      padding: 1px;'},
            {"blue": '      width: auto;'},
            {"simple": "}"}
        ]
    ]

    return (
        <div>
            <Header />
            <Navigationtop number={2}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={6}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="CSS Margin"
                            buttonone={["CSS Border", "/cssborder"]}
                            buttontwo={["CSS Padding", "/csspadding"]}    
                        />

                        <PandList text={pandlistdata[0]}/>
                        <PandList text={pandlistdata[1]}/>
                        <PandList text={pandlistdata[2]}/><br/>

                        <Demofile demodata={demodata[0]}/>
                        <Demofile demodata={demodata[1]}/><br/>

                        <PandList text={pandlistdata[3]}/>
                        <Demofile demodata={demodata[2]}/>
                        <Demofile demodata={demodata[3]}/><br/>

                        <PandList text={pandlistdata[4]}/>
                        <Note lines={notedata} />

                        <Introandbuttons 
                            buttonone={["CSS Border", "/cssborder"]}
                            buttontwo={["CSS Padding", "/csspadding"]}    
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cssmargin
