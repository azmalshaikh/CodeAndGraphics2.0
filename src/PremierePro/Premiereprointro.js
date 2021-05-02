import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Introandbuttons from '../Utilities/Introandbuttons'
import Navigationtop from '../Utilities/Navigationtop'
import SideNavigationbar from '../Utilities/SideNavigationbar'


function Premiereprointro({props}) {
    return (
        <div>
            <Header />
            <Navigationtop number={5}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={1}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="Premiere Pro Introduction"
                            buttontwo={["", "/"]}    
                        />

                        <Introandbuttons 
                            buttontwo={["", "/"]}    
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Premiereprointro
