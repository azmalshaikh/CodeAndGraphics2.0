import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Introandbuttons from '../Utilities/Introandbuttons'
import Navigationtop from '../Utilities/Navigationtop'
import SideNavigationbar from '../Utilities/SideNavigationbar'

function Reactstate({props}) {
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
