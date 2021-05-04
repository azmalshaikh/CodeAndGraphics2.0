import React, { useEffect, useState }  from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Introandbuttons from '../Utilities/Introandbuttons';
import Navigationtop from '../Utilities/Navigationtop';
import PandList from '../Utilities/PandList';
import SideNavigationbar from '../Utilities/SideNavigationbar';
import TableContents from '../Utilities/TableContents';
import "./Common.css";

function Htmlentities({props}) {

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
        {"listitems": "Some character are reserved in HTML so they must be replaced with character entities."},
        {"listitems": "For example : If you use < or > sign the browser might mix them with tags."},
        {"listitems": "Character entities are used to display reserved characters in HTML."},
        {"listitems": "Syntax : &entity_name; OR &#entity_number;"},
        {"listitems": "Generally, entity name is used because name is easy to rememeber and support all type of browser's."},
        {"listitems": "Entity names are case sensitive."}
    ]

    const tabledata = [
        ["", "Name", "Entity Name", "Entity Number"],
        ["<", "lessthan", "&lt;	", "&#60;"],
        [">", "greator than", "&gt;", "&#62;"],
        ["&", "ampersand", "&amp", "&#38;"],
        ['"', "double quotation mark", "&quot;", "&#34;"],
        ["'", "single quotation mark (apostrophe)", "&apos;", "&#39;"],
        ["£", "pound", "&pound;", "&#163;"],
        ["€", "euro", "&euro;", "&#8364;"],
        ["©", "copyright", "&copy;", "&#169;"],
        ["®", "Registered trademark", "&reg;", "&#174;"],
        ["", "Non breaking space", "&nbsp;", "&#160;"],
        ["∀", "For All", "&forall;", "&#8704;"],
        ["∂", "Partial Differential", "&part;", "&#8706;"],
        ["∃", "There Exists", "&exist;", "&#8707;"],
        ["∅", "Empty Sets", "&empty;", "&#8711;"],
        ["∑", "Summation", "&sum;", "&#8721;"],
        ["∏", "N-ary Product", "&prod;", "&#8719;"],
        ["∈", "Element of", "&isin;", "&#8721;"],
        ["A", "GREEK CAPITAL LETTER ALPHA", "&Alpha;", "&#913;"],
        ["B", "GREEK CAPITAL LETTER BETA", "&Beta;", "&#914;"],
    ]

    return (
        <div>
            <Header />
            <Navigationtop text={props} number={1} numbertwo={13} navbar={navbar} activenavbar={setNavbar}/>

            <div className="cont">
                <div className="row">

                    <SideNavigationbar text={props} activenumber={13}/>

                    <div className="maincontent" id="maincontent">
                        <Introandbuttons 
                            heading="HTML Entities"
                            buttonone={["HTML Id's and Classes", "/htmlisandclass"]}
                            buttontwo={["HTML Semantic Tags", "/htmlsemantictags"]}    
                        />

                        <PandList text={pandlistdata} />

                        <p className="question__heading">Some Useful HTML Character Entities -</p>
                        <TableContents text={tabledata}/>

                        <Introandbuttons 
                            buttonone={["HTML Id's and Classes", "/htmlisandclass"]}
                            buttontwo={["HTML Semantic Tags", "/htmlsemantictags"]}     
                        />

                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Htmlentities
