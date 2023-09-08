import NavBar from "./NavBar";
import MobileMenu from "./MobileMenu";
import { NavLink } from "react-router-dom";
import Time from "./Time";

function ProjectPortfolio () {
 
    
    return (
        <div className="relative block overscroll-contain">
        <div className="sm:hidden"><MobileMenu /></div>
        <NavBar />
        <div className="flex">
                <div className = "mx-auto text-center">
                    <div className="snap-y snap-mandatory h-screen w-screen  overflow-y-scroll overflow-x-hidden text-6xl">
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
                        <div id="portsection3" className="snap-start snap-always bg-zinc-500 w-screen h-screen flex justify-center items-center">
                            
                                
                                    <Time />
                                
                                
                                <NavLink
                                    to="/jobsurge"
                                    exact="true"
                                    className="text-white text-right -rotate-90 p-0 m-0 hover:text-orange-500 rounded-md font-bold"
                                    >JOB SURGE
                                </NavLink>
                                
                            
                        </div>
                        <div className="relative snap-start snap-always bg-zinc-200 w-screen h-screen flex items-center justify-center ">
                            <video
                            autoPlay
                            loop
                            muted
                            className="w-screen h-screen"
                        >
                                <source
                                src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
                                type="video/mp4"
                                />
                            Your browser does not support the video tag.
                            </video>
                            <NavLink
                                to="/fryme"
                                exact="true"
                                className="absolute right-0 bottom-20 hover:text-orange-500 rounded-md p-5 font-bold "
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
