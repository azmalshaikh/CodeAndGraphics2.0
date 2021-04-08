import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Introandbuttons from '../Utilities/Introandbuttons';
import Navigationtop from '../Utilities/Navigationtop';
import Note from '../Utilities/Note';
import PandList from '../Utilities/PandList';
import SideNavigationbar from '../Utilities/SideNavigationbar';
import "./Common.css";

function Htmltextformat({props}) {

    const pandlistdata = [
        {"heading": "Elements for defining a text with a special look and meaning.", "listitems": "Bold Tag"},
        {"listitems": "Italic Tag"},
        {"listitems": "Underline Tag"},
        {"listitems": "Subscripted"},
        {"listitems": "Superscripted"},
    ]

    const pandlistdatacontent = [
        [
            {"heading": "1. Bold Tag :", "listitems": "Denotations : <b></b> and <strong></strong>"},
            {"listitems": "Location : Inside the body tag"},
            {"listitems": "Usage : To mark the text bold"},
        ],
        [
            {"heading": "2. Italic Tag :", "listitems": "Denotation : <i></i> and <em></em>"},
            {"listitems": "Location : Inside the body tag"},
            {"listitems": "Usage : To mark text in Italic font"},
        ],
        [
            {"heading": "3. Underline Tag :", "listitems": "Denotation : <u></u>"},
            {"listitems": "Location : Inside the body tag"},
            {"listitems": "Usage : To Underline the text"},
        ],
        [
            {"heading": "4. Subscripted :", "listitems": "Denotation : <sub></sub>"},
            {"listitems": "Usage : To write text in subscripted form"},
            {"listitems": "Eg : H2O , Loge2"},
        ],
        [
            {"heading": "5. Superscripted :", "listitems": "Denotation : <sup></sup>"},
            {"listitems": "Usage : To write text in superscripted form"},
            {"listitems": "Eg : ab , Na+ , Cl-"},
        ],
    ]

    const notedata = [
        [
            {"line1": "Explore all these tags in editor yourself. We have discussed detailed theory about them."},
        ],
        [
            {"line1": "We have Discussed Heading , Paragraph , Text Formatting (Bold, Italic, Underline, Subscripted, Superscriptes) so far..."},
            {"line1": "Hope! You are doing great"}
        ]
    ]

    return (
        <div>
            <Header />
            <Navigationtop text={props} number={1} numbertwo={6}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={6}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="HTML Text Formatting"
                            buttonone={["HTML Heading and Paragraph", "/htmlhandp"]}
                            buttontwo={["HTML Attributes", "/htmlattributes"]}    
                        />

                        <PandList text={pandlistdata}/>

                        {pandlistdatacontent.map((pandlistdata) => {
                            return <PandList text={pandlistdata}/>
                        })}

                        {notedata.map((notedata) => {
                            return <Note lines={notedata}/>
                        })}

                        <Introandbuttons 
                            buttonone={["HTML Heading and Paragraph", "/htmlhandp"]}
                            buttontwo={["HTML Attributes", "/htmlattributes"]}      
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Htmltextformat
