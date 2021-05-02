import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Demofile from '../Utilities/Demofile'
import Introandbuttons from '../Utilities/Introandbuttons'
import Navigationtop from '../Utilities/Navigationtop'
import PandList from '../Utilities/PandList'
import SideNavigationbar from '../Utilities/SideNavigationbar'

function Cssintro({props}) {

    const pandlistdata = [
        [
            {"heading": "KeyPoints", "listitems": "Used to style webpages."},
            {"listitems": "Providing webpage a rich and attractive look."},
            {"listitems": "File Extension is .css"},
        ],
        [
            {"heading": "Why we use CSS?", "listitems": "1. Add colors to webpage."},
            {"listitems": "2. Change Shape, give border to your HTML elements."},
            {"listitems": "3. Position your elements (Change the layout)."},
            {"listitems": "4. Animate your HTML elements."},
            {"listitems": "5. CSS Saves a lot of work (You will understand this later)."},
        ],
        [
            {"listitems": "Selectors (Where to do): Used to select the HTML element to be styled."},
            {"listitems": "Declaration (What to do): Set of instructions which tell the browser how to style the selected HTML element."},
            {"listitems": 'Now in this case "p" is Selector and "font-size : 24px" is Declaration.'},
            {"listitems": "--- That's enough for Introduction ---"},
        ],
    ]

    const demodata = [
        {"heading": "Syntax : :", "simple": "p {"},
        {"blue": '       font-size : 24px; '},
        {"simple": "}"},
    ]

    return (
        <div className="cssintro">
            <Header />
            <Navigationtop number={2}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={1}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="CSS Introduction"
                            buttontwo={["CSS Selectors", "/cssselectors"]}    
                        />

                        <PandList text={pandlistdata[0]}/>
                        <PandList text={pandlistdata[1]}/>

                        <Demofile demodata={demodata}/>
                        <PandList text={pandlistdata[2]} />

                        <Introandbuttons 
                            buttontwo={["CSS Selectors", "/cssselectors"]}     
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cssintro
