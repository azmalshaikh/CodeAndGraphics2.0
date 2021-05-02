import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Introandbuttons from '../Utilities/Introandbuttons'
import Navigationtop from '../Utilities/Navigationtop'
import SideNavigationbar from '../Utilities/SideNavigationbar'

function Csstransform({props}) {
    return (
        <div>
            <Header />
            <Navigationtop number={2}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={20}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="CSS Transform"
                            buttonone={["CSS Animations", "/cssanimation"]}
                            buttontwo={["CSS Transitions", "/csstransitions"]}    
                        />

                        <Introandbuttons 
                            buttonone={["CSS Animations", "/cssanimation"]}
                            buttontwo={["CSS Transitions", "/csstransitions"]}    
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Csstransform
