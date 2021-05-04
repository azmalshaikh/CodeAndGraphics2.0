import React, { useEffect, useState }  from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Introandbuttons from '../Utilities/Introandbuttons';
import Navigationtop from '../Utilities/Navigationtop';
import PandList from '../Utilities/PandList';
import SideNavigationbar from '../Utilities/SideNavigationbar';
import "./Common.css";

function Htmlcolors({props}) {

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

    const pandlistdata = [
        [
            {"heading": "1. Color Name :", "listitems": "Color can be specified by using a color name."},
            {"listitems": "For example : Red, Azure, Tomato, Crimson etc."}
        ],
        [
            {"heading": "2. HEX Values :", "listitems": "Hexadecimal color specify components of color."},
            {"listitems": "(#RRGGBB) Where RR represents red, GG represents green, BB represents blue. Hexadecimal values are between OO to ff."},
            {"listitems": "For example : #000000 is white, #ffffff is black and #ff0000 is red."}
        ],
        [
            {"heading": "3. RGB & RGBA Values :", "listitems": "RGB color value specify Red, Green, and Blue light sources."},
            {"listitems": "RGBA color value specify RGB + Alpha(opacity)."},
            {"listitems": "rgb(red, green, blue) and rgba(red, green, blue, alpha)."},
            {"listitems": "Each parameter (r, g, b) defines the intensity of the color with a value between 0 and 255."},
            {"listitems": "For example : rgb(0, 0, 0) is black, rgb(1, 1, 1) is white and rgb(255, 0, 0) is red."},
            {"listitems": "Alpha - Specifies the opacity for a color."},
            {"listitems": "Alpha is a number between 0 (fully transparent) and 1.0 (not transparent at all)."}
        ],
        [
            {"heading": "4. HSL & HSLA Values :", "listitems": "HSL color value specify Hue, Saturation and Lightness."},
            {"listitems": "Hue means color from 0 to 360."},
            {"listitems": "Saturation = Intensity of a color."},
            {"listitems": "Saturation is percentage value between 0 to 100."},
            {"listitems": "Lightness = Light present in the color [ 0% specify no light (black) , 100% sepcify full light (white) ]."},
            {"listitems": "HSLA color value specify HSL + A(alpha)."},
            {"listitems": "Alpha - Specifies the opacity for a color."},
            {"listitems": "Alpha is a number between 0 (fully transparent) and 1.0 (not transparent at all)."}
        ]
    ]

    return (
        <div>
            <Header />
            <Navigationtop text={props} number={1} numbertwo={15} navbar={navbar} activenavbar={setNavbar}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={15}/>

                    <div className="maincontent" id="maincontent">
                        <Introandbuttons 
                            heading="HTML Colors"
                            buttonone={["HTML Semantic Tags", "/htmlsemantictags"]}
                            buttontwo={["HTML Layout", "/htmllayout"]}    
                        />

                        <p className="answer">Specified by writing a Name, HEX value, RGB/RGBA values and HSL/HSLA values.</p>
                        <PandList text={pandlistdata[0]}/>
                        <PandList text={pandlistdata[1]}/>
                        <PandList text={pandlistdata[2]}/>
                        <PandList text={pandlistdata[3]}/>

                        <Introandbuttons 
                            buttonone={["HTML Semantic Tags", "/htmlsemantictags"]}
                            buttontwo={["HTML Layout", "/htmllayout"]}      
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Htmlcolors
