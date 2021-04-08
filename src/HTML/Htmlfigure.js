import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Introandbuttons from '../Utilities/Introandbuttons';
import Navigationtop from '../Utilities/Navigationtop';
import SideNavigationbar from '../Utilities/SideNavigationbar';
import "./Common.css";

function Htmlfigure({props}) {
    return (
        <div>
            <Header />
            <Navigationtop text={props} number={1} numbertwo={18}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={18}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="HTML Figure and FigureCaption"
                            buttonone={["HTML Head", "/htmlhead"]}
                            buttontwo={["HTML Responsive", "/htmlresponsive"]}    
                        />

                        <Introandbuttons 
                            buttonone={["HTML Head", "/htmlhead"]}
                            buttontwo={["HTML Responsive", "/htmlresponsive"]}     
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Htmlfigure
