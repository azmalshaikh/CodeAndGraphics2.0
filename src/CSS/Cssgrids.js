import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Introandbuttons from '../Utilities/Introandbuttons'
import Navigationtop from '../Utilities/Navigationtop'
import SideNavigationbar from '../Utilities/SideNavigationbar'

function Cssgrids({props}) {
    return (
        <div>
            <Header />
            <Navigationtop number={2}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={22}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="CSS Grids"
                            buttonone={["CSS Transitions", "/csstransitions"]}   
                        />

                        <Introandbuttons 
                            buttonone={["CSS Transitions", "/csstransitions"]}    
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cssgrids
