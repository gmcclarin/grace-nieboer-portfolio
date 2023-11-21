import React from "react";
import { NavLink } from "react-router-dom";
import HomePageContact from "./HomePageContact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faMedium } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import MobileMenu from "./MobileMenu";


function Home () {

    return (

            <div className="home bg-cover bg-fixed h-screen w-screen overflow-auto p-5" >
                <MobileMenu />
                <div className="sm:flex w-full justify-center">
                    {/* left half side of the screen */}
                    <div className="sm:w-1/2 h-full flex flex-col items-center justify-between">
                        <div className="w-full flex  m-5">
                            <div className="w-1/2  mx-2 text-xs font-bold">
                                FULL STACK DEVELOPER WITH A LOVE FOR DESIGN AND USER IMPACT.
                            </div>
                            <div className="w-1/2 mx-5 text-xs md::text-sm font-bold">
                                BUILDING CREATIVE SOLUTIONS THAT MAKE THE WORLD BETTER.
                            </div>
                        </div>
                        <div className="relative w-full flex justify-center items-center h-0 sm:pb-1/2 text-sm sm:text-2xl lg:text-2xl xl:text-3xl p-5">
                            <div className="absolute top-12 left-1/3 sm:left-1/4 -translate-y-1/2 -translate-x-1/2 font-bold">
                                    PASSIONATE 
                                    <div className="scroller">
                                        <span>
                                        ENGINEER.<br/>
                                        DEVELOPER.<br/> 
                                        ARCHITECT.
                                        </span>
                                    </div>
                                </div> 
                        </div>

                        <div className="w-full flex m-10 font-nyght text-6xl md:text-8xl">
                            grace nieboer
                        </div>
                    </div>

                    {/* right half of the home page */}
                    <div className="sm:w-1/2 w-full h-full flex  items-end relative">
                        <div className="w-11/12 flex flex-col">
                            <div className="z-30 flex justify-center items-center">
                                <NavLink className=" hover:transition-transform hover:scale-125 flex text-right font-nyght lg:text-7xl text-4xl " exact="true" to='/about'>
                                <p className=" lg:text-[250px] text-9xl ">a</p>
                                <p className="items-end flex">bout.</p>
                                </NavLink>
                            </div>
                            <div className="flex justify-center items-center">
                                <NavLink className=" flex font-nyght lg:text-7xl text-4xl hover:transition-transform hover:scale-125" exact="true" to='/portfolio'>
                                <p className="lg:text-[250px] text-9xl ">w</p><p className="items-end flex">ork.</p></NavLink>
                            </div>
                        </div>
                    
                        <div className="flex border-orange-600 border-2 rounded-full py-1 overflow-y-hidden overflow-x-hidden ">
                            <div className="flex flex-col scroll-y">
                                <a className="mx-1 sm:mx-2 transform transition duration-500 hover:scale-150 " href="https://www.linkedin.com/in/gracenieboer/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon  icon={faLinkedin} style={{height:"20px",color: "#ea580c"}}/>
                                </a>
                                <a className="mx-1 sm:mx-2 transform transition duration-500 hover:scale-150" href="mailto:grace.nieboer@outlook.com">
                                    <FontAwesomeIcon icon={faEnvelope} style={{height:"20px", color:"#ea580c", }}/>
                                </a>
                                <a className="mx-1 sm:mx-2 transform transition duration-500 hover:scale-150" href="https://www.instagram.com/grayce.elisabeth_/">
                                    <FontAwesomeIcon icon={faInstagram} style={{height:"20px", color:"#ea580c", }}/>
                                </a>
                                <a className="mx-1 sm:mx-2 transform transition duration-500 hover:scale-150" href="https://medium.com/@grace.nieboer">
                                    <FontAwesomeIcon icon={faMedium} style={{height:"20px",color: "#ea580c", }}/>
                                </a>
                                <a className="mx-1 sm:mx-2 transform transition duration-500 hover:scale-150" href="https://github.com/gnieb">
                                    <FontAwesomeIcon icon={faGithub} style={{height:"20px",color: "#ea580c",}} />
                                </a>
                            </div>
                        </div>
                    
                    </div>
                    
                </div>
            </div>


        // < div className = "bg-cover bg-black bg-fixed h-auto overflow-auto ">
        //     <div className="lg:flex">
        //         <div className="w-full lg:w-1/2 h-auto">
        //             <div className="relative hover:italic w-full pb-1/2 bg-neutral-700 font-black ">
        //                 <h1 className="absolute text-4xl sm:text-8xl text-white top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 font-nyght">GRACE NIEBOER</h1>
        //             </div>
        //             <div className="flex ">
        //                 <div className="flex justify-center items-center bg-neutral-100 relative w-full h-0 pb-1/2 text-sm sm:text-2xl lg:text-2xl xl:text-3xl border-2 border-black">
        //                     <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 font-bold">
        //                         PASSIONATE 
        //                         <div className="scroller">
        //                             <span>
        //                             ENGINEER.<br/>
        //                             DEVELOPER.<br/> 
        //                             ARCHITECT.
        //                             </span>
        //                         </div>
        //                     </div> 
        //                 </div>
        //                 <div className="relative w-full h-0 pb-1/2 text-sm sm:text-2xl md:text-xl xl:text-xl border-2 border-black  bg-neutral-100 hover:z-10">
        //                     <p className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform transition duration-500 hover:scale-125">FULL STACK DEVELOPER WITH A LOVE FOR FINDING CREATIVE SOLUTIONS THAT MAKE THE WORLD BETTER.</p>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className = "w-full lg:w-1/2  h-screen text-white text-4xl sm:text-8xl text-center font-fun font-black">
        //             <div className="flex ">
        //                 <div id="home-about" className = "relative w-full h-0 pb-1/2 hover:italic grayscale hover:grayscale-0 transform transition duration-500 hover:scale-125 hover:z-10">
        //                     <NavLink className="w-full pb-1/2 pt-1/2 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" exact="true" to='/about'>about.</NavLink> 
        //                 </div>
        //                 <div id="home-work" className = "relative w-full h-0 pb-1/2 hover:italic grayscale hover:grayscale-0 transform transition duration-500 hover:scale-125 hover:z-10">
        //                     <video
        //                     id=""
        //                     autoPlay={true} 
        //                     loop={true}
        //                     controls={false} 
        //                     playsInline
        //                     muted
        //                     className="video-element w-full absolute"
                              
        //                     >
        //                         <source
        //                         src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-4192-large.mp4"
        //                         type="video/mp4"
        //                         />
        //                     Your browser does not support the video tag.
        //                     </video>
        //                     <NavLink  className=" w-full pb-1/2 pt-1/2 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" exact="true" to='/portfolio'>work.</NavLink>
        //                 </div>
        //             </div>
        //             <div className = "relative hover:italic w-full pb-1/2 bg-neutral-900">
        //                 <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" >
        //                 <HomePageContact />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}
export default Home;