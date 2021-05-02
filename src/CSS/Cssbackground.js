import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Demofile from '../Utilities/Demofile'
import Introandbuttons from '../Utilities/Introandbuttons'
import Navigationtop from '../Utilities/Navigationtop'
import Note from '../Utilities/Note'
import PandList from '../Utilities/PandList'
import SideNavigationbar from '../Utilities/SideNavigationbar'

function Cssbackground({props}) {

    const pandlistdata = [
        [
            {"heading": "1. Background Color :", "listitems": "Used to specify background color of an element."},
            {"listitems": "Can be used for any element."},
        ],
        [
            {"heading": "2. Background Image :", "listitems": "Used to specify background image of an element."},
            {"listitems": "Can be used for any element."},
        ],
        [
            {"heading": "Background Repeat :", "listitems": "By default background-image property repeats image horizontally and vertically."},
            {"listitems": "Background repeat can take values no-repeat, repeat-x, repeat-y."},
        ],
        [
            {"heading": "3. Background Attachment :", "listitems": "Specifies whether the background image should scroll or fixed (not scroll with the rest of the page)."},
        ],
        [
            {"heading": "4. Background Position :", "listitems": "Specifies the starting position of a background image."},
            {"listitems": "Default value is top left."},
        ],
        [
            {"heading": "Background Shorthand :", "listitems": "Specifies all the background properties in one single property(one line)."},
            {"listitems": "Order: color > image > repeat > attachment > position"},
            {"listitems": 'eg: background: #ffffff url("sample.jpg") no-repeat top right fixed;'},
        ]
    ]

    const notedata = [
        [
            {"line1": "Opacity property specify the opacity of elements."},
            {"line1": "It can take value upto 0.0 to 1.0."},
            {"line1": "eg: opacity: 0.5;"}
        ],
        [
            {"line1": "There are many more background properties but above ones are widely used."},
        ]
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
            {"blue": "      background-color: red;"},
            {"blue": "      color: blue;"},
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
            {"blue": '      background-image: url("sample.jpg");'},
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
            {"blue": '      background-image: url("sample.jpg");'},
            {"blue": "      background-repeat: no-repeat;"},
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
            {"blue": '      background-image: url("sample.jpg");'},
            {"blue": "      background-repeat: no-repeat;"},
            {"blue": "      background-attachment: fixed;"},
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
            {"blue": '      background-image: url("sample.jpg");'},
            {"blue": "      background-repeat: no-repeat;"},
            {"blue": "      background-position: top right;"},
            {"blue": "      background-attachment: fixed;"},
            {"simple": "}"}
        ]
    ]

    return (
        <div>
            <Header />
            <Navigationtop number={2}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={4}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="CSS Background"
                            buttonone={["Add CSS", "/cssadd"]}
                            buttontwo={["CSS Border", "/cssborder"]}    
                        />

                        <p className="answer">CSS Background is used to add background effects for elements.</p>

                        <PandList text={pandlistdata[0]}/>
                        <Demofile demodata={demodata[0]}/>
                        <Demofile demodata={demodata[1]}/>
                        <Note lines={notedata[0]}/><br/>

                        <PandList text={pandlistdata[1]}/>
                        <Demofile demodata={demodata[2]}/>
                        <Demofile demodata={demodata[3]}/><br/>

                        <PandList text={pandlistdata[2]}/>
                        <Demofile demodata={demodata[4]}/>
                        <Demofile demodata={demodata[5]}/><br/>

                        <PandList text={pandlistdata[3]}/>
                        <Demofile demodata={demodata[6]}/>
                        <Demofile demodata={demodata[7]}/><br/>

                        <PandList text={pandlistdata[4]}/>
                        <Demofile demodata={demodata[8]}/>
                        <Demofile demodata={demodata[9]}/><br/>

                        <PandList text={pandlistdata[5]}/>
                        <Note lines={notedata[1]}/><br/>

                        <Introandbuttons 
                            buttonone={["Add CSS", "/cssadd"]}
                            buttontwo={["CSS Border", "/cssborder"]}     
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cssbackground
