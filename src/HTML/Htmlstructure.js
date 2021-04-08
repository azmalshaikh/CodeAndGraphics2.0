import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Demofile from '../Utilities/Demofile';
import Introandbuttons from '../Utilities/Introandbuttons';
import Navigationtop from '../Utilities/Navigationtop';
import PandList from '../Utilities/PandList';
import SideNavigationbar from '../Utilities/SideNavigationbar';
import "./Common.css";

function Htmlstructure({props}) {

    const demodata = [
        {"heading": "HTML File :","simple" : "<!DOCTYPE html>"},
        {"simple": "<html>"},
        {"simple": "<head>"},
        {"simple": "        <title> Webpage </title>"},
        {"simple": "</head>"},
        {"simple": "<body>"},
        {"simple": "        This is my first webpage"},
        {"simple": "</body>"},
        {"simple": "</html>"},
    ]

    const pandlist = [
        {"listitems": "HTML Document must begin with the Document type declaration : <!DOCTYPE html>"},
        {"listitems": "Don't Worry if you don't understand the tags we used."}
    ]

    const pandlistbreif = [
        [
            {"heading" : "1. <!DOCTYPE html>", "listitems": "Represents the document type, and helps the browser in which version of HTML the page has been coded."},
            {"listitems": "1st line of HTML document."},
            {"listitems": "Not case sensitive."}
        ],

        [
            {"heading" : "2. <html> & </html>", "listitems": "Head of the Family."},
            {"listitems": "An HTML file starts with the html tag and end with the closing html tag."},
            {"listitems": "Now the html tag is followed by head tag."}
        ],

        [
            {"heading": "3. <head> & </head>", "listitems": "Special one and content written here is not displayed on webpages."},
            {"listitems": "In HTML head tag is container for all head elements like as title, style, meta, link, script and base."},
            {"listitems": "Don't worry we'll discuss later all these tags in detail."},
            {"listitems": "Now the head tag is followed by body tag."},
        ],

        [
            {"heading": "4. <body> & </body>", "listitems": "All the actual content that is visible on webpage is written."},
            {"listitems": "The body tags contains many types of HTML tags like headings, paragraph, image and many more we will learn about these in details."},
        ]
    ]

    return (
        <div>
            <Header />
            <Navigationtop text={props} number={1} numbertwo={3}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={3}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="HTML Structure"
                            buttonone={["Installing Editor", "/installingeditor"]}
                            buttontwo={["HTML Elements", "/htmlelements"]}    
                        />

                        <Demofile demodata={demodata}/>
                        <PandList text={pandlist}/>
                        <p className="question__heading">Brief Description --</p>
                        
                        {pandlistbreif.map((arraytext) => {
                            return <PandList text={arraytext}/>
                        })}

                        <Introandbuttons 
                            buttonone={["Installing Editor", "/installingeditor"]}
                            buttontwo={["HTML Elements", "/htmlelements"]}      
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Htmlstructure
