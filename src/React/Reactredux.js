import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Introandbuttons from '../Utilities/Introandbuttons'
import Navigationtop from '../Utilities/Navigationtop'
import PandList from '../Utilities/PandList'
import SideNavigationbar from '../Utilities/SideNavigationbar'
import Reduximage from "../Images/Redux.PNG";
import "../HTML/Common.css";
import Userslice from "../Images/UserSlice.PNG";
import Storejs from "../Images/Storejs.PNG";
import Appjs from "../Images/Appjs.PNG";
import fileorder from "../Images/fileorder.PNG";

function Reactredux({props}) {

    const pandlistdata = [
        [
            {"listitems": "Redux is an open-source JavaScript library for managing application state."},
            {"listitems": "React Redux is the official React UI bindings layer for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update state."},
            {"define": "Installation"},
            {"define": "Using create react app ", "listitems": "npx create-react-app my-app --template redux"},
            {"define": "Existing React app ", "listitems": "npm install react-redux"},
            {"define": "Existing React app ", "listitems": "yarn add react-redux"},
        ],
        [
            {"heading": "Important Terms : ", "define": "Dispatcher", "listitems": " - Dispatch an action."},
            {"define": "Reducer", "listitems": " - Listens for action. Functions that take the current state and an action as arguments and return a new state result."},
            {"listitems": "Reducers are not allowed to modify the existing state, instead they must make immutable updates, by coping the existing state and making changes to the copied value."},
            {"define": "Selector", "listitems": " - We use a selector to pull this info from the redux store."},
            {"define": "Actions", "listitems": " - Plain JS objects that have a type field. Action as an event that decribes something that happened in the application."},
        ]
    ]

    return (
        <div>
            <Header />
            <Navigationtop number={7}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={10}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="React Redux"
                            buttonone={["React Context API", "/reactcontextapi"]}    
                        />

                        <PandList text={pandlistdata[0]}/>
                        
                        <PandList text={pandlistdata[1]}/>

                        <img src={Reduximage} alt="React Redux" className="layout__image"/>

                        <p className="question__heading">Step 1 : Create a folder features and create file named UserSlice.js</p>
                        <img src={Userslice} alt="React Redux" className="layout__image"/><br/><br/>
                        <p className="question__heading">Step 2 : Create a folder app and create file named Store.js </p>
                        <img src={Storejs} alt="React Redux" className="layout__image"/><br/><br/>
                        <p className="question__heading">Step 3 : How to use this (App.js) </p>
                        <img src={Appjs} alt="React Redux" className="layout__image"/><br/><br/>
                        <p className="question__heading">Structure :</p>
                        <img src={fileorder} alt="React Redux" className="layout__image"/><br/><br/>

                        <Introandbuttons 
                            buttonone={["React Context API", "/reactcontextapi"]}
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Reactredux
