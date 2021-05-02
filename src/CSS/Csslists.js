import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Introandbuttons from '../Utilities/Introandbuttons'
import Navigationtop from '../Utilities/Navigationtop'
import SideNavigationbar from '../Utilities/SideNavigationbar'

function Csslists({props}) {
    return (
        <div>
            <Header />
            <Navigationtop number={2}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={11}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="CSS Lists"
                            buttonone={["CSS Links", "/csslinks"]}
                            buttontwo={["CSS Display", "/cssdisplay"]}    
                        />

                        <Introandbuttons 
                            buttonone={["CSS Links", "/csslinks"]}
                            buttontwo={["CSS Display", "/cssdisplay"]}     
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Csslists
