import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Introandbuttons from '../Utilities/Introandbuttons'
import Navigationtop from '../Utilities/Navigationtop'
import SideNavigationbar from '../Utilities/SideNavigationbar'

function Reactcomponents({props}) {
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
