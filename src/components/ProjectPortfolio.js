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
                    <div id="" className="snap-start snap-always bg-white w-screen h-screen flex items-center justify-center ">
                            <RevealOnScroll>
                            
                                <div className="sm:ml-24 lg:ml-0 w-3/4 ">
                                        
                                            <div className="p-5">
                                                <div className="text-xl text-left">Current project, in progress</div>
                                                <div className="text-xl text-left italic">deployment estimated for march 2024 </div>
                                                
                                            </div>
                                            <div className="text-left text-xl p-5">Tylers Tree Solutions</div>
                                        
                                    
                                </div>

                                <div className="w-full h-full flex justify-end text-right">
                                    <div className="w-1/2  "><img src="https://i.postimg.cc/5NCbQ9HY/Colorful-Noise-Gradient-Motivational-Quote-Instagram-Post-1.png"/></div>
                                </div>
                            
                            </RevealOnScroll>
                        </div>
                        
                        <div id="" className="snap-start snap-always bg-neutral-400 w-screen h-screen flex justify-center mx-auto pl-5 items-center">
                                <Time />
                               <RevealOnScroll >
                                <NavLink
                                    to="/jobsurge"
                                    exact="true"
                                    className=" text-white text-left -rotate-90 px-0 my-0 hover:text-orange-500 rounded-md font-bold text-xl md:text-4xl lg:text-6xl xl:text-8xl"
                                    >JOB SURGE
                                </NavLink>
                                </RevealOnScroll>
                                <div
                                 className="flex fixed right-1/2 bottom-1"
                                >
                                    <p className="text-lg lg:text-xl m-1 mb-4 font-bold text-orange-700">SCROLL</p>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg" height="40" width="40"
                                    className="animate-bounce fill-orange-700" viewBox="0 0 384 512">
                                        <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
                                    </svg>
                                </div>
                        </div>
                        <div id="portsection1" className="snap-start snap-always w-screen h-screen flex items-center justify-center  mx-auto pl-5">
                            <RevealOnScroll  >
                                <NavLink
                                to="/inspiredinteriors"
                                exact="true"
                                className="text-white text-left px-0 my-0 hover:text-orange-500 rounded-md font-bold"
                                >INSPIRED INTERIORS
                            </NavLink>
                            </RevealOnScroll>
                        </div>
                        <div id="portsection2" className=" sm:ml-24 2xl-ml-16 snap-start snap-always bg-white w-screen h-screen flex items-center justify-center ">
                            <RevealOnScroll>
                            <NavLink
                                to="/twoormore"
                                exact="true"
                                className=" hover:text-orange-500 rounded-md font-bold "
                                >TWO OR MORE
                            </NavLink>
                            </RevealOnScroll>
                        </div>
                        
                        <div  className="portsection3 relative snap-start snap-always bg-black w-screen h-screen flex items-center justify-center ">
                                <RevealOnScroll>
                                <NavLink
                                    to="/fryme"
                                    exact="true"
                                    className=" text-stone-400 hover:text-orange-500 rounded-md font-bold "
                                    >FRY ME TO THE MOON
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
