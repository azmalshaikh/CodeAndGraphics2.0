import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Introandbuttons from '../Utilities/Introandbuttons'
import Navigationtop from '../Utilities/Navigationtop'
import SideNavigationbar from '../Utilities/SideNavigationbar'

function Cssfloat({props}) {
    return (
        <div>
            <Header />
            <Navigationtop number={2}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={15}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="CSS Float and Clear"
                            buttonone={["CSS Overflow", "/cssoverflow"]}
                            buttontwo={["CSS Flexbox", "/cssflexbox"]}    
                        />

                        <Introandbuttons 
                            buttonone={["CSS Overflow", "/cssoverflow"]}
                            buttontwo={["CSS Flexbox", "/cssflexbox"]}     
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cssfloat
