import './App.css';
import Header from './Header';
import Navigationbar from './Navigationbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slideshow from './Slideshow';
import Cards from './Cards';
import Footer from './Footer';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Htmlintro from './HTML/Htmlintro';
import Cssintro from './CSS/Cssintro';
import Jsintro from './JS/Jsintro';
import Javaintro from './Java/Javaintro';
import DSalgo from './DSAlgo/Dsalgo';
import Reactintro from './React/Reactintro';
import Illustratorintro from './Illustrator/Illustratorintro';
import Premiereprointro from './PremierePro/Premiereprointro';
import Installingeditor from './HTML/Installingeditor';
import Htmlstructure from './HTML/Htmlstructure';
import Htmlelements from './HTML/Htmlelements';
import Htmlhandp from './HTML/Htmlhandp';
import Htmltextformat from './HTML/Htmltextformat';
import Htmlattributes from './HTML/Htmlattributes';
import Htmlimgandanchor from './HTML/Htmlimgandanchor';
import Htmllistandtables from './HTML/Htmllistandtables';
import Htmlforms from './HTML/Htmlforms';
import HtmlInlineandblock from './HTML/HtmlInlineandblock';
import Htmlidandclass from './HTML/Htmlidandclass';
import Htmlentities from './HTML/Htmlentities';
import Htmlsemantictags from './HTML/Htmlsemantictags';
import Htmlcolors from './HTML/Htmlcolors';
import Htmllayout from './HTML/Htmllayout';
import Htmlhead from './HTML/Htmlhead';
import Htmlfigure from './HTML/Htmlfigure';
import Htmlresposive from './HTML/Htmlresposive';
import Cssselectors from './CSS/Cssselectors';
import Cssadd from './CSS/Cssadd';
import Cssbackground from './CSS/Cssbackground';
import Cssborder from './CSS/Cssborder';
import Csspadding from './CSS/Csspadding';
import Cssoutline from './CSS/Cssoutline';
import Csstext from './CSS/Csstext';
import Csslinks from './CSS/Csslinks';
import Csslists from './CSS/Csslists';
import Cssdisplay from './CSS/Cssdisplay';
import Cssposition from './CSS/Cssposition';
import Cssoverflow from './CSS/Cssoverflow';
import Cssfloat from './CSS/Cssfloat';
import Cssflexbox from './CSS/Cssflexbox';
import Cssresponsive from './CSS/Cssresponsive';
import Csspseudo from './CSS/Csspseudo';
import Cssanimations from './CSS/Cssanimations';
import Csstransform from './CSS/Csstransform';
import Csstransitions from './CSS/Csstransitions';
import Cssgrids from './CSS/Cssgrids';
import Cssmargin from './CSS/Cssmargin';
import Reactes6 from './React/Reactes6';
import Reactrender from './React/Reactrender';
import Reactjsx from './React/Reactjsx';
import Reactcomponents from './React/Reactcomponents';
import Reactprops from './React/Reactprops';
import Reactstate from './React/Reactstate';
import Reacthooks from './React/Reacthooks';
import Reactcontextapi from './React/Reactcontextapi';
import Reactredux from './React/Reactredux';

