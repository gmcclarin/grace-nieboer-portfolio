import NavBar from "./NavBar";
import MobileMenu from "./MobileMenu";
import { NavLink } from "react-router-dom";
import Time from "./Time";
import { RevealOnScroll } from "./RevealOnScroll";
import DarkMode from "./DarkMode";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons'

function ProjectPortfolio () {
    
    return (
        <div className="bg-white relative block no-scrollbar overflow-y-scroll overflow-x-hidden">
        <div className="sm:hidden "><MobileMenu /></div>
        <div className="absolute z-50 top-3 right-3">
            <DarkMode />
        </div>
        <NavBar />
        <div className="flex">
                <div className = "mx-auto text-center">
                    <div className="h-screen w-screen text-3xl md:text-4xl lg:text-6xl xl:text-7xl">
                        
                        <div id="" className=" bg-white w-screen h-5/6 mb-16 flex items-center justify-center ">
                            {/* <RevealOnScroll> */}
                            <div className="w-full h-full">
                                <div className=" w-full sm:pl-24 p-10 ">
                                    <div className="p-5 text-black">
                                        <div className="font-bold text-2xl text-left animate-pulse">Current projects, in progress</div>
                                        <div className="text-xl text-left italic font-nyght">deployment estimation varies by project </div>
                                    </div>
                                    <div className="p-5">
                                        <div className="text-left text-black pb-2 text-2xl sm:text-3xl font-bold">TYLER'S TREE SOLUTIONS</div>
                                        <div className="text-left text-black pb-2 text-2xl sm:text-3xl font-bold">DATENIGHT</div>
                                        <div className="text-left text-black pb-2 text-2xl sm:text-3xl font-bold">SEASONSCATERING</div>
                                    </div>
                                </div>

                                <div className="w-full h-1/2 flex justify-end text-right">
                                    {/* <div className="w-3/4 sm:w-1/3 h-full"><img className="object-contain w-full h-full" src="https://i.postimg.cc/9QNp5c9g/blurryholdinghands.avif"/></div>   */}
                                    <div className="w-3/4 sm:w-1/2 h-full"><img className="object-contain w-full h-full" src="https://i.postimg.cc/9QNp5c9g/blurryholdinghands.avif"/></div>  
                                </div>

                            </div>
                            {/* </RevealOnScroll> */}
                        </div>


                        <div id="portsection2" className=" px-16 bg-white w-screen h-full flex items-center justify-center">
                            <RevealOnScroll>
                            <div className="flex h-full">
                                    <div className="container mx-auto px-2 py-2 lg:px-5 lg:pt-10">
                                        <div className="-m-1 flex flex-wrap md:-m-2">
                                            <div className="flex w-1/2 flex-wrap">
                                
                                            <div className="w-full p-1 md:p-2">
                                                <NavLink
                                                    to="/twoormore"
                                                    exact="true"
                                                    className="text-center hover:text-orange-500 rounded-md font-bold "
                                                    >TWO OR MORE
                                                </NavLink>
                                            </div>
                                            <div className="w-full p-1 md:p-2">
                                                <img
                                                alt="gallery"
                                                className="block h-full w-full object-contain object-center"
                                                src="https://images.unsplash.com/photo-1685314627216-600b891897ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                                                />
                                            </div>
                                            </div>
                                            <div className="flex w-1/2 flex-wrap">
                                
                                            <div className="w-1/2 p-1 md:p-2">
                                                <img
                                                alt="gallery"
                                                className="block h-full w-full object-cover object-center"
                                                src="https://images.unsplash.com/photo-1527630941-4a229fd674ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGFic3RyYWN0JTIwaGFuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" />
                                            </div>
                                            <div className="w-1/2 p-1 md:p-2">
                                                <img
                                                alt="gallery"
                                                className="block h-full w-full object-cover object-center"
                                                src="https://images.unsplash.com/photo-1544026230-488aeae72c0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" />
                                            </div>
                                            <div className="w-1/2 p-1 md:p-2">
                                                <img
                                                alt="gallery"
                                                className="block h-full w-full object-cover object-center"
                                                src="https://images.unsplash.com/photo-1454923634634-bd1614719a7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ymx1cnJlZCUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" />
                                            </div>
                                            <div className="w-1/2 p-1 md:p-2">
                                                <img
                                                alt="gallery"
                                                className="block h-full w-full object-cover object-center"
                                                src="https://images.unsplash.com/photo-1579736170791-e7ce1a38e203?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        
                                </div>
        
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

                        <div id="portsection1" className="w-screen h-screen flex items-center justify-center  mx-auto pl-5">
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
