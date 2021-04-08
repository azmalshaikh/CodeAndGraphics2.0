import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Introandbuttons from '../Utilities/Introandbuttons';
import Navigationtop from '../Utilities/Navigationtop';
import SideNavigationbar from '../Utilities/SideNavigationbar';
import "./Common.css";

function Htmlsemantictags({props}) {
    return (
        <div>
            <Header />
            <Navigationtop text={props} number={1} numbertwo={14}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={14}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="HTML Semantic Tags"
                            buttonone={["HTML Entities", "/htmlentities"]}
                            buttontwo={["HTML Colors", "/htmlcolors"]}    
                        />

                        <Introandbuttons 
                            buttonone={["HTML Entities", "/htmlentities"]}
                            buttontwo={["HTML Colors", "/htmlcolors"]}     
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Htmlsemantictags
