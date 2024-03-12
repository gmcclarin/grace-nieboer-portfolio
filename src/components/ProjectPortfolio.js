import NavBar from "./NavBar";
import MobileMenu from "./MobileMenu";
import { NavLink } from "react-router-dom";
import Time from "./Time";
import { RevealOnScroll } from "./RevealOnScroll";
import DarkMode from "./DarkMode";

function ProjectPortfolio () {
    
    return (
        <div className="bg-white relative block">
        <div className="sm:hidden "><MobileMenu /></div>
        <div className="absolute z-50 top-3 right-3">
            <DarkMode />
        </div>
        <NavBar />
        <div className="flex">
                <div className = "mx-auto text-center">
                    <div className="snap-y snap-mandatory h-screen w-screen overflow-x-hidden text-3xl md:text-4xl lg:text-6xl xl:text-8xl">
                        <div id="" className=" bg-white w-screen h-5/6 flex items-center justify-center ">
                            <RevealOnScroll>
                                <div className="sm:ml-24 lg:ml-0 w-3/4 ">
                                    <div className="p-5 text-black">
                                        <div className="font-bold text-2xl text-left">Current project, in progress</div>
                                        <div className="text-xl text-left italic">deployment estimated for march 2024 </div>
                                    </div>
                                    <div className="text-left text-black text-3xl p-5">Tylers Tree Solutions</div>
                                </div>

                                <div className="w-full h-full flex justify-end text-right">
                                    <div className="w-1/2  "><img src="https://i.postimg.cc/5NCbQ9HY/Colorful-Noise-Gradient-Motivational-Quote-Instagram-Post-1.png"/></div>
                                </div>
                            </RevealOnScroll>
                        </div>

                        <div id="portsection2" className=" sm:ml-24 2xl-ml-16 bg-white w-screen h-5/6 flex items-center justify-center ">
                            <RevealOnScroll>
                                <NavLink
                                    to="/twoormore"
                                    exact="true"
                                    className=" hover:text-orange-500 rounded-md font-bold "
                                    >TWO OR MORE
                                </NavLink>
                            </RevealOnScroll>
                        </div> 
                        
                        <div id="" className="bg-white w-screen h-5/6 flex justify-center mx-auto pl-5 items-center">
                            <Time />
                            <RevealOnScroll >
                                <NavLink
                                    to="/jobsurge"
                                    exact="true"
                                    className="text-black text-left -rotate-90 px-0 my-0 hover:text-orange-500 rounded-md font-bold text-xl md:text-4xl lg:text-6xl xl:text-8xl"
                                    >JOB SURGE
                                </NavLink>
                            </RevealOnScroll>
                        </div>

                        <div id="portsection1" className="w-screen h-5/6 flex items-center justify-center  mx-auto pl-5">
                            <RevealOnScroll  >
                                <NavLink
                                to="/inspiredinteriors"
                                exact="true"
                                className="text-white text-left px-0 my-0 hover:text-orange-500 rounded-md font-bold"
                                >INSPIRED INTERIORS
                            </NavLink>
                            </RevealOnScroll>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectPortfolio 
