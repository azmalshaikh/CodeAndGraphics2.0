import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Introandbuttons from '../Utilities/Introandbuttons'
import Navigationtop from '../Utilities/Navigationtop'
import SideNavigationbar from '../Utilities/SideNavigationbar'

function Cssanimations({props}) {
    return (
        <div>
            <Header />
            <Navigationtop number={2}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={19}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="CSS Animations"
                            buttonone={["CSS Pseudo Elements", "/csspseudo"]}
                            buttontwo={["CSS Transform", "/csstransform"]}    
                        />

                        <Introandbuttons 
                            buttonone={["CSS Pseudo Elements", "/csspseudo"]}
                            buttontwo={["CSS Transform", "/csstransform"]}      
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cssanimations
