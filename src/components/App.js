
import Home from './Home';
import NavBar from './NavBar';
import About from './About';
import ProjectPortfolio from './ProjectPortfolio';
import Contact from './Contact';

function App() {
  return (
    <div className=" app ">
        <NavBar />
        <div className="snap-y snap-mandatory">
          <div className="snap-always snap-center "><Home /></div>
          <div className="snap-always snap-center bg-grey"><About /></div>
          <div className="snap-always snap-center "><Contact/></div> 
          <div className="snap-always snap-center "><ProjectPortfolio /></div>
        </div>
        
    </div>
  );
}

export default App;
