import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Introandbuttons from '../Utilities/Introandbuttons'
import Navigationtop from '../Utilities/Navigationtop'
import SideNavigationbar from '../Utilities/SideNavigationbar'

function Reactprops({props}) {
    return (
        <div>
            <Header />
            <Navigationtop number={7}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={6}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="React Props"
                            buttonone={["React Components", "/reactcomponents"]}
                            buttontwo={["React State", "/reactstate"]}    
                        />

                        <Introandbuttons 
                            buttonone={["React Components", "/reactcomponents"]}
                            buttontwo={["React State", "/reactstate"]}  
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Reactprops
