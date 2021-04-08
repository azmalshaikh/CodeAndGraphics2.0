import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Introandbuttons from '../Utilities/Introandbuttons';
import Navigationtop from '../Utilities/Navigationtop';
import SideNavigationbar from '../Utilities/SideNavigationbar';
import "./Common.css";

function Htmlidandclass({props}) {
    return (
        <div>
            <Header />
            <Navigationtop text={props} number={1} numbertwo={12}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={12}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="HTML Id's and Classes"
                            buttonone={["HTML Inline and Block", "/htmlinlineandblock"]}
                            buttontwo={["HTML Entities", "/htmlentities"]}    
                        />

                        <Introandbuttons 
                            buttonone={["HTML Inline and Block", "/htmlinlineandblock"]}
                            buttontwo={["HTML Entities", "/htmlentities"]}         
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Htmlidandclass
