import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Demofile from '../Utilities/Demofile'
import Introandbuttons from '../Utilities/Introandbuttons'
import Navigationtop from '../Utilities/Navigationtop'
import PandList from '../Utilities/PandList'
import SideNavigationbar from '../Utilities/SideNavigationbar'

function Reactprops({props}) {

    const pandlistdata = [
        [
            {"listitems": "Props and State are two Fundamentals of React. In the next section you will learn State."},
            {"listitems": "Arguments passed into React Componets."},
            {"listitems": "Passes to componets via HTML Attributes"},
            {"listitems": "Props stands for properties, they allow us to pass data into a component and display it accordingly."},
            {"listitems": "Props are read only you cannot change the data."},
        ],
        [
            {"listitems": "If you have variable, object to send, then put them inside curly brackets."},
            {"define": "<Example text={name} />"}
        ]
    ]

    const demodata = [
        [
            {"heading": "Example : ", "start": "function ", "blue": "Example", "rest": "(props) { "},
            {"blue": "        return ", "rest": "("},
            {"start": '                 <div ', "blue": 'className="app"', "rest": ">"},
            {"blue": "                         {props.text};"},
            {"simple": "                 </div>"},
            {"simple": "        );"},
            {"simple": "}"}
        ],
        [
            {"heading": "Example : ", "start": "<Example ", "blue": 'text="Code and Graphics"', "rest": " />"}
        ],
        [
            {"heading": "Example : ", "start": "function ", "blue": "Example", "rest": "({text, number}) { "},
            {"blue": "        return ", "rest": "("},
            {"start": '                 <div ', "blue": 'className="app"', "rest": ">"},
            {"blue": "                         Text is {text} and counts is {number};"},
            {"simple": "                 </div>"},
            {"simple": "        );"},
            {"simple": "}"}
        ],
        [
            {"heading": "Example : ", "start": "<Example ", "blue": 'text="Code and Graphics" number={5}', "rest": " />"}
        ],
    ]

    return (
        <div>
            <Header />
            <Navigationtop number={7}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={6}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="React Props"
                            buttonone={["React Components", "/reactcomponents"]}
                            buttontwo={["React State", "/reactstate"]}    
                        />

                        <PandList text={pandlistdata[0]}/>
                        <Demofile demodata={demodata[0]}/>
                        <Demofile demodata={demodata[1]}/><br/>

                        <PandList text={pandlistdata[1]}/>

                        <Demofile demodata={demodata[2]}/>
                        <Demofile demodata={demodata[3]}/><br/>

                        <Introandbuttons 
                            buttonone={["React Components", "/reactcomponents"]}
                            buttontwo={["React State", "/reactstate"]}  
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Reactprops
