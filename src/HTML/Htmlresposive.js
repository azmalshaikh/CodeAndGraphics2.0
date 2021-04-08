import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Introandbuttons from '../Utilities/Introandbuttons';
import Navigationtop from '../Utilities/Navigationtop';
import SideNavigationbar from '../Utilities/SideNavigationbar';
import "./Common.css";

function Htmlresposive({props}) {
    return (
        <div>
            <Header />
            <Navigationtop text={props} number={1} numbertwo={19}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={19}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="HTML Responsive"
                            buttonone={["HTML Figure and FigureCaption", "/htmlfigure"]}   
                        />

                        <Introandbuttons 
                            buttonone={["HTML Figure and FigureCaption", "/htmlfigure"]}     
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Htmlresposive
