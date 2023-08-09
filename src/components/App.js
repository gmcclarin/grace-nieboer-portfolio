
import Home from './Home';
import NavBar from './NavBar';
import About from './About';
import ProjectPortfolio from './ProjectPortfolio';
import Contact from './Contact';
import {Route, Switch} from "react-router-dom";
import NotFound from './NotFound';


function App() {
  return (
    <div >
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/portfolio">
            <ProjectPortfolio />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        
    </div>
  );
}

export default App;
