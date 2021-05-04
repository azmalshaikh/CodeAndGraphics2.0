import React, { useEffect, useState }  from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Introandbuttons from '../Utilities/Introandbuttons';
import Navigationtop from '../Utilities/Navigationtop';
import SideNavigationbar from '../Utilities/SideNavigationbar';
import layout from "../Images/layout.PNG";
import "./Common.css";

function Htmllayout({props}) {

    const [navbar, setNavbar] = useState(false);

    useEffect(() => {
        var a = document.getElementById("maincontent");
        if(navbar === true) {
            a.style.position = "fixed";
            a.style.overflow = "hidden";
        } else {
            a.style.position = "relative";
            a.style.overflow = "auto";
        }
    }, [navbar]);

    return (
        <div>
            <Header />
            <Navigationtop text={props} number={1} numbertwo={16} navbar={navbar} activenavbar={setNavbar}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={16}/>

                    <div className="maincontent" id="maincontent">
                        <Introandbuttons 
                            heading="HTML Layout"
                            buttonone={["HTML Colors", "/htmlcolors"]}
                            buttontwo={["HTML Head", "/htmlhead"]}    
                        />

                        <p className="answer">In website we display contents multiple columns and rows.</p>
                        <p className="answer">To understand this concept better some layout elemens are introduced.</p>

                        <img src={layout} alt="Layout" fluid className="layout__image"/>

                        <Introandbuttons 
                            buttonone={["HTML Colors", "/htmlcolors"]}
                            buttontwo={["HTML Head", "/htmlhead"]}      
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Htmllayout
