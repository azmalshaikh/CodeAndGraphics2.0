import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Introandbuttons from '../Utilities/Introandbuttons'
import Navigationtop from '../Utilities/Navigationtop'
import SideNavigationbar from '../Utilities/SideNavigationbar'

function Cssdisplay({props}) {
    return (
        <div>
            <Header />
            <Navigationtop number={2}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={12}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="CSS Display"
                            buttonone={["CSS Lists", "/csslists"]}
                            buttontwo={["CSS Position", "/cssposition"]}    
                        />

                        <Introandbuttons 
                            buttonone={["CSS Lists", "/csslists"]}
                            buttontwo={["CSS Position", "/cssposition"]}    
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cssdisplay
