import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Demofile from '../Utilities/Demofile'
import Introandbuttons from '../Utilities/Introandbuttons'
import Navigationtop from '../Utilities/Navigationtop'
import Note from '../Utilities/Note'
import PandList from '../Utilities/PandList'
import SideNavigationbar from '../Utilities/SideNavigationbar'

function Cssselectors({props}) {

    const pandlistdata = [
        [
            {"heading": "Three Types:", "listitems": "Element Selector"},
            {"listitems": "Id Selector"},
            {"listitems": "Class Selector"},
        ],
        [
            {"heading": "Element Selector :", "listitems": "It selects HTML elements according to the given element name."},
            {"listitems": "To select all <p> elements."},
        ],
        [
            {"heading": "Id Selector :", "listitems": "It selects HTML elements according to the given id(attribute) name."},
            {"listitems": "To select write '#' character followed by id_name."},
        ],
        [
            {"heading": "Class Selector :", "listitems": "It selects HTML elements according to the given class(attribute) name."},
            {"listitems": "To select write '.' character followed by class_name."},
            {"listitems": "Mostly Used!!"},
        ],
        [
            {"heading": "Grouping Selector :", "listitems": "It selects all HTML elements according to the given elements."},
            {"listitems": "Separate elements with ','."},
        ],
        [
            {"heading": "Advanced CSS Selectors (CSS Combinators) :", "listitems": "Descendant Selector"},
            {"listitems": "Child Selector"},
            {"listitems": "Adjacent Sibling Selector"},
            {"listitems": "General Sibling Selector"},
        ],
        [
            {"heading": "Descendant Selector :", "listitems": "It selects all HTML elements that are decendant of a specified element."},
            {"listitems": "The below one select all <a> elements inside the <p>."},
        ],
        [
            {"heading": "Child Selector :", "listitems": "It selects all HTML elements that are children of a specified element."},
            {"listitems": "The below one select all <a> elements that are children of <p> element."},
            {"listitems": "(In other words it selects all the <a> that are right inside <p> elements)."},
        ],
        [
            {"heading": "Adjacent Sibling Selector :", "listitems": "It selects all HTML elements that are placed immediately after the specified element."},
            {"listitems": "The below one select all <a> elements that are placed immediately after <p> element."},
        ],
        [
            {"heading": "General Sibling Selector :", "listitems": "It selects all HTML elements that are Siblings of a specified element."},
            {"listitems": "The below one select all <a> elements that are siblings of <p> element"},
        ],
    ]

    const demodata = [
        [
            {"heading": "Syntax : ", "simple": "p {"},
            {"blue": '       /* Property Value Pairs */ '},
            {"simple": "}"},
        ],
        [
            {"heading": "Syntax : ", "simple": "#id_name "},
            {"blue": '       /* Property Value Pairs */ '},
            {"simple": "}"},
        ],
        [
            {"heading": "Syntax : ", "simple": "#class_name "},
            {"blue": '       /* Property Value Pairs */ '},
            {"simple": "}"},
        ],
        [
            {"heading": "Syntax : ", "simple": "p, a, h5 {"},
            {"blue": '       /* Property Value Pairs */ '},
            {"simple": "}"},
        ],
        [
            {"heading": "Syntax : ", "simple": "p a {"},
            {"blue": '       /* Property Value Pairs */ '},
            {"simple": "}"},
        ],
        [
            {"heading": "Syntax : ", "simple": "p > a "},
            {"blue": '       /* Property Value Pairs */ '},
            {"simple": "}"},
        ],
        [
            {"heading": "Syntax : ", "simple": "p + a "},
            {"blue": '       /* Property Value Pairs */ '},
            {"simple": "}"},
        ],
        [
            {"heading": "Syntax : ", "simple": "p ~ a "},
            {"blue": '       /* Property Value Pairs */ '},
            {"simple": "}"},
        ],
    ]

    const notedata = [
        [
            {"line1": "Universal Selector:"},
            {"line1": "*{"},
            {"line1": "       /* Property Value Pairs */ "},
            {"line1": "}"}
        ],
        [
            {"line1": "What is /* Property Value Pairs */ ?"},
            {"line1": "Property is the attribute you wish to change and each property can take a value. The property and value are separated by colon ':' and surrounded by curly braces."},
            {"line1": "Example: {color : blue;}"}
        ],
    ]

    return (
        <div>
            <Header />
            <Navigationtop number={2}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={2}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="CSS Selectors"
                            buttonone={["CSS Intro", "/cssintro"]}
                            buttontwo={["Add CSS", "/cssadd"]}    
                        />

                        <PandList text={pandlistdata[0]}/>

                        {/* Element Selector */}
                        <PandList text={pandlistdata[1]}/>
                        <Demofile demodata={demodata[0]}/><br/>

                        {/* Id Selector */}
                        <PandList text={pandlistdata[2]}/>
                        <Demofile demodata={demodata[1]}/><br/>

                        {/* Class Selector */}
                        <PandList text={pandlistdata[3]}/>
                        <Demofile demodata={demodata[2]}/><br/>

                        {/* Grouping Selector */}
                        <PandList text={pandlistdata[4]}/>
                        <Demofile demodata={demodata[3]}/>
                        <Note lines={notedata[0]} /><br/>

                        <PandList text={pandlistdata[5]}/>

                        {/* Descendant Selector */}
                        <PandList text={pandlistdata[6]}/>
                        <Demofile demodata={demodata[4]}/><br/>

                        {/* Child Selector */}
                        <PandList text={pandlistdata[7]}/>
                        <Demofile demodata={demodata[5]}/><br/>

                        {/* Adjacent Sibling Selector */}
                        <PandList text={pandlistdata[8]}/>
                        <Demofile demodata={demodata[6]}/><br/>

                        {/* General Sibling Selector */}
                        <PandList text={pandlistdata[9]}/>
                        <Demofile demodata={demodata[7]}/>
                        <Note lines={notedata[1]} /><br/>

                        <Introandbuttons 
                            buttonone={["CSS Intro", "/cssintro"]}
                            buttontwo={["Add CSS", "/cssadd"]}      
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cssselectors
