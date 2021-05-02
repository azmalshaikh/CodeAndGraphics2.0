import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Introandbuttons from '../Utilities/Introandbuttons'
import Navigationtop from '../Utilities/Navigationtop'
import SideNavigationbar from '../Utilities/SideNavigationbar'

function Csstransitions({props}) {
    return (
        <div>
            <Header />
            <Navigationtop number={2}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={21}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="CSS Transition"
                            buttonone={["CSS Transform", "/csstransform"]}
                            buttontwo={["CSS Grids", "/cssGrids"]}    
                        />

                        <Introandbuttons 
                            buttonone={["CSS Transform", "/csstransform"]}
                            buttontwo={["CSS Grids", "/cssGrids"]}    
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Csstransitions