function App() {

  // {"title" : "", "link": "/"},

  const htmldata = [
    {"heading": "HTML", "title" : "HTML Introduction", "link": "/htmlintro"},
    {"title" : "Installing Editor", "link": "/installingeditor"},
    {"title" : "HTML Structure", "link": "/htmlstructure"},
    {"title" : "HTML Elements", "link": "/htmlelements"},
    {"title" : "HTML Heading & Paragaraphs", "link": "/htmlhandp"},
    {"title" : "HTML Text Formatting", "link": "/htmltextformat"},
    {"title" : "HTML Attributes", "link": "/htmlattributes"},
    {"title" : "HTML Img & Anchor tags", "link": "/htmlimgandanchor"},
    {"title" : "HTML List & Tables", "link": "/htmllistandtables"},
    {"title" : "HTML Forms", "link": "/htmlforms"},
    {"title" : "HTML Inline & Block", "link": "/htmlinlineandblock"},
    {"title" : "HTML Ids & Classes", "link": "/htmlisandclass"},
    {"title" : "HTML Entities", "link": "/htmlentities"},
    {"title" : "HTML Semantic Tags", "link": "/htmlsemantictags"},
    {"title" : "HTML Colors", "link": "/htmlcolors"},
    {"title" : "HTML Layout", "link": "/htmllayout"},
    {"title" : "HTML Head", "link": "/htmlhead"},
    {"title" : "HTML Figure & Figcaption", "link": "/htmlfigure"},
    {"title" : "HTML Responsive", "link": "/htmlresponsive"},
  ]

  const cssdata = [
    {"heading": "CSS", "title" : "CSS Introduction", "link": "/cssintro"},
    {"title" : "CSS Selectors", "link": "/cssselectors"},
    {"title" : "CSS Add", "link": "/cssadd"},
    {"title" : "CSS Background", "link": "/cssbg"},
    {"title" : "CSS Border", "link": "/cssborder"},
    {"title" : "CSS Margin", "link": "/cssmargin"},
    {"title" : "CSS Padding", "link": "/csspadding"},
    {"title" : "CSS Outline", "link": "/cssoutline"},
    {"title" : "CSS Text", "link": "/csstext"},
    {"title" : "CSS Links", "link": "/csslinks"},
    {"title" : "CSS Lists", "link": "/csslists"},
    {"title" : "CSS display", "link": "/ccssdisplayss"},
    {"title" : "CSS position", "link": "/cssposition"},
    {"title" : "CSS overflow", "link": "/cssoverflow"},
    {"title" : "CSS FLoat", "link": "/cssfloatclear"},
    {"title" : "CSS Flexbox", "link": "/cssflexbox"},
    {"title" : "CSS Respnonsive", "link": "/cssresponsive"},
    {"title" : "CSS Pseudo Selectors", "link": "/csspseudo"},
    {"title" : "CSS Animations", "link": "/cssanimation"},
    {"title" : "CSS Tranform", "link": "/csstransform"},
    {"title" : "CSS Transition", "link": "/csstransitions"},
    {"title" : "CSS Grids", "link": "/cssGrids"},
  ]

  const dsalgodata = [
    {"heading": "DS Algo", "title" : "DS Algo Introduction", "link": "/dsalgo"},
  ]

  const jsdata = [
    {"heading": "Javascript", "title" : "Javascript Introduction", "link": "/jsintro"},
  ]

  const javadata = [
    {"heading": "Java", "title" : "Java Introduction", "link": "/javaintro"},
  ]

  const reactdata = [
    {"heading": "React", "title" : "React Introduction", "link": "/react"},
    {"title" : "React ES6", "link": "/reactes"},
    {"title" : "React Render", "link": "/reactrender"},
    {"title" : "React JSX", "link": "/reactjsx"},
    {"title" : "React Components", "link": "/reactcomponents"},
    {"title" : "React Props", "link": "/reactprops"},
    {"title" : "React State", "link": "/reactstate"},
    {"title" : "React Hooks", "link": "/reacthooks"},
    {"title" : "React Context API", "link": "/reactcontextapi"},
    {"title" : "React Redux", "link": "/reactredux"},
  ]

  const illustratordata = [
    {"heading": "Illustrator", "title" : "Illustrator Introduction", "link": "/illustratorintro"},
  ]

  const premiereprodata = [
    {"heading": "Premiere Pro", "title" : "Premiere Pro Introduction", "link": "/premiereprointro"},
  ]

  return (
    <Router>
      <div className="app">

        <Switch>

          <Route path="/htmlintro">
            <Htmlintro props={htmldata}/>
          </Route>

          <Route path="/installingeditor">
            <Installingeditor props={htmldata}/>
          </Route>

          <Route path="/htmlstructure">
            <Htmlstructure props={htmldata}/>
          </Route>

          <Route path="/htmlelements">
            <Htmlelements props={htmldata}/>
          </Route>
          
          <Route path="/htmlhandp">
            <Htmlhandp props={htmldata}/>
          </Route>
          
          <Route path="/htmltextformat">
            <Htmltextformat props={htmldata}/>
          </Route>
          
          <Route path="/htmlattributes">
            <Htmlattributes props={htmldata}/>
          </Route>
          
          <Route path="/htmlimgandanchor">
            <Htmlimgandanchor props={htmldata}/>
          </Route>
          
          <Route path="/htmllistandtables">
            <Htmllistandtables props={htmldata}/>
          </Route>
          
          <Route path="/htmlforms">
            <Htmlforms props={htmldata}/>
          </Route>
          
          <Route path="/htmlinlineandblock">
            <HtmlInlineandblock props={htmldata}/>
          </Route>
          
          <Route path="/htmlisandclass">
            <Htmlidandclass props={htmldata}/>
          </Route>
          
          <Route path="/htmlentities">
            <Htmlentities props={htmldata}/>
          </Route>
          
          <Route path="/htmlsemantictags">
            <Htmlsemantictags props={htmldata}/>
          </Route>
          
          <Route path="/htmlcolors">
            <Htmlcolors props={htmldata}/>
          </Route>
          
          <Route path="/htmllayout">
            <Htmllayout props={htmldata}/>
          </Route>
          
          <Route path="/htmlhead">
            <Htmlhead props={htmldata}/>
          </Route>
          
          <Route path="/htmlfigure">
            <Htmlfigure props={htmldata}/>
          </Route>
          
          <Route path="/htmlresponsive">
            <Htmlresposive props={htmldata}/>
          </Route>

          <Route path="/cssintro">
            <Cssintro props={cssdata}/>
          </Route>

          <Route path="/cssselectors">
            <Cssselectors props={cssdata}/>
          </Route>

          <Route path="/cssadd">
            <Cssadd props={cssdata}/>
          </Route>

          <Route path="/cssbg">
            <Cssbackground props={cssdata}/>
          </Route>

          <Route path="/cssborder">
            <Cssborder props={cssdata}/>
          </Route>

          <Route path="/cssmargin">
            <Cssmargin props={cssdata}/>
          </Route>

          <Route path="/csspadding">
            <Csspadding props={cssdata}/>
          </Route>

          <Route path="/cssoutline">
            <Cssoutline props={cssdata}/>
          </Route>

          <Route path="/csstext">
            <Csstext props={cssdata}/>
          </Route>

          <Route path="/csslinks">
            <Csslinks props={cssdata}/>
          </Route>

          <Route path="/csslists">
            <Csslists props={cssdata}/>
          </Route>

          <Route path="/cssdisplay">
            <Cssdisplay props={cssdata}/>
          </Route>

          <Route path="/cssposition">
            <Cssposition props={cssdata}/>
          </Route>

          <Route path="/cssoverflow">
            <Cssoverflow props={cssdata}/>
          </Route>

          <Route path="/cssfloatclear">
            <Cssfloat props={cssdata}/>
          </Route>

          <Route path="/cssflexbox">
            <Cssflexbox props={cssdata}/>
          </Route>

          <Route path="/cssresponsive">
            <Cssresponsive props={cssdata}/>
          </Route>

          <Route path="/csspseudo">
            <Csspseudo props={cssdata}/>
          </Route>

          <Route path="/cssanimation">
            <Cssanimations props={cssdata}/>
          </Route>

          <Route path="/csstransform">
            <Csstransform props={cssdata}/>
          </Route>

          <Route path="/csstransitions">
            <Csstransitions props={cssdata}/>
          </Route>

          <Route path="/cssGrids">
            <Cssgrids props={cssdata}/>
          </Route>

          <Route path="/jsintro">
            <Jsintro props={jsdata}/>
          </Route>

          <Route path="/javaintro">
            <Javaintro props={javadata}/>
          </Route>

          <Route path="/dsalgo">
            <DSalgo props={dsalgodata}/>
          </Route>

          <Route path="/react">
            <Reactintro props={reactdata}/>
          </Route>

          <Route path="/reactes">
            <Reactes6 props={reactdata}/>
          </Route>

          <Route path="/reactrender">
            <Reactrender props={reactdata}/>
          </Route>

          <Route path="/reactjsx">
            <Reactjsx props={reactdata}/>
          </Route>

          <Route path="/reactcomponents">
            <Reactcomponents props={reactdata}/>
          </Route>

          <Route path="/reactprops">
            <Reactprops props={reactdata}/>
          </Route>

          <Route path="/reactstate">
            <Reactstate props={reactdata}/>
          </Route>

          <Route path="/reacthooks">
            <Reacthooks props={reactdata}/>
          </Route>

          <Route path="/reactcontextapi">
            <Reactcontextapi props={reactdata}/>
          </Route>

          <Route path="/reactredux">
            <Reactredux props={reactdata}/>
          </Route>

          <Route path="/illustratorintro">
            <Illustratorintro props={illustratordata}/>
          </Route>

          <Route path="/premiereprointro">
            <Premiereprointro props={premiereprodata} />
          </Route>

          <Route path="/">
            <Header />
            <Navigationbar />
            <Slideshow />
            <Cards />
            <Footer />
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
