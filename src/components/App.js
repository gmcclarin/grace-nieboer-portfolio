
import Home from './Home';
import NavBar from './NavBar';
import About from './About';
import ProjectPortfolio from './ProjectPortfolio';
import Contact from './Contact';

function App() {
  return (
    <div className="App ">
        <NavBar />
        <div className="snap-y snap-mandatory w-screen h-screen">
          <div className="snap-always snap-center"><Home /></div>
          <div className="snap-always snap-center"><About /></div>
          <div className="snap-always snap-center "><Contact/></div> 
          <div className="snap-always snap-center "><ProjectPortfolio /></div>
        </div>
        
    </div>
  );
}

export default App;
