import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Introandbuttons from '../Utilities/Introandbuttons';
import Navigationtop from '../Utilities/Navigationtop';
import SideNavigationbar from '../Utilities/SideNavigationbar';
import "./Common.css";

function Htmlhead({props}) {
    return (
        <div>
            <Header />
            <Navigationtop text={props} number={1} numbertwo={17}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={17}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="HTML Head"
                            buttonone={["HTML Layout", "/htmllayout"]}
                            buttontwo={["HTML Figure and FigureCaption", "/htmlfigure"]}    
                        />

                        <Introandbuttons 
                            buttonone={["HTML Layout", "/htmllayout"]}
                            buttontwo={["HTML Figure and FigureCaption", "/htmlfigure"]}     
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Htmlhead
