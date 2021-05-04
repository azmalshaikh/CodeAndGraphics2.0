import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Introandbuttons from '../Utilities/Introandbuttons'
import Navigationtop from '../Utilities/Navigationtop'
import PandList from '../Utilities/PandList'
import SideNavigationbar from '../Utilities/SideNavigationbar'
import stateclassbased from "../Images/stateclassbased.PNG"
import "../HTML/Common.css";

function Reactstate({props}) {

    const pandlistdata = [
        [
            {"listitems": "Represents part of an app that can change."},
            {"listitems": "Each component have its own state."},
            {"listitems": "As state changes, component re-renders."},
            {"listitems": "Allows components to create and manage their own data."},
            {"listitems": "Here we will discuss the state in class based components. In the next topic how to use state in functional components will be discussed."},
        ],
        [
            {"listitems": "First write state object in the constructor method."},
            {"listitems": "It can also contain more than one properties (Separate it with ',')."},
            {"listitems": "For changing the value of state object use this.setState() method."},
            {"define": "How to display the property : ", "listitems": "{this.state.propertyname}"},
        ]
    ]

    return (
        <div>
            <Header />
            <Navigationtop number={7}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={7}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="React State"
                            buttonone={["React Props", "/reactprops"]}
                            buttontwo={["React Hooks", "/reacthooks"]}    
                        />

                        <PandList text={pandlistdata[0]} />
                        <PandList text={pandlistdata[1]} />

                        <img src={stateclassbased} alt="React State" className="layout__image"/><br/><br/>

                        <Introandbuttons 
                            buttonone={["React Props", "/reactprops"]}
                            buttontwo={["React Hooks", "/reacthooks"]}    
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Reactstate
