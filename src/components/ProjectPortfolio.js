import NavBar from "./NavBar";
import MobileMenu from "./MobileMenu";
import {Routes, Route} from 'react-router-dom'
import { NavLink } from "react-router-dom";
import JobSurge from "./JobSurge";
import TwoOrMore from "./TwoOrMore";
import InspiredInteriors from "./InspiredInteriors";
import FryMe from "./FryMe";


function ProjectPortfolio () {
 
    
    return (
        <div className="relative block">
        <div className="sm:hidden"><MobileMenu /></div>
        <NavBar />
        <div className="flex">
                <div className = "mx-auto text-center">
                    {/* <div className="flex justify-center">
                        <h2 className="text-9xl sm:text-[150px] font-fun pb-10 font-bold">work.</h2>
                    </div> */}

                    <nav className="text-sm sm:text-2xl font-fun">
                        <NavLink
                            to="/portfolio/inspiredinteriors"
                            exact="true"
                            className="hover:text-orange-500 rounded-md p-5  font-bold -rotate-90"
                            >INSPIRED INTERIORS
                        </NavLink>
                        <NavLink
                            to="/portfolio/jobsurge"
                            exact="true"
                            className="hover:text-orange-500 rounded-md p-5 font-bold -rotate-90"
                            >JOBSURGE
                        </NavLink>
                        <NavLink
                            to="/portfolio/twoormore"
                            exact="true"
                            className="hover:text-orange-500 rounded-md p-5 font-bold -rotate-90"
                            >TWO OR MORE
                        </NavLink>
                        <NavLink
                            to="/portfolio/fryme"
                            exact="true"
                            className="hover:text-orange-500 rounded-md p-5 font-bold -rotate-90"
                            >FRY ME TO THE MOON
                        </NavLink>

                    </nav>
                    <div className="sm:w-11/12 mx-5 flex-col text-right">
                    </div>
                    <div className="snap-y snap-mandatory h-screen w-screen overflow-y-scroll">
                        <div className="snap-start snap-always bg-pink-500 w-screen h-screen flex items-center justify-center ">
                        <NavLink
                            to="/inspiredinteriors"
                            exact="true"
                            className="hover:text-orange-500 rounded-md p-5  font-bold -rotate-90"
                            >INSPIRED INTERIORS
                        </NavLink>
                        </div>
                        <div className="snap-start snap-always bg-blue-500 w-screen h-screen flex items-center justify-center ">1</div>
                        <div className="snap-start snap-always bg-orange-500 w-screen h-screen flex items-center justify-center ">1</div>
                        <div className="snap-start snap-always bg-teal-500 w-screen h-screen flex items-center justify-center ">1</div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectPortfolio
