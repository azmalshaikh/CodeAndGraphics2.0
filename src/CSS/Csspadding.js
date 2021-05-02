import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Introandbuttons from '../Utilities/Introandbuttons'
import Navigationtop from '../Utilities/Navigationtop'
import SideNavigationbar from '../Utilities/SideNavigationbar'

function Csspadding({props}) {
    return (
        <div>
            <Header />
            <Navigationtop number={2}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={7}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="CSS Padding"
                            buttonone={["CSS Margin", "/cssmargin"]}
                            buttontwo={["CSS Outline", "/cssoutline"]}    
                        />

                        <Introandbuttons 
                            buttonone={["CSS Margin", "/cssmargin"]}
                            buttontwo={["CSS Outline", "/cssoutline"]}       
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Csspadding
