import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Demofile from '../Utilities/Demofile'
import Introandbuttons from '../Utilities/Introandbuttons'
import Navigationtop from '../Utilities/Navigationtop'
import Note from '../Utilities/Note'
import PandList from '../Utilities/PandList'
import SideNavigationbar from '../Utilities/SideNavigationbar'

function Cssborder({props}) {

    const pandlistdata = [
        [
            {"listitems": "Border Width"},
            {"listitems": "Border Style"},
            {"listitems": "Border Color"},
        ],
        [
            {"heading": "1. Border Width :", "listitems": "Used to specify width of the border."},
            {"listitems": "border-width: 10px;"},
            {"listitems": "It can take values in px, thick, medium or thin."},
        ],
        [
            {"heading": "2. Border Style :", "listitems": "Used to specify style of the border."},
            {"listitems": "border-style: solid;"},
            {"listitems": "It can take values as solid, dotted, dashed, double, groove, none"},
        ],
        [
            {"heading": "3. Border Color :", "listitems": "Used to specify color of the border."},
            {"listitems": "border-color: black;"},
        ],
        [
            {"heading": "Curved Edges :", "listitems": "If we need curved edges."},
            {"listitems": "Used to add rounded borders to an element."},
        ]
    ]

    const notedata = [
        [
            {"line1": "Shorthand = border: width style color;"}
        ],
        [
            {"line1": "Individual Sides - Properties for specifying each of the borders individually (top, right, bottom, and left)."},
            {"line1": "eg: border-top: 2px solid grey;"}
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
            {"blue": "      border: 2px solid black;"},
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
            {"blue": '      border: 2px solid black;'},
            {"blue": '      border-radius: 15px;'},
            {"blue": '      padding: 1px;'},
            {"simple": "}"}
        ]
    ]

    return (
        <div>
            <Header />
            <Navigationtop number={2}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={5}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="CSS Border"
                            buttonone={["CSS Background", "/cssbg"]}
                            buttontwo={["CSS Margin", "/cssmargin"]}    
                        />
                        <p className="answer">The border properties allow you to specify how the border of the box representing an element should look.</p>
                        <PandList text={pandlistdata[0]}/>

                        <PandList text={pandlistdata[1]}/>
                        <PandList text={pandlistdata[2]}/>
                        <PandList text={pandlistdata[3]}/>

                        <Note lines={notedata[0]}/>

                        <Demofile demodata={demodata[0]}/>
                        <Demofile demodata={demodata[1]}/>
                        <Note lines={notedata[1]}/>
                        
                        <PandList text={pandlistdata[4]}/>
                        <Demofile demodata={demodata[2]}/>
                        <Demofile demodata={demodata[3]}/>

                        <Introandbuttons 
                            buttonone={["CSS Background", "/cssbg"]}
                            buttontwo={["CSS Margin", "/cssmargin"]}     
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cssborder
