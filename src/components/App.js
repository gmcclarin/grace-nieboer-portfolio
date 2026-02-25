
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { Routes, Route } from 'react-router-dom'
import NotFound from './NotFound';
import InspiredInteriors from './InspiredInteriors';
import TwoOrMore from './TwoOrMore';
import JobSurge from './JobSurge';
import TreeSolutions from './TreeSolutions'
import GithubGenerator from "./GithubGenerator.js"
import ProjectPortfolio2 from './ProjectPortfolioV2.js';
import HomeV2 from '../pages/HomeV2.js';

function App() {
  return (
    <div>
    <div className="bg-neutral-200" >
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="v2" element={< HomeV2 />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />}/>
          <Route path="portfolio/*" element={<ProjectPortfolio2 />}/>
          <Route path="/inspiredinteriors" element={<InspiredInteriors />}/>
          <Route path="/jobsurge" element={<JobSurge />}/>
          <Route path="/twoormore" element={<TwoOrMore />}/>
          <Route path="/treesolutions" element={<TreeSolutions />}/>
          <Route path="/github-profile-generator" element={<GithubGenerator />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
    </div>
  );
}

export default App;
