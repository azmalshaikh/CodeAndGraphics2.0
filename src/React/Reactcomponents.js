import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Demofile from '../Utilities/Demofile'
import Introandbuttons from '../Utilities/Introandbuttons'
import Navigationtop from '../Utilities/Navigationtop'
import PandList from '../Utilities/PandList'
import SideNavigationbar from '../Utilities/SideNavigationbar'

function Reactcomponents({props}) {

    const pandlistdata = [
        [
            {"listitems": "Component break the UI of your website/app into small chunks and lets you design each of them separately and then finally sew all them together into an app. This is the main reason why react gain so much popularity very soon."},
            {"listitems": "Reusable UI Element."},
            {"listitems": "Javascript functions that accepts input."},
            {"listitems": "Describe how section of UI should appear and function."},
            {"listitems": "Components are of two types -- "},
            {"listitems": "1. Class Based Components"},
            {"listitems": "2. Function Based Components "},
        ],
        [
            {"heading": "1. Class Based Components :", "listitems": "Component has to extend the React.Component."},
            {"listitems": "The render method is required which will return the HTML."},
        ],
        [
            {"heading": "2. Function Based Components :", "listitems": "Easy and Mostly used."},
        ],
    ]

    const demodata = [
        [
            {"heading": "Example : ", "start": "class ", "blue": "Example", "rest": " extends React.Component { "},
            {"simple": "        render() {"},
            {"blue": "                return <h1> Code and Graphics </h1>;"},
            {"simple": "        }"},
            {"simple": "}"}
        ],
        [
            {"heading": "Example : ", "start": "function ", "blue": "Example", "rest": "() { "},
            {"blue": "        return ", "rest": "("},
            {"start": '                 <div ', "blue": 'className="app"', "rest": ">"},
            {"blue": "                         Code and Graphics"},
            {"simple": "                 </div>"},
            {"simple": "        );"},
            {"simple": "}"}
        ],
    ]

    return (
        <div>
            <Header />
            <Navigationtop number={7}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={5}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="React Components"
                            buttonone={["React JSX", "/reactjsx"]}
                            buttontwo={["React Props", "/reactprops"]}    
                        />

                        <PandList text={pandlistdata[0]}/>

                        <PandList text={pandlistdata[1]}/>
                        <Demofile demodata={demodata[0]}/><br/>

                        <PandList text={pandlistdata[2]}/>
                        <Demofile demodata={demodata[1]}/>

                        <Introandbuttons 
                            buttonone={["React JSX", "/reactjsx"]}
                            buttontwo={["React Props", "/reactprops"]}   
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Reactcomponents
