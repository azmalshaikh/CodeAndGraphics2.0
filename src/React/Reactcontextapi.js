import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Introandbuttons from '../Utilities/Introandbuttons'
import Navigationtop from '../Utilities/Navigationtop'
import PandList from '../Utilities/PandList'
import SideNavigationbar from '../Utilities/SideNavigationbar'
import Reduximage from "../Images/Redux.PNG";
import Stateprov from "../Images/StateProvider.PNG";
import Reducerjs from "../Images/Reducerjs.PNG";
import Usethis from "../Images/Usethis.PNG";
import Wrapapp from "../Images/Wrapapp.PNG";
import "../HTML/Common.css";

function Reactcontextapi({props}) {

    const pandlistdata = [
        {"heading": "Important Terms : ", "define": "Dispatcher", "listitems": " - Dispatch an action."},
        {"define": "Reducer", "listitems": " - Listens for action. Functions that take the current state and an action as arguments and return a new state result."},
        {"listitems": "Reducers are not allowed to modify the existing state, instead they must make immutable updates, by coping the existing state and making changes to the copied value."},
        {"define": "Selector", "listitems": " - We use a selector to pull this info from the redux store."},
        {"define": "Actions", "listitems": " - Plain JS objects that have a type field. Action as an event that decribes something that happened in the application."},
    ]

    return (
        <div>
            <Header />
            <Navigationtop number={7}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={9}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="React Context API"
                            buttonone={["React Hooks", "/reacthooks"]}
                            buttontwo={["React Redux", "/reactredux"]}    
                        />

                        <PandList text={pandlistdata}/>

                        <img src={Reduximage} alt="React Context API" className="layout__image"/><br/><br/>

                        <p className="question__heading">Step 1 : Create file StateProvider.js </p>
                        <img src={Stateprov} alt="React Context API" className="layout__image"/><br/><br/>
                        <p className="question__heading">Step 2 : Create file Reducer.js </p>
                        <img src={Reducerjs} alt="React Context API" className="layout__image"/><br/><br/>
                        <p className="question__heading">Step 3 : Wrap your app within StateProvider </p>
                        <img src={Wrapapp} alt="React Context API" className="layout__image"/><br/><br/>
                        <p className="question__heading">Step 4 : How to use this </p>
                        <img src={Usethis} alt="React Context API" className="layout__image"/><br/><br/>

                        <Introandbuttons 
                            buttonone={["React Hooks", "/reacthooks"]}
                            buttontwo={["React Redux", "/reactredux"]}       
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Reactcontextapi
