import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Introandbuttons from '../Utilities/Introandbuttons'
import Navigationtop from '../Utilities/Navigationtop'
import SideNavigationbar from '../Utilities/SideNavigationbar'

function Reactcontextapi({props}) {
    return (
        <div>
            <Header />
            <Navigationtop number={7}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={9}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="React Context API"
                            buttonone={["React Hooks", "/reacthooks"]}
                            buttontwo={["React Redux", "/reactredux"]}    
                        />

                        <Introandbuttons 
                            buttonone={["React Hooks", "/reacthooks"]}
                            buttontwo={["React Redux", "/reactredux"]}       
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Reactcontextapi
