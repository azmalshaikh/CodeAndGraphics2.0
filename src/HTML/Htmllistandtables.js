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

function Htmllistandtables({props}) {

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
            {"heading": "HTML List : ", "listitems": "Usage : To group a set of related items in lists."},
        ],
        [
            {"heading": "1. Unordered list :", "listitems": "Collection of related items that have no special order or sequence."},
            {"listitems": "Starts with <ul> tag and this will list items using plain bullets."},
            {"listitems": "Each list item starts with the <li> tag."},
        ],
        [
            {"heading": "Unordered list Type Attribute :", "listitems": "The type attribute of the <ul> tag, defines the type of sequence."},
        ],
        [
            {"heading": "2. Ordered list :", "listitems": "Collection of related items that have special order or sequence."},
            {"listitems": "Each list item starts with the <li> tag."},
            {"listitems": "Items will be marked with numbers by default."},
        ],
        [
            {"heading": "Ordered list Type Attribute :", "listitems": "The type attribute of the <ol> tag, defines the type of sequence."},
        ],
        [
            {"heading": "3. Defination list :", "listitems": "Entries are listed like in a dictionary."},
            {"listitems": "Usage : To present a glossary , list of items or any other value list."},
            {"listitems": "<dl> - Defines the start of list"},
            {"listitems": "<dt> - A term"},
            {"listitems": "<dd> - Term Defination"},
            {"listitems": "</dl> - Defines the end of list"},
        ],
        [
            {"heading": "HTML Tables :", "listitems": "An HTML Table is defined with <table> tag."},
            {"listitems": "Each table row is defined with <tr>tag."},
            {"listitems": "A table header is defined with <th> tag (By default table heading are bold and centered)."},
            {"listitems": "A table data cell is defined with <td> tag"},
        ],
    ]

    const demodata = [
        [
            {"heading": "Examples : ", "list": "List 1"},
            {"list": "List 2"},
            {"list": "List 3"},
            {"list": "List 4"},
        ],
        [
            {"heading": "Example :", "simple": "<ul>"},
            { "simple": "       <li> C </li>"},
            { "simple": "       <li> C++ </li>"},
            { "simple": "       <li> Java </li>"},
            { "simple": "       <li> Python </li>"},
            { "simple": "</ul>"},
        ],
        [
            {"heading": "Preview :", "list": " C "},
            {"list": " C++ "},
            {"list": " Java "}, 
            {"list": " Python "}
        ],
        [
            {"heading": "Example :", "simple": "<ol>"},
            { "simple": "       <li> C </li>"},
            { "simple": "       <li> C++ </li>"},
            { "simple": "       <li> Java </li>"},
            { "simple": "       <li> Python </li>"},
            { "simple": "</ol>"},
        ],
        [
            {"heading": "Preview :", "simple": "1. C "},
            {"simple": "2. C++ "},
            {"simple": "3. Java "}, 
            {"simple": "4. Python "}
        ],
        [
            {"heading": "Example :", "simple": "<dl>"},
            { "simple": "       <dt> A term (name)</dt>"},
            { "simple": "       <dd> Term Defination</dd>"},
            { "simple": "       <dt> Java Script</dt>"},
            { "simple": "       <dd> Programming language used to make interactive webpages</dd>"},
            { "simple": "</dl>"},
        ],
        [
            {"heading": "Preview :", "medium": "A term (name)"},
            {"simple": "Term defination"},
            {"medium": "Java Script"}, 
            {"simple": "Programming language used to make interactive webpages"}
        ],
        [
            {"heading": "Example :", "simple": "<table>"},
            { "simple": "       <tr>"},
            { "simple": "               <th> Name</th>"},
            { "simple": "               <th> Age</th>"},
            { "simple": "               <th> Qualification</th>"},
            { "simple": "       </tr>"},
            { "simple": "       <tr>"},
            { "simple": "               <td> Rohan</td>"},
            { "simple": "               <td> 26</td>"},
            { "simple": "               <td> Web Developer </td>"},
            { "simple": "       </tr>"},
            { "simple": "       <tr>"},
            { "simple": "               <td> Harry</td>"},
            { "simple": "               <td> 20</td>"},
            { "simple": "               <td> Android developer </td>"},
            { "simple": "       </tr>"},
            { "simple": "</table>"}
        ],
    ]

    const tabledata = [
        [
            ["", "Type Attribute", "Discription/Meaning"],
            ["1", 'type="disc"', "Sets the list item marker to a bullet (default)"],
            ["2", 'type="square"', "Sets the list item marker to a square"],
            ["3", 'type="circle"', "Sets the list item marker to a circle"],
        ],
        [
            ["", "Type Attribute", "Discription/Meaning"],
            ["1", 'type="1"', "List items will be sequenced with numbers(default)"],
            ["2", 'type="i"', "List items will be sequenced with lowercase roman numbers"],
            ["3", 'type="I"', "List items will be sequenced with uppercase roman numbers"],
            ["4", 'type="A"', "List items will be sequenced with uppercase letters"],
            ["5", 'type="a"', "List items will be sequenced with lowercase letters"],
        ],
    ]

    const notedata = [
        [
            {"line1": "You can also use the start attribute in HTML ordered list"},
            {"line1": '<ol type="i" start="4">'}
        ],
        [
            {"line1": "In HTML list nesting is allowed. It means list inside lists. Explore this concept yourself!!"},
        ],
        [
            {"line1": "For adding a border for the table CSS border property is used. We will discuss this in CSS tables section. In CSS tables we will explore about colspan and rowspan attribute , Caption for table and styles for table."}
        ]
    ]

    return (
        <div>
            <Header />
            <Navigationtop text={props} number={1} numbertwo={9} navbar={navbar} activenavbar={setNavbar}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={9}/>

                    <div className="maincontent" id="maincontent">
                        <Introandbuttons 
                            heading="HTML List and Tables"
                            buttonone={["HTML Image and Anchor", "/htmlimgandanchor"]}
                            buttontwo={["HTML Forms", "/htmlforms"]}    
                        />

                        <PandList text={pandlistdata[0]}/>                    
                        <Demofile demodata={demodata[0]}/><br/>

                        <PandList text={pandlistdata[1]}/>
                        <Demofile demodata={demodata[1]}/>
                        <Demofile demodata={demodata[2]}/><br/>

                        <PandList text={pandlistdata[2]}/>
                        <TableContents text={tabledata[0]}/><br/>

                        <PandList text={pandlistdata[3]}/>
                        <Demofile demodata={demodata[3]}/>
                        <Demofile demodata={demodata[4]}/><br/>

                        <PandList text={pandlistdata[4]}/>
                        <TableContents text={tabledata[1]}/>
                        <Note lines={notedata[0]}/><br/>

                        <PandList text={pandlistdata[5]}/>
                        <Demofile demodata={demodata[5]}/>
                        <Demofile demodata={demodata[6]}/>
                        <Note lines={notedata[1]}/><br/>

                        <PandList text={pandlistdata[6]}/>
                        <Demofile demodata={demodata[7]}/>
                        <p className="answer">Preview : </p>
                        <table className="table">
                            <tr>
                                <th> Name</th>
                                <th> Age</th>
                                <th> Qualification</th>
                            </tr>
                            <tr>
                                <td> Rohan</td>
                                <td> 26</td>
                                <td> Web Developer</td>
                            </tr>
                            <tr>
                                <td> Harry</td>
                                <td> 20</td>
                                <td> Android Developer</td>
                            </tr>
                        </table>
                        <Note lines={notedata[2]}/><br/>

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
