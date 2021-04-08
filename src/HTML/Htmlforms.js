import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Introandbuttons from '../Utilities/Introandbuttons';
import Navigationtop from '../Utilities/Navigationtop';
import SideNavigationbar from '../Utilities/SideNavigationbar';
import "./Common.css";

function Htmlforms({props}) {
    return (
        <div>
            <Header />
            <Navigationtop text={props} number={1} numbertwo={10}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={10}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="HTML Forms"
                            buttonone={["HTML List and Tables", "/htmllistandtables"]}
                            buttontwo={["HTML Inline and Block", "/htmlinlineandblock"]}    
                        />

                        <Introandbuttons 
                            buttonone={["HTML List and Tables", "/htmllistandtables"]}
                            buttontwo={["HTML Inline and Block", "/htmlinlineandblock"]}      
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Htmlforms
