
import Home from './Home';
import About from './About';
import ProjectPortfolio from './ProjectPortfolio';
import Contact from './Contact';
import {Routes, Route} from 'react-router-dom'
import NotFound from './NotFound';
import InspiredInteriors from './InspiredInteriors';
import TwoOrMore from './TwoOrMore';
import JobSurge from './JobSurge';
import TreeSolutions from './TreeSolutions'
import nightwind from "nightwind/helper"

function App() {
  return (
    <div>
    <div className="bg-neutral-200" >
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />}/>
          <Route path="portfolio/*" element={<ProjectPortfolio />}/>
          <Route path="/inspiredinteriors" element={<InspiredInteriors />}/>
          <Route path="/jobsurge" element={<JobSurge />}/>
          <Route path="/twoormore" element={<TwoOrMore />}/>
          <Route path="/treesolutions" element={<TreeSolutions />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
    </div>
  );
}

export default App;
