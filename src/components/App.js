
import Home from './Home';
import About from './About';
import ProjectPortfolio from './ProjectPortfolio';
import Contact from './Contact';
import {Routes, Route} from 'react-router-dom'
import NotFound from './NotFound';


function App() {
  return (
    <div >
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />}/>
          <Route path="portfolio/*" element={<ProjectPortfolio />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;
