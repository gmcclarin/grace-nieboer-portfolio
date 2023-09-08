import { useEffect, useState } from "react"
import Project from "./.archivedProject"
import NavBar from "./NavBar";
import MobileMenu from "./MobileMenu";
import Loading from "./Loading"
import InspiredInteriors from "./InspiredInteriors";
import {Routes, Route} from 'react-router-dom'
import { NavLink } from "react-router-dom";
import JobSurge from "./JobSurge";

function ProjectPortfolio () {
 
    
    return (
        <div className="m-1 sm:m-5 relative block">
        <div className="sm:hidden"><MobileMenu /></div>
        <NavBar />
        <div className="m-5 flex">
                <div className = "mx-auto text-center">
                    <div className="flex justify-center">
                        <h2 className="text-9xl sm:text-[200px] font-fun pb-10 font-bold">work.</h2>
                    </div>
                    <nav className="">
                        <NavLink
                            to="/portfolio/inspiredinteriors"
                            exact="true"
                            className="hover:text-orange-500 rounded-md p-5  text-sm sm:text-xl font-bold -rotate-90"
                            >INSPIRED INTERIORS
                        </NavLink>
                        <NavLink
                            to="/portfolio/jobsurge"
                            exact="true"
                            className="hover:text-orange-500 rounded-md p-5 text-sm sm:text-xl font-bold -rotate-90"
                            >JOBSURGE
                        </NavLink>

                    </nav>
                    <div className="flex justify-end ">
                        <div className="sm:w-11/12 mx-5 flex-col text-right">
                        <Routes>
                            <Route path="/inspiredinteriors" element={<InspiredInteriors />}/>
                            <Route path="/jobsurge" element={<JobSurge />}/>
                            {/* <Route path="portfolio/*" element={<ProjectPortfolio />}/> */}
                        </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectPortfolio
