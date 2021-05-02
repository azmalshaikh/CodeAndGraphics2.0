import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Introandbuttons from '../Utilities/Introandbuttons'
import Navigationtop from '../Utilities/Navigationtop'
import SideNavigationbar from '../Utilities/SideNavigationbar'

function Cssflexbox({props}) {
    return (
        <div>
            <Header />
            <Navigationtop number={2}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={16}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="CSS Flexbox"
                            buttonone={["CSS Float and Clear", "/cssfloatclear"]}
                            buttontwo={["CSS Responsive", "/cssresponsive"]}    
                        />

                        <Introandbuttons 
                            buttonone={["CSS Float and Clear", "/cssfloatclear"]}
                            buttontwo={["CSS Responsive", "/cssresponsive"]}     
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cssflexbox
