import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Introandbuttons from '../Utilities/Introandbuttons'
import Navigationtop from '../Utilities/Navigationtop'
import SideNavigationbar from '../Utilities/SideNavigationbar'

function Cssposition({props}) {
    return (
        <div>
            <Header />
            <Navigationtop number={2}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={13}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="CSS Position"
                            buttonone={["CSS Display", "/cssdisplay"]}
                            buttontwo={["CSS Overflow", "/cssoverflow"]}    
                        />

                        <Introandbuttons 
                            buttonone={["CSS Display", "/cssdisplay"]}
                            buttontwo={["CSS Overflow", "/cssoverflow"]}    
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cssposition
