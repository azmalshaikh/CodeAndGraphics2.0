import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Introandbuttons from '../Utilities/Introandbuttons'
import Navigationtop from '../Utilities/Navigationtop'
import SideNavigationbar from '../Utilities/SideNavigationbar'

function Cssoverflow({props}) {
    return (
        <div>
            <Header />
            <Navigationtop number={2}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={14}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="CSS Overflow"
                            buttonone={["CSS Position", "/cssposition"]}
                            buttontwo={["CSS Float and Clear", "/cssfloatclear"]}    
                        />

                        <Introandbuttons 
                            buttonone={["CSS Position", "/cssposition"]}
                            buttontwo={["CSS Float and Clear", "/cssfloatclear"]}    
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cssoverflow
