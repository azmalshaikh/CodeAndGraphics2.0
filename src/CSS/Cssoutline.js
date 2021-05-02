import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Introandbuttons from '../Utilities/Introandbuttons'
import Navigationtop from '../Utilities/Navigationtop'
import SideNavigationbar from '../Utilities/SideNavigationbar'

function Cssoutline({props}) {
    return (
        <div>
            <Header />
            <Navigationtop number={2}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={8}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="CSS Outline"
                            buttonone={["CSS Padding", "/csspadding"]}
                            buttontwo={["CSS Text", "/csstext"]}    
                        />

                        <Introandbuttons 
                            buttonone={["CSS Padding", "/csspadding"]}
                            buttontwo={["CSS Text", "/csstext"]}     
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cssoutline
