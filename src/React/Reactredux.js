import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Introandbuttons from '../Utilities/Introandbuttons'
import Navigationtop from '../Utilities/Navigationtop'
import SideNavigationbar from '../Utilities/SideNavigationbar'

function Reactredux({props}) {
    return (
        <div>
            <Header />
            <Navigationtop number={7}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={10}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="React Redux"
                            buttonone={["React Context API", "/reactcontextapi"]}    
                        />

                        <Introandbuttons 
                            buttonone={["React Context API", "/reactcontextapi"]}
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Reactredux
