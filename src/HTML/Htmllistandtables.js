import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Introandbuttons from '../Utilities/Introandbuttons';
import Navigationtop from '../Utilities/Navigationtop';
import SideNavigationbar from '../Utilities/SideNavigationbar';
import "./Common.css";

function Htmllistandtables({props}) {
    return (
        <div>
            <Header />
            <Navigationtop text={props} number={1} numbertwo={9}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={9}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="HTML List and Tables"
                            buttonone={["HTML Image and Anchor", "/htmlimgandanchor"]}
                            buttontwo={["HTML Forms", "/htmlforms"]}    
                        />

                        <Introandbuttons 
                            buttonone={["HTML Image and Anchor", "/htmlimgandanchor"]}
                            buttontwo={["HTML Forms", "/htmlforms"]}      
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Htmllistandtables
