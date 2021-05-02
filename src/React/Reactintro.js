import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Introandbuttons from '../Utilities/Introandbuttons'
import Navigationtop from '../Utilities/Navigationtop'
import PandList from '../Utilities/PandList'
import SideNavigationbar from '../Utilities/SideNavigationbar'
import ReactImage from "../Images/reactdefault.PNG";
import "../HTML/Common.css";


function Reactintro({props}) {

    const pandlistdata = [
        [
            {"listitems": "React is a JS library created by Facebook software engineer Jorden Walke."},
            {"listitems": "React is a tool for building UI components using declarative code."},
            {"listitems": "React is used to build powerful web apps which runs on browser."},
            {"listitems": "ReactJS is concerned with the components that utilizes the expressiveness of JS with a HTML - like template."},
            {"define": "JS + HTML = React"},
        ],
        [
            {"heading": "React Working : ", "listitems": "It uses Virtual DOM ( where it does all the necessary manipulating changes and then only changes what's needs to be changed int borwser DOM)."},
        ],
        [
            {"heading": "Create React App :", "listitems": "Prerequisite - NPM and Node.js Installed"},
            {"listitems": "Run the following command : "},
            {"define": "- npm install -g create-react-app ", "listitems": "(This one will install create-react-app in your system. You don't have to run it again anytime)"},
            {"define": "npx create-react-app firstapp ", "listitems": "(firstapp will be you application name.)"},
            {"listitems": "Run the React Application"},
            {"define": "cd firstapp"},
            {"define": "npm start"},
            {"listitems": "That's it (Browser window will pop up having address 'localhost:3000' )"},
            {"listitems": "If you get the below screen. You are Ready to go..."}
        ],
        [
            {"heading": "React Clean Up Process : ", "listitems": "Delete App.test.js"},
            {"listitems": "Delete logo.svg"},
            {"listitems": "Delete SetupTests.js"},
            {"listitems": "Delete the contents in App.js(All the content in div element, logo.svg import), App.css"},
        ]
    ]

    return (
        <div>
            <Header />
            <Navigationtop number={7}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={1}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="React Introduction"
                            buttontwo={["React ES6", "/reactes"]}    
                        />
                        <PandList text={pandlistdata[0]}/><br/>
                        <PandList text={pandlistdata[1]}/><br/>
                        <PandList text={pandlistdata[2]}/>

                        <img src={ReactImage} alt="React Defualt app" className="layout__image"/><br/><br/><br/>
                        <PandList text={pandlistdata[3]}/>

                        <Introandbuttons 
                            buttontwo={["React ES6", "/reactes"]}    
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Reactintro
