import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Demofile from '../Utilities/Demofile'
import Introandbuttons from '../Utilities/Introandbuttons'
import Navigationtop from '../Utilities/Navigationtop'
import Note from '../Utilities/Note'
import PandList from '../Utilities/PandList'
import SideNavigationbar from '../Utilities/SideNavigationbar'

function Reactrender({props}) {

    const pandlistdata = [
        {"listitems": "React uses a function known as ReactDOM.render to render HTML to webpage."},
        {"listitems": "It takes two arguments HTML Code and HTML element."},
    ]

    const demodata = [
        [
            {"heading": "Example : ", "simple": "ReactDOM.render(<h1>Code And Graphics </h1>, document.getElementById('app'))"},
            {"simple": "// Code will be rendered in element having id 'app'"}
        ],
        [
            {"heading": "Example : ", "simple": "ReactDOM.render(element, document.getElementById('app'))"}
        ],
        [
            {"heading": "element : ", "simple": "const element = ( "},
            {"simple": "        // Code "},
            {"simple": ");"}
        ],
    ]

    const notedata = [
        {"line1": "Move to Next Topic React JSX to understand better."}
    ]

    return (
        <div>
            <Header />
            <Navigationtop number={7}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={3}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="React Render"
                            buttonone={["React ES6", "/reactes"]}
                            buttontwo={["React JSX", "/reactjsx"]}    
                        />

                        <PandList text={pandlistdata}/>
                        <Demofile demodata={demodata[0]}/><br/>
                        <Demofile demodata={demodata[1]}/>
                        <Demofile demodata={demodata[2]}/>

                        <Note lines={notedata}/>

                        <Introandbuttons 
                            buttonone={["React ES6", "/reactes"]}
                            buttontwo={["React JSX", "/reactjsx"]}    
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Reactrender
