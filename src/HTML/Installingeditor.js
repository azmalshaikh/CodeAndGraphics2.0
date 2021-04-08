import React from 'react';
import Header from '../Header';
import Introandbuttons from '../Utilities/Introandbuttons';
import Navigationtop from '../Utilities/Navigationtop';
import PandList from '../Utilities/PandList';
import SideNavigationbar from '../Utilities/SideNavigationbar';
import "./Common.css";
import "../Utilities/Introandbuttons.css";
import Footer from '../Footer';

function Installingeditor({props}) {
    
    const pandlist = [
        {"heading": "VisualStudio Code:", "listitems": "A modern, open source text editor that understands web design."},
        {"define" : "Main Features", "listitems": " : IntelliSense, Live Preview, Run and Debug, Live Sharing, Built in Git."},
        {"define": "Popular Extensions", "listitems": " : Beautify, Bracket Pair Colorizer, Code Runner, ES7 React, Live Server, Powershell, Code Snippets."}
    ]

    return (
        <div>
            <Header />
            <Navigationtop text={props} number={1} numbertwo={2}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={2}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="Installing Editor"
                            buttonone={["HTML Introduction", "/htmlintro"]}
                            buttontwo={["HTML Structure", "/htmlstructure"]}   
                        />

                        <PandList text={pandlist}/>

                        <p className="answer">Click the link below for Guidance of VisualStudioCode.</p>
                        <p className="buttons">
                            <p className="buttonstyling">
                                <a href="https://code.visualstudio.com/" className="button__link" target="_blank" rel="noreferrer">VS Code</a>
                            </p>
                        </p>

                        <Introandbuttons 
                            buttonone={["HTML Introduction", "/htmlintro"]}
                            buttontwo={["HTML Structure", "/htmlstructure"]}
                        />

                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Installingeditor
