import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Introandbuttons from '../Utilities/Introandbuttons';
import Navigationtop from '../Utilities/Navigationtop';
import PandList from '../Utilities/PandList';
import SideNavigationbar from '../Utilities/SideNavigationbar';
import TableContents from '../Utilities/TableContents';
import "./Common.css";

function Htmlintro() {

    // const data = ['HTML Introduction', 'Installing Editor', 'HTML Structure', 'HTML Elements', 'HTML Heading & Paragaraphs','HTML Text Formatting',
    //                 'HTML Attributes', 'HTML Img & Anchor tags', 'HTML List &amp; Tables', 'HTML Forms', 'HTML Inline & Block', 'HTML Ids & Classes',
    //                 'HTML Entities', 'HTML Semantic Tags', 'HTML Colors', 'HTML Layout', 'HTML Head', 'HTML Figure & Figcaption', 'HTML Responsive'
    // ];

    const data = [
        {"title" : "HTML Introduction", "link": "/htmlintro"},
        {"title" : "Installing Editor", "link": "/installingeditor"},
        {"title" : "HTML Structure", "link": "/installingeditor"},
        {"title" : "HTML Elements", "link": "/htmlintro"},
        {"title" : "HTML Heading & Paragaraphs", "link": "/htmlintro"},
        {"title" : "HTML Text Formatting", "link": "/htmlintro"},
        {"title" : "HTML Attributes", "link": "/htmlintro"},
        {"title" : "HTML Img & Anchor tags", "link": "/htmlintro"},
        {"title" : "HTML List &amp; Tables", "link": "/htmlintro"},
        {"title" : "HTML Forms", "link": "/htmlintro"},
        {"title" : "HTML Inline & Block", "link": "/htmlintro"},
        {"title" : "HTML Ids & Classes", "link": "/htmlintro"},
        {"title" : "HTML Entities", "link": "/htmlintro"},
        {"title" : "HTML Semantic Tags", "link": "/htmlintro"},
        {"title" : "HTML Colors", "link": "/htmlintro"},
        {"title" : "HTML Layout", "link": "/htmlintro"},
        {"title" : "HTML Head", "link": "/htmlintro"},
        {"title" : "HTML Figure & Figcaption", "link": "/htmlintro"},
        {"title" : "HTML Responsive", "link": "/htmlintro"},
    ]

    const pandlist = [
        {"heading": "HTML = Hyper Text Markup Language", "define": "Hyper", "listitems": " = It means a link, which lets you go from one webpage to another."},
        {"define": "Text", "listitems": " = Something that you write."},
        {"define": "Markup", "listitems": " = How you'll lay down the text."},
        {"define": "Language", "listitems": " = Because they needed something to complete the word."},
        {"listitems": "HTML Forms bacbone of all webpages that we happily hover around these days."},
        {"listitems": "It provides them with a structure."},
        {"listitems": "It is a set of code/tags which are most easily interpreted by web browsers."},
        {"listitems": "It's not a programming language."},
        {"listitems": "HTML document is a simple text file."},
        {"listitems": "In HTML we use tags to mark up the begining and end of an element."},
        {"listitems": "HTML consists of a series of elements."},
    ]

    const quesandanswers = [
        {"heading": "Important Questions : ", "define": "How do web browsers interact with HTML ?", "listitems": " Browsers cannot read the content directly from the place where it is stored. To settle this conflect web servers are used. A web server acts like an intermediator, it patiently listen to the browser's request and executed it for us."},
        {"define": "Why HTML isn't a programming language ?", "listitems": " HTML controls the presentation, structure and layout of data on a webpage. It does not contain any functional or programming logic and neither it perform tasks like event handling, taking input and displaying output."},
        {"define": "Web Server ?", "listitems": " Web Server can be harware / software that lets you deliver the webpage to your browser."},
    ]

    const tabledata = [
        ["", "Start tag", "Content", "End tag"],
        ["1", "<h1>", "Heading", "</h>"],
        ["2", "<p>", "Paragraph", "</p>"],
        ["3", "<a>", "Hyperlinks", "</a>"],
    ]

    return (
        <div className="htmlintro">
            <Header />
            <Navigationtop text={data} number={1} numbertwo={1}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={data} activenumber={1}/>

                    <div className="maincontent">
                        <Introandbuttons 
                            heading="HTML Introduction"
                            buttontwo={["Installing Editor", "/installingeditor"]}    
                        />

                        <PandList text={pandlist}/>

                        <p className="question__heading">What is an HTML document?</p>
                        <p className="answer">Defined by a start tag, some content, and end tag.
                            <p className="answer__breif">&lt;tagname&gt; Content &lt;/tagname&gt;</p> 
                            <p>Examples : </p>
                            <p className="answer__breif">&lt;h1&gt; Heading &lt;/h1&gt;</p>
                            <p className="answer__breif">&lt;p&gt; Paragraph &lt;/p&gt;</p>
                            <p className="answer__breif">&lt;a&gt; Hyperlinks &lt;/a&gt;</p>
                        </p>

                        <TableContents text={tabledata}/>

                        <PandList text={quesandanswers}/>

                        <Introandbuttons 
                            buttontwo={["Installing Editor", "/installingeditor"]}    
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Htmlintro
