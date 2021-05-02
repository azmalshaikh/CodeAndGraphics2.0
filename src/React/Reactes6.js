import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Demofile from '../Utilities/Demofile'
import Introandbuttons from '../Utilities/Introandbuttons'
import Navigationtop from '../Utilities/Navigationtop'
import PandList from '../Utilities/PandList'
import SideNavigationbar from '../Utilities/SideNavigationbar'

function Reactes6({props}) {

    const pandlistdata = [
        [
            {"listitems": "ECMAScript 6"},
            {"listitems": "You have to learn classes, Arrow Functions, Variables etc because React uses ES6."},
        ],
        [
            {"heading": "1. Classes : ", "listitems": "Use keyword class to initiate it."}
        ],
        [
            {"heading": "2. Arrow Functions : ", "listitems": "The 1st one is without normal function and 2nd one is arrow function"}
        ],
    ]

    const demodata = [
        [
            {"heading": "Example : ", "simple": "class codeandgraphics {"},
            {"simple": "        // Instance Variable or Constructor"},
            {"simple": "}"},
        ],
        [
            {"heading": "Constructor : ", "simple": "constructor(name) {"},
            {"simple": "        this.color = name"},
            {"simple": "}"},
        ],
        [
            {"heading": "Example : ", "simple": "const code = function() {"},
            {"simple": "        // code eg(return 'CodeandGraphics')"},
            {"simple": "}"},
        ],
        [
            {"heading": "Example : ", "simple": "const code = () => {"},
            {"simple": "        // code eg(return 'CodeandGraphics')"},
            {"simple": "}"},
        ]
    ]

    return (
        <div>
            <Header />
            <Navigationtop number={7}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={2}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="React ES6"
                            buttonone={["React Introduction", "/react"]}
                            buttontwo={["React Render", "/reactrender"]}    
                        />

                        <PandList text={pandlistdata[0]}/>

                        <PandList text={pandlistdata[1]}/>
                        <Demofile demodata={demodata[0]} />
                        <Demofile demodata={demodata[1]} /><br/>

                        <PandList text={pandlistdata[2]}/>
                        <Demofile demodata={demodata[2]} />
                        <Demofile demodata={demodata[3]} /><br/>

                        <Introandbuttons 
                            buttonone={["React Introduction", "/react"]}
                            buttontwo={["React Render", "/reactrender"]}
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Reactes6
