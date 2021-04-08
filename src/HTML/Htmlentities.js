import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Introandbuttons from '../Utilities/Introandbuttons';
import Navigationtop from '../Utilities/Navigationtop';
import SideNavigationbar from '../Utilities/SideNavigationbar';
import "./Common.css";

function Htmlentities({props}) {
    return (
        <div>
            <Header />
            <Navigationtop text={props} number={1} numbertwo={13}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={13}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="HTML Entities"
                            buttonone={["HTML Id's and Classes", "/htmlisandclass"]}
                            buttontwo={["HTML Semantic Tags", "/htmlsemantictags"]}    
                        />

                        <Introandbuttons 
                            buttonone={["HTML Id's and Classes", "/htmlisandclass"]}
                            buttontwo={["HTML Semantic Tags", "/htmlsemantictags"]}     
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Htmlentities
