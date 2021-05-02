import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Introandbuttons from '../Utilities/Introandbuttons'
import Navigationtop from '../Utilities/Navigationtop'
import SideNavigationbar from '../Utilities/SideNavigationbar'

function Reacthooks({props}) {
    return (
        <div>
            <Header />
            <Navigationtop number={7}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={8}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="React Hooks"
                            buttonone={["React State", "/reactstate"]}
                            buttontwo={["React Context API", "/reactcontextapi"]}    
                        />

                        <Introandbuttons 
                            buttonone={["React State", "/reactstate"]}
                            buttontwo={["React Context API", "/reactcontextapi"]}    
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Reacthooks
