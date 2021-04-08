import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Introandbuttons from '../Utilities/Introandbuttons';
import Navigationtop from '../Utilities/Navigationtop';
import SideNavigationbar from '../Utilities/SideNavigationbar';
import "./Common.css";

function HtmlInlineandblock({props}) {
    return (
        <div>
            <Header />
            <Navigationtop text={props} number={1} numbertwo={11}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={11}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="HTML Inline and Block"
                            buttonone={["HTML Forms", "/htmlforms"]}
                            buttontwo={["HTML Id's and Classes", "/htmlisandclass"]}    
                        />

                        <Introandbuttons 
                            buttonone={["HTML Forms", "/htmlforms"]}
                            buttontwo={["HTML Id's and Classes", "/htmlisandclass"]}     
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HtmlInlineandblock
