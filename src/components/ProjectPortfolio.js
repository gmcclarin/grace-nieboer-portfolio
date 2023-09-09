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
                    <div className="snap-y snap-mandatory h-screen w-screen  overflow-y-scroll overflow-x-hidden text-7xl">
                        <div id="portsection1" className="snap-start snap-always w-screen h-screen flex items-center justify-center ">
                            <NavLink
                                to="/inspiredinteriors"
                                exact="true"
                                className="hover:text-orange-500 text-white rounded-md p-40 font-bold"
                                >INSPIRED INTERIORS
                            </NavLink>
                        </div>
                        <div id="portsection2" className="snap-start snap-always bg-white w-screen h-screen flex items-center justify-center ">
                            <NavLink
                                to="/twoormore"
                                exact="true"
                                className="hover:text-orange-500 rounded-md p-5 font-bold "
                                >TWO OR MORE
                            </NavLink>
                        </div>
                        <div id="portsection3" className="snap-start snap-always bg-zinc-400 w-screen h-screen flex justify-center mx-auto pl-5 items-center">
                                <Time />
                                <NavLink
                                    to="/jobsurge"
                                    exact="true"
                                    className="text-white text-left -rotate-90 px-0 my-0 hover:text-orange-500 rounded-md font-bold"
                                    >JOB SURGE
                                </NavLink>
                                
                            
                        </div>
                        <div className="relative snap-start snap-always bg-black w-screen h-screen flex items-center justify-center ">
                        
                            <video
                            autoPlay
                            loop
                            muted
                            className="min-w-full min-h-screen w-screen h-screen"
                        >
                                <source
                                src="https://assets.mixkit.co/videos/preview/mixkit-full-moon-with-a-soft-haze-4433-large.mp4"
                                type="video/mp4"
                                />
                            Your browser does not support the video tag.
                            </video>
                            <NavLink
                                to="/fryme"
                                exact="true"
                                className="absolute right-1/2 bottom-20 text-white hover:text-orange-500 rounded-md p-5 font-bold "
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
