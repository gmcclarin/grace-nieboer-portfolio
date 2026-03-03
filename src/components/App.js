
import About from '../pages/About.js';
import { Routes, Route } from 'react-router-dom'
import NotFound from './NotFound';
import InspiredInteriors from '../pages/InspiredInteriors';
import TwoOrMore from '../pages/TwoOrMore.js';
import TreeSolutions from '../pages/TreeSolutions'
import GithubGenerator from "../pages/GithubGenerator.js"
import DependencyDrift from '../pages/DependencyDrift.js';
import Portfolio from '../pages/Portfolio.js';
import HomeV2 from '../pages/Home.js';
import UnderConstruction from '../pages/UnderConstruction.js';

function App() {
  return (
    <div>
    <div className="" >
        <Routes>
          <Route exact path="/" element={<HomeV2 />} />
           <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />}/>
          <Route path="/portfolio/dependency-drift" element={<DependencyDrift />}/>
          <Route path="/portfolio/inspiredinteriors" element={<InspiredInteriors />}/>
          <Route path="/portfolio/github-profile-generator" element={<GithubGenerator />} />  
          <Route path="/portfolio/tree-solutions" element={<TreeSolutions />}/>
          <Route path="/portfolio/two-or-more" element={<TwoOrMore />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
    </div>
  );
}

export default App;
