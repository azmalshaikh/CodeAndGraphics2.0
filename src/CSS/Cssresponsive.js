import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Introandbuttons from '../Utilities/Introandbuttons'
import Navigationtop from '../Utilities/Navigationtop'
import SideNavigationbar from '../Utilities/SideNavigationbar'

function Cssresponsive({props}) {
    return (
        <div>
            <Header />
            <Navigationtop number={2}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={17}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="CSS Responsive"
                            buttonone={["CSS Flexbox", "/cssflexbox"]}
                            buttontwo={["CSS Pseudo Elements", "/csspseudo"]}    
                        />

                        <Introandbuttons 
                            buttonone={["CSS Flexbox", "/cssflexbox"]}
                            buttontwo={["CSS Pseudo Elements", "/csspseudo"]}     
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cssresponsive
