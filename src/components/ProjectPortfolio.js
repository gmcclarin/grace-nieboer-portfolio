import { useEffect, useState } from "react"
import Project from "./Project"
import NavBar from "./NavBar";
import MobileMenu from "./MobileMenu";
import Loading from "./Loading"
import InspiredInteriors from "./InspiredInteriors";
import {Routes, Route} from 'react-router-dom'

function ProjectPortfolio () {
 

    
    return (
        <div className="m-1 sm:m-5 relative block">
        <div className="sm:hidden"><MobileMenu /></div>
        <NavBar />
        <div className="m-5 flex">
                <div className = "flex-col justify-center text-center">
                    <div className="flex justify-center">
                        <h2 className="text-9xl sm:text-[200px] font-fun pb-10 font-bold">work.</h2>
                    </div>
                    <div className="flex justify-end ">
                        <div className="sm:w-11/12 mx-5 flex-col text-right">
                        <Routes>
                            <Route exact path="/" element={<Home />}/>
                            <Route path="about" element={<About />} />
                            <Route path="contact" element={<Contact />}/>
                            <Route path="portfolio/*" element={<ProjectPortfolio />}/>
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectPortfolio
