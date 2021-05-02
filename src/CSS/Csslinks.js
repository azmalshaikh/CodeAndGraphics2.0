import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Introandbuttons from '../Utilities/Introandbuttons'
import Navigationtop from '../Utilities/Navigationtop'
import SideNavigationbar from '../Utilities/SideNavigationbar'

function Csslinks({props}) {
    return (
        <div>
            <Header />
            <Navigationtop number={2}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={10}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="CSS Links"
                            buttonone={["CSS Text", "/csstext"]}
                            buttontwo={["CSS Lists", "/csslists"]}    
                        />

                        <Introandbuttons 
                            buttonone={["CSS Text", "/csstext"]}
                            buttontwo={["CSS Lists", "/csslists"]}    
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Csslinks
