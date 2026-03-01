
import About from '../pages/About.js';
import { Routes, Route } from 'react-router-dom'
import NotFound from './NotFound';
import InspiredInteriors from './InspiredInteriors';
import TwoOrMore from './TwoOrMore';
import JobSurge from './JobSurge';
import TreeSolutions from './TreeSolutions'
import GithubGenerator from "./GithubGenerator.js"
import Portfolio from '../pages/Portfolio.js';
import HomeV2 from '../pages/Home.js';
import UnderConstruction from '../pages/UnderConstruction.js';

function App() {
  return (
    <div>
    <div className="" >
        <Routes>
          <Route exact path="/" element={<UnderConstruction />} />
          {/* <Route exact path="/" element={<Home />}/> */}
           <Route exact path="v2" element={< HomeV2 />} />
           <Route path="about" element={<About />} />
          
          <Route path="portfolio/*" element={<Portfolio />}/>
           {/* 
           <Route path="/inspiredinteriors" element={<InspiredInteriors />}/>
          <Route path="/jobsurge" element={<JobSurge />}/>
          <Route path="/twoormore" element={<TwoOrMore />}/>
          <Route path="/treesolutions" element={<TreeSolutions />}/>
          <Route path="/github-profile-generator" element={<GithubGenerator />} />  
          */}
          <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
    </div>
  );
}

export default App;
