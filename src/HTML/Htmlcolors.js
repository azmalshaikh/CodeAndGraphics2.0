import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Introandbuttons from '../Utilities/Introandbuttons';
import Navigationtop from '../Utilities/Navigationtop';
import SideNavigationbar from '../Utilities/SideNavigationbar';
import "./Common.css";

function Htmlcolors({props}) {
    return (
        <div>
            <Header />
            <Navigationtop text={props} number={1} numbertwo={15}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={15}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="HTML Colors"
                            buttonone={["HTML Semantic Tags", "/htmlsemantictags"]}
                            buttontwo={["HTML Layout", "/htmllayout"]}    
                        />

                        <Introandbuttons 
                            buttonone={["HTML Semantic Tags", "/htmlsemantictags"]}
                            buttontwo={["HTML Layout", "/htmllayout"]}      
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Htmlcolors
