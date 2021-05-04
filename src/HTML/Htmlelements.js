import React, { useEffect, useState }  from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Introandbuttons from '../Utilities/Introandbuttons';
import Navigationtop from '../Utilities/Navigationtop';
import Note from '../Utilities/Note';
import SideNavigationbar from '../Utilities/SideNavigationbar';
import TableContents from '../Utilities/TableContents';
import "./Common.css";

function Htmlelements({props}) {

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

    const tabledata = [
        ["", "Start tag", "Content", "End tag"],
        ["1", "<h1>", "Heading", "</h>"],
        ["2", "<p>", "Paragraph", "</p>"],
        ["3", "<a>", "Hyperlinks", "</a>"],
    ]

    const notedata = [
        [
            {"line1": "Never skip the end tag. However some HTML elements will display correctly, even if you forget the end tag But Unexpected results and errors may occur if you forget the end tag!"},
        ],
        [
            {"line1": "HTML tags are not case-sensitive. So <P> and <p> are same."},
            {"line1": "However it is recommended to use lowercase in whole HTML document. At CodeAndGraphics we always use lowercase tag names."}
        ],
        [
            {"line1": "In HTML nesting is allowed. Nesting means putting one tag inside another tag."},
            {"line1": "Example :"},
            {"line1": "     <body>"},
            {"line1": "         <p>",},
            {"line1": "             This is the paragraph."},
            {"line1": "         </p>"},
            {"line1": "     </body>"},
            {"line1": "In this example the <p> is inside the <body>"},
        ]
    ]

    return (
        <div>
            <Header />
            <Navigationtop text={props} number={1} numbertwo={4} navbar={navbar} activenavbar={setNavbar}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={4}/>

                    <div className="maincontent" id="maincontent">
                        <Introandbuttons 
                            heading="HTML Elements"
                            buttonone={["HTML Structure", "/htmlstructure"]}
                            buttontwo={["HTML Heading & Paragraph", "/htmlhandp"]}    
                        />

                        <p className="answer">Defined by a start tag, some content, and end tag.
                            <p className="answer__breif">&lt;tagname&gt; Content &lt;/tagname&gt;</p> 
                            <p>Examples : </p>
                            <p className="answer__breif">&lt;h1&gt; Heading &lt;/h1&gt;</p>
                            <p className="answer__breif">&lt;p&gt; Paragraph &lt;/p&gt;</p>
                            <p className="answer__breif">&lt;a&gt; Hyperlinks &lt;/a&gt;</p>
                        </p>

                        <TableContents text={tabledata}/>

                        {notedata.map((arraytext) => {
                            return <Note lines={arraytext}/>
                        })}

                        <p className="answer">Apart from the elements we have discussed, there are many remaining. These are very useful in writing the code of an website. We will discuss one by one all these in details.</p>

                        <Introandbuttons 
                            buttonone={["HTML Structure", "/htmlstructure"]}
                            buttontwo={["HTML Heading & Paragraph", "/htmlhandp"]}     
                        />

                        <Footer />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Htmlelements
