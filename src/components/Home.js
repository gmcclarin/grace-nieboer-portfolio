import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faMedium } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import MobileMenu from "./MobileMenu";
import circle from "../photos/enormouscirclegradient.png"
import { WorkWithMe } from "./WorkWithMe";
import DarkMode from "./DarkMode";

function Home () {

    return (

            <div className="relative bg-zinc-200 bg-center bg-fixed h-screen w-screen overflow-auto p-5" >
                <img src={circle} className="rounded-full absolute object-cover m-auto top-0 bottom-0 left-0 right-0" />
                <MobileMenu />
                {/* toggle dark mode */}
                <div className="z-40 flex items-center justify-between w-full sm:mb-12 sm:mt-5 mt-7 mb-7">
                    <WorkWithMe />
                    <DarkMode />
                </div>

                <div className="sm:flex w-full justify-center">
                    {/* left half side of the screen */}
                    <div className="text-black sm:w-1/2 h-full flex flex-col items-center justify-between">
                        <div className="w-full flex m-5">
                            <div className="w-1/2 z-40 mx-2 text-xs font-bold">
                                FULL STACK DEVELOPER WITH A LOVE FOR DESIGN AND USER IMPACT.
                            </div>
                            <div className="w-1/2 z-40  mx-5 text-xs md::text-sm font-bold">
                                BUILDING CREATIVE SOLUTIONS THAT MAKE THE WORLD BETTER.
                            </div>
                        </div>
                        <div className="relative w-full flex justify-center items-center h-0 sm:pb-1/2 text-sm sm:text-2xl lg:text-2xl xl:text-3xl p-5">
                            <div className="text-black absolute z-50 top-12 left-1/3  -translate-y-1/2 -translate-x-1/2 font-bold">
                                    PASSIONATE 
                                    <div className="scroller text-black">
                                        <span>
                                        ENGINEER.<br/>
                                        DEVELOPER.<br/> 
                                        ARCHITECT.
                                        </span>
                                    </div>
                                </div> 
                        </div>

                        <div className="text-black z-50 w-full flex m-10 font-nyght text-6xl md:text-7xl">
                            grace McCLARIN
                        </div>
                    </div>

                    {/* right half of the home page */}
                    <div className="sm:w-1/2 w-full h-full flex  items-end relative">
                        
                        <div className="w-11/12 flex flex-col">
                            <div className="z-30 flex justify-center items-center">
                                <NavLink className="text-black hover:transition-transform hover:scale-125 flex text-right font-nyght lg:text-7xl text-4xl " exact="true" to='/about'>
                                <p className=" lg:text-[250px] text-9xl">a</p>
                                <p className="items-end flex">bout.</p>
                                </NavLink>
                            </div>
                            <div className="text-black flex justify-center items-center">
                                <NavLink className=" flex font-nyght lg:text-7xl text-4xl hover:transition-transform hover:scale-125" exact="true" to='/portfolio'>
                                <p className="lg:text-[250px] text-9xl ">w</p><p className="items-end flex">ork.</p></NavLink>
                            </div>
                        </div>
                    
                        <div className="flex border-orange-700 border-2 rounded-full py-1 overflow-y-hidden overflow-x-hidden ">
                            <div className="flex flex-col scroll-y text-orange-700">
                                <a className="mx-1 sm:mx-2 transform transition duration-500 hover:scale-150 " href="https://www.linkedin.com/in/gracemcclarin/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon  icon={faLinkedin} style={{height:"20px"}}/>
                                </a>
                                <a className="mx-1 sm:mx-2 transform transition duration-500 hover:scale-150" href="mailto:grace.nieboer@outlook.com">
                                    <FontAwesomeIcon icon={faEnvelope} style={{height:"20px" }}/>
                                </a>
                                <a className="mx-1 sm:mx-2 transform transition duration-500 hover:scale-150" href="https://www.instagram.com/grayce.elisabeth_/">
                                    <FontAwesomeIcon icon={faInstagram} style={{height:"20px" }}/>
                                </a>
                                <a className="mx-1 sm:mx-2 transform transition duration-500 hover:scale-150" href="https://medium.com/@grace.nieboer">
                                    <FontAwesomeIcon icon={faMedium} style={{height:"20px" }}/>
                                </a>
                                <a className="mx-1 sm:mx-2 transform transition duration-500 hover:scale-150" href="https://github.com/gmcclarin">
                                    <FontAwesomeIcon icon={faGithub} style={{height:"20px"}} />
                                </a>
                            </div>
                        </div>   
                    </div>
                </div>
                <div className="text-black sm:m-0 mt-10 text-right font-nyght text-[8px]">font nyght by 
                    <a href="https://www.tunera.xyz/fonts/nyght-serif/" target="_blank">@Maksym Kobuzan</a>
                </div>
            </div>
    )
}
export default Home;