import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Introandbuttons from '../Utilities/Introandbuttons'
import Navigationtop from '../Utilities/Navigationtop'
import PandList from '../Utilities/PandList'
import SideNavigationbar from '../Utilities/SideNavigationbar'
import useStateHook from "../Images/useStateHook.PNG"
import useEffectHook from "../Images/useeffecthook.PNG"

function Reacthooks({props}) {

    const pandlistdata = [
        [
            {"listitems": "Hooks are new addition in React."},
            {"listitems": "Hooks are functions that allows us to use state, life-cycle methods and other react features in functional componets without writing class components."},
            // {"listitems": ""},
        ],
        [
            {"heading": "Advantages : ", "listitems": "Simple Functions"},
            {"listitems": "Easy to implement"},
            {"listitems": "More lightweight than classes."},
            {"listitems": "Easy to test"},
            {"listitems": "Build custom Hooks and many more..."}
        ],
        [
            {"heading": "The useState Hook : ", "listitems": "To add functionality inside a functional component."},
            {"listitems": "useState() helps us to create state variables inside a functional component."},
            {"define": "What useState() returns ", "listitems": "-- It returns a pair of values."}
        ],
        [
            {"heading": "The useEffect Hook : ", "listitems": "Same purpose as componentDidMount, componentDidUpdate, componentWillUnmount"},
            {"listitems": "When you call useEffect, you're telling React to run your effect function after flushing changes to the DOM."},
            {"listitems": "Effects are declared inside component so they have access to its props and state."}
        ]
    ]

    return (
        <div>
            <Header />
            <Navigationtop number={7}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={8}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="React Hooks"
                            buttonone={["React State", "/reactstate"]}
                            buttontwo={["React Context API", "/reactcontextapi"]}    
                        />

                        <PandList text={pandlistdata[0]}/>
                        <PandList text={pandlistdata[1]}/><br/>

                        <PandList text={pandlistdata[2]}/>
                        <img src={useStateHook} alt="useState" className="layout__image"/><br/><br/><br/>

                        <PandList text={pandlistdata[3]}/>
                        <img src={useEffectHook} alt="useState" className="layout__image"/><br/><br/>

                        <Introandbuttons 
                            buttonone={["React State", "/reactstate"]}
                            buttontwo={["React Context API", "/reactcontextapi"]}    
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Reacthooks
