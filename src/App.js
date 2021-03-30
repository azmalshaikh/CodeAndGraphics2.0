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
import Cppintro from './CPP/Cppintro';
import Pythonintro from './Python/Pythonintro';
import Illustratorintro from './Illustrator/Illustratorintro';
import Premiereprointro from './PremierePro/Premiereprointro';
import Androiddevintro from './Android/Androiddevintro';
import Photoshopintro from './Photoshop/Photoshopintro';
import Installingeditor from './HTML/Installingeditor';

function App() {
  return (
    <Router>
      <div className="app">

        <Switch>

          <Route path="/htmlintro">
            <Htmlintro />
          </Route>

          <Route path="/installingeditor">
            <Installingeditor/>
          </Route>

          <Route path="/cssintro">
            <Cssintro />
          </Route>

          <Route path="/jsintro">
            <Jsintro />
          </Route>

          <Route path="/javaintro">
            <Javaintro />
          </Route>

          <Route path="/cppintro">
            <Cppintro />
          </Route>

          <Route path="/pythonintro">
            <Pythonintro />
          </Route>

          <Route path="/photoshopintro">
            <Photoshopintro />
          </Route>

          <Route path="/illustratorintro">
            <Illustratorintro />
          </Route>

          <Route path="/premiereprointro">
            <Premiereprointro />
          </Route>

          <Route path="/androiddevintro">
            <Androiddevintro />
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
