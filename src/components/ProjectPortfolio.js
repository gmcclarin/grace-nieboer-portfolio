import NavBar from "./NavBar";
import MobileMenu from "./MobileMenu";
import { NavLink } from "react-router-dom";
import photo20 from "../photos/photo20.avif";

function ProjectPortfolio () {
 
    
    return (
        <div className="relative block">
        <div className="sm:hidden"><MobileMenu /></div>
        <NavBar />
        <div className="flex">
                <div className = "mx-auto text-center">
                    {/* <img src={photo20} /> */}
                    <div className="snap-y snap-mandatory h-screen w-screen overflow-y-scroll text-5xl">
                        <div id="portsection1" className="snap-start snap-always w-screen h-screen flex items-center justify-center ">
                            <NavLink
                                to="/inspiredinteriors"
                                exact="true"
                                className="hover:text-orange-500 text-white rounded-md p-5 hover:blur-sm  font-bold"
                                >INSPIRED INTERIORS
                            </NavLink>
                        </div>
                        <div id="portsection2" className="snap-start snap-always bg-zinc-700 w-screen h-screen flex items-center justify-center ">
                            <NavLink
                                to="/twoormore"
                                exact="true"
                                className="hover:text-orange-500 rounded-md p-5 font-bold "
                                >TWO OR MORE
                            </NavLink>
                        </div>
                        <div className="snap-start snap-always bg-zinc-500 w-screen h-screen flex items-center justify-center ">
                            <NavLink
                                to="/jobsurge"
                                exact="true"
                                className="hover:text-orange-500 rounded-md p-5 font-bold"
                                >JOBSURGE
                            </NavLink>
                        </div>
                        <div className="snap-start snap-always bg-zinc-200 w-screen h-screen flex items-center justify-center ">
                            <NavLink
                                to="/fryme"
                                exact="true"
                                className="hover:text-orange-500 rounded-md p-5 font-bold "
                                >FRY ME TO THE MOON
                            </NavLink>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectPortfolio
