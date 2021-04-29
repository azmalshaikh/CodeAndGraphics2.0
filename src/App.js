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
import Androiddevintro from './Android/Androiddevintro';
import Photoshopintro from './Photoshop/Photoshopintro';
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
    {"heading": "CSS", "title" : "CSS Introduction", "link": "/"},
    {"title" : "CSS Selectors", "link": "/css"},
    {"title" : "CSS Add", "link": "/css"},
    {"title" : "CSS Background", "link": "/css"},
    {"title" : "CSS Border", "link": "/css"},
    {"title" : "CSS Margin", "link": "/css"},
    {"title" : "CSS Padding", "link": "/css"},
    {"title" : "CSS Outline", "link": "/css"},
    {"title" : "CSS Text", "link": "/css"},
    {"title" : "CSS Links", "link": "/css"},
    {"title" : "CSS Lists", "link": "/css"},
    {"title" : "CSS display", "link": "/css"},
    {"title" : "CSS position", "link": "/css"},
    {"title" : "CSS overflow", "link": "/css"},
    {"title" : "CSS FLoat", "link": "/css"},
    {"title" : "CSS Flexbox", "link": "/css"},
    {"title" : "CSS Respnonsive", "link": "/css"},
    {"title" : "CSS Pseudo Selectors", "link": "/css"},
    {"title" : "CSS Animations", "link": "/css"},
    {"title" : "CSS Tranform", "link": "/css"},
    {"title" : "CSS Transition", "link": "/css"},
    {"title" : "CSS Grids", "link": "/css"},
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

          <Route path="/jsintro">
            <Jsintro />
          </Route>

          <Route path="/javaintro">
            <Javaintro />
          </Route>

          <Route path="/dsalgo">
            <DSalgo />
          </Route>

          <Route path="/react">
            <Reactintro />
          </Route>

          <Route path="/illustratorintro">
            <Illustratorintro />
          </Route>

          <Route path="/premiereprointro">
            <Premiereprointro />
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
