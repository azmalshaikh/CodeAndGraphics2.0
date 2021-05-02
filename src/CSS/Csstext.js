import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Introandbuttons from '../Utilities/Introandbuttons'
import Navigationtop from '../Utilities/Navigationtop'
import SideNavigationbar from '../Utilities/SideNavigationbar'

function Csstext({props}) {
    return (
        <div>
            <Header />
            <Navigationtop number={2}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={9}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="CSS Text"
                            buttonone={["CSS Outline", "/cssoutline"]}
                            buttontwo={["CSS Links", "/csslinks"]}    
                        />

                        <Introandbuttons 
                            buttonone={["CSS Outline", "/cssoutline"]}
                            buttontwo={["CSS Links", "/csslinks"]}    
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Csstext
