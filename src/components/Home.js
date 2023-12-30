import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faMedium } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import MobileMenu from "./MobileMenu";
import nightwind from "nightwind/helper";
import circle from "../photos/enormouscirclegradient.png"
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { WorkWithMe } from "./WorkWithMe";
// import Cookies from js-cookie
import Cookies from 'js-cookie';
import DarkMode from "./DarkMode";

function Home () {

    // const [darkMode, setDarkMode] = useState(false);
    
    
    
    // useEffect(() => {
    //     if (Cookies.get('darkMode') == 'true') {
    //         setDarkMode((darkMode) => true)
    //     } else {
    //         setDarkMode((darkMode) => false)
    //     }
        
    // }, [])

    // console.log("darkMode state:", darkMode)


    return (

            <div className="relative bg-zinc-200 bg-center bg-fixed h-screen w-screen overflow-auto p-5" >
                <img src={circle} className="rounded-full absolute object-cover m-auto top-0 bottom-0 left-0 right-0" />
                <MobileMenu />
                {/* toggle dark mode */}
                <div className="z-40 flex items-center justify-between w-full sm:mb-12 sm:mt-5 mt-7 mb-7">
                    <WorkWithMe />
                    <DarkMode />
                     {/* <div className="relative">
                        <div 
                            className="flex justify-center items-center rounded-full bg-black w-10 h-10 cursor-pointer"
                            onClick={() => {
                                setDarkMode(!darkMode)
                                nightwind.toggle()
                                Cookies.set('darkMode', !darkMode)
                            }}

                        >
                            {darkMode? 
                            <div className="text-yellow-600 m-auto ">
                                <svg className="fill-yellow-600" xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 512 512"><path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/></svg>
                            </div> :
                            <div className="text-yellow-600 m-auto">
                                <svg className="fill-yellow-600" xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 384 512"><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>
                            </div> }
                        </div>
                    </div> */}
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

                        <div className="text-black z-50 w-full flex m-10 font-nyght text-6xl md:text-8xl">
                            grace nieboer
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
                                <a className="mx-1 sm:mx-2 transform transition duration-500 hover:scale-150 " href="https://www.linkedin.com/in/gracenieboer/" target="_blank" rel="noreferrer">
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
                                <a className="mx-1 sm:mx-2 transform transition duration-500 hover:scale-150" href="https://github.com/gnieb">
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