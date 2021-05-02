import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Introandbuttons from '../Utilities/Introandbuttons'
import Navigationtop from '../Utilities/Navigationtop'
import SideNavigationbar from '../Utilities/SideNavigationbar'

function Jsintro({props}) {
    return (
        <div className="jsintro">
           <Header />
            <Navigationtop number={3}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={1}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="JavaScript Introduction"
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

export default Jsintro
