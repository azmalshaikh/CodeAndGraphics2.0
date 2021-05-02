import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Introandbuttons from '../Utilities/Introandbuttons'
import Navigationtop from '../Utilities/Navigationtop'
import SideNavigationbar from '../Utilities/SideNavigationbar'

function Csspseudo({props}) {
    return (
        <div>
            <Header />
            <Navigationtop number={2}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={18}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="CSS Pseudo Elements"
                            buttonone={["CSS Responsive", "/cssresponsive"]}
                            buttontwo={["CSS Animations", "/cssanimation"]}    
                        />

                        <Introandbuttons 
                            buttonone={["CSS Responsive", "/cssresponsive"]}
                            buttontwo={["CSS Animations", "/cssanimation"]}     
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Csspseudo
