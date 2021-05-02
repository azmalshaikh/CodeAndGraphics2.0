import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Introandbuttons from '../Utilities/Introandbuttons'
import Navigationtop from '../Utilities/Navigationtop'
import Note from '../Utilities/Note'
import PandList from '../Utilities/PandList'
import SideNavigationbar from '../Utilities/SideNavigationbar'

function Reactjsx({props}) {

    const pandlistdata = [
        [
            {"listitems": "JavaScript XML."},
            {"listitems": "With JSX you can write HTML code in Javascript file without using any createELement() or any methods."},
            {"define": "const element = <h1>Code And Graphics</h1>;", "listitems": " ( This syntax is called JSX)"},
            {"listitems": "JSX Produces React Elements."}
        ],
        [
            {"heading": "Expressions in JSX : ", "listitems": "You can write variable, calculations, loops or any other valid JS expression in curly braces in JSX."},
            {"listitems": "To write HTML in multiple lines put the HTML code inside parenthesis()."},
            {"listitems": "HTML code must be within a one top level element."},
            {"listitems": "HTML is properly closed."}
        ]
    ]

    const notedata = [
        {"line1": "Explore this concept!!"}
    ]

    return (
        <div>
            <Header />
            <Navigationtop number={7}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={4}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="React JSX"
                            buttonone={["React Render", "/reactrender"]}
                            buttontwo={["React Components", "/reactcomponents"]}    
                        />

                        <PandList text={pandlistdata[0]}/>
                        <PandList text={pandlistdata[1]}/>
                        <Note lines={notedata}/>

                        <Introandbuttons 
                            buttonone={["React Render", "/reactrender"]}
                            buttontwo={["React Components", "/reactcomponents"]}    
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Reactjsx
