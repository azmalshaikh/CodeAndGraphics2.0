import React, { useEffect, useState }  from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Demofile from '../Utilities/Demofile';
import Introandbuttons from '../Utilities/Introandbuttons';
import Navigationtop from '../Utilities/Navigationtop';
import Note from '../Utilities/Note';
import PandList from '../Utilities/PandList';
import SideNavigationbar from '../Utilities/SideNavigationbar';
import TableContents from '../Utilities/TableContents';
import "./Common.css";

function Htmlforms({props}) {

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
            {"listitems": "Usage : Used to collect user input."},
            {"listitems": "Various elements namely form, input, label, select, textarea etc"},
        ],
        [
            {"heading": "1. <form> Element :", "listitems": "HTML form element defines a form that is used to collect user input."},
            {"listitems": "The form element itsef is not visible."}
        ],
        [
            {"heading": "2. <input> Element :", "listitems": "Important form element."},
            {"listitems": "Displayed in several ways, depending upon type attribute"}
        ],
        [
            {"heading": "Text Fields -", "listitems": '<input type="text"> defines a single-line input field for text input.'},
        ],
        [
            {"heading": "Label element :", "listitems": "Defines a label for form elements."},
            {"listitems": "Help users who have difficulty on clicking very small regions (such as radio buttons) - because when the user clicks the text within the <label> element, it toggles the radio button/checkbox."},
            {"listitems": "The for attribute of label tag should be equal to id attribute of input tag to functionalize the above point."}
        ],
        [
            {"heading": "Radio Buttons -", "listitems": '<input type="radio"> Defines a radio button (for selecting one of many choices)'},
        ],
        [
            {"heading": "Submit Buttons -", "listitems": '<input type="submit" value="submit"> defines a button for submitting the form data.'},
            {"listitems": "Form data is handled by form-handler (which is specified in the form's action attribute)."},
            {"listitems": "The action attribute defines the action to be performed when the form is submitted."},
            {"listitems": 'n the example below, the form data is sent to a page on the server called "xyz_action.php". This page contains a server-side script that handles the form data.'},
        ],
    ]

    const demodata = [
        [
            {"heading": "Example : ", "simple": "<form>"},
            {"simple": "        //code"},
            {"simple": "</form>"},
        ],
        [
            {"heading": "Example :", "simple": "<form>"},
            {"start": '        <label ',"blue": ' for="fname"', "rest": ">First name : </label> <br>"},
            {"start": '        <input ',"blue": ' type="text" id="fname" name="fname"', "rest": "/><br>"},
            {"start": '        <label ',"blue": ' for="lname"', "rest": ">Last name : </label> <br>"},
            {"start": '        <input ',"blue": ' type="text" id="lname" name="lname"', "rest": "/>"},
            {"simple": "</form>"},
        ],
        [
            {"heading": "Example :", "simple": "<form>"},
            {"start": '        <input ',"blue": ' type="radio" id="male" name="gender" value="male"', "rest": "/>"},
            {"start": '        <label ',"blue": ' for="male"', "rest": ">Male </label> <br>"},
            {"start": '        <input ',"blue": ' type="radio" id="female" name="gender" value="female"', "rest": "/>"},
            {"start": '        <label ',"blue": ' for="female"', "rest": ">Female </label> <br>"},
            {"simple": "</form>"},
        ],
        [
            {"heading": "Example : ", "start": '<form', "blue": ' action="xyz_action.php"', "rest": ">"},
            {"start": '       <input ', "blue": 'type="submit" value="Submit"', "rest": "/>"},
            {"simple": "</form>"},
        ],
    ]

    const tabledata = [
        ["", "Type Attribute", "Discription/Meaning"],
        ["1", 'type="text"', "One-line textt input field"],
        ["2", 'type="radio"', "Radio button(for selecting one of many choices)"],
        ["3", 'type="submit"', "Submit button (for submitting the form)"],
    ]

    const notedata = [
        {"line1": "The default width of an input field is 20 characters."},
    ]

    return (
        <div>
            <Header />
            <Navigationtop text={props} number={1} numbertwo={10} navbar={navbar} activenavbar={setNavbar}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={10}/>

                    <div className="maincontent" id="maincontent">
                        <Introandbuttons 
                            heading="HTML Forms"
                            buttonone={["HTML List and Tables", "/htmllistandtables"]}
                            buttontwo={["HTML Inline and Block", "/htmlinlineandblock"]}    
                        />

                        <PandList text={pandlistdata[0]}/>

                        {/* Form Element */}
                        <PandList text={pandlistdata[1]}/>
                        <Demofile demodata={demodata[0]}/><br/>

                        {/* Input Element */}
                        <PandList text={pandlistdata[2]}/>
                        <TableContents text={tabledata}/><br/>

                        {/* Text Fields */}
                        <PandList text={pandlistdata[3]}/>
                        <Demofile demodata={demodata[1]}/><br/>
                        <div className="demo removemargin">
                            <p className="demo__heading">Preview : </p>
                            <form action="" className="demo__content">
                                <label for="fname">First name : </label> <br/>
                                <input type="text" id="fname" name="fname" /><br/>
                                <label for="lname">Last name : </label> <br/>
                                <input type="text" id="lname" name="lname" />
                            </form>
                        </div>
                        <Note lines={notedata}/><br/>

                        {/* Label Element */}
                        <PandList text={pandlistdata[4]}/><br/>

                        {/* Radio Buttons */}
                        <PandList text={pandlistdata[5]}/>
                        <Demofile demodata={demodata[2]}/><br/>
                        <div className="demo removemargin">
                            <p className="demo__heading">Preview : </p>
                            <form action="" className="demo__content">
                                <input type="radio" id="male" name="gender" value="male"/>
                                <label for="male">  Male </label> <br/>
                                <input  type="radio" id="female" name="gender" value="female"/>
                                <label  for="female">  Female </label> <br/>
                            </form>
                        </div><br/>

                        {/* Submit Button */}
                        <PandList text={pandlistdata[6]}/>
                        <Demofile demodata={demodata[3]}/><br/>
                        <div className="demo removemargin">
                            <p className="demo__heading">Preview : </p>
                            <form className="demo__content">
                                <input type="submit" value="Submit"/>
                            </form>
                        </div><br/>

                        <Introandbuttons 
                            buttonone={["HTML List and Tables", "/htmllistandtables"]}
                            buttontwo={["HTML Inline and Block", "/htmlinlineandblock"]}      
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Htmlforms
