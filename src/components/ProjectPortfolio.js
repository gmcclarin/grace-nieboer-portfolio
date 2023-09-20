import NavBar from "./NavBar";
import MobileMenu from "./MobileMenu";
import { NavLink } from "react-router-dom";
import Time from "./Time";
import { useRef, useState, useEffect } from "react";


const RevealOnScroll = ({children}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);


    const callbackFunction = (entries) => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
    }

    const options = {
        root: null,
        rootMargin: "0px",
        threshold:0.1
    }

    useEffect(() => {
            const scrollObserver = new IntersectionObserver(callbackFunction, options);
            if(ref.current) {
                scrollObserver.observe(ref.current)
            }

            return () => {
                if(ref.current) {
                    scrollObserver.unobserve(ref.current)
                    // scrollObserver.disconnect()
                }
            }
        }, []);

        const classes = `transition-opacity duration-2000 
            ${isVisible ? "opacity-100 " : "opacity-0"
            }`;



        return (
            <div ref={ref} className={classes}>
                {children}
            </div>
        );



}

function ProjectPortfolio () {
   

    
    
 
    
    return (
        <div className="bg-white relative block ">
        <div className="sm:hidden"><MobileMenu /></div>
        <NavBar />
        <div className="flex">
                <div className = "mx-auto text-center">
                    <div className="snap-y snap-mandatory h-screen w-screen overflow-x-hidden text-3xl md:text-4xl lg:text-6xl xl:text-8xl">
                        <div id="" className="snap-start snap-always bg-neutral-400 w-screen h-screen flex justify-center mx-auto pl-5 items-center">
                                <Time />
                               <RevealOnScroll >
                                <NavLink
                                    to="/jobsurge"
                                    exact="true"
                                    className=" text-white text-left -rotate-90 px-0 my-0 hover:text-orange-500 rounded-md font-bold"
                                    >JOB SURGE
                                </NavLink>
                                </RevealOnScroll>
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
                                    className=" text-white hover:text-orange-500 rounded-md font-bold "
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
