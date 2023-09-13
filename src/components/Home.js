import React from "react";
import { NavLink } from "react-router-dom";
import HomePageContact from "./HomePageContact";


function Home () {

    return (
        < div className = "bg-cover bg-black bg-fixed h-auto overflow-auto ">
            <div className="lg:flex">
                <div className="w-full lg:w-1/2 h-auto">
                    <div className="relative hover:italic w-full pb-1/2 bg-neutral-700 font-black ">
                        <h1 className="absolute text-4xl sm:text-8xl text-white top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">GRACE NIEBOER</h1>
                    </div>
                    <div className="flex ">
                        <div className="bg-neutral-100 relative w-full h-0 pb-1/2 text-sm sm:text-2xl lg:text-2xl xl:text-3xl border-2 border-black transform transition duration-500 hover:scale-125 hover:z-10">
                            <p className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 font-bold">SOFTWARE ENGINEER. DEVELOPER. ARCHITECT.</p>
                        </div>
                        <div className="relative w-full h-0 pb-1/2 text-sm sm:text-2xl md:text-xl xl:text-2xl border-2 border-black transform transition duration-500 hover:scale-125 bg-neutral-100 hover:z-10">
                            <p className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">PASSIONATE DEVELOPER WITH A LOVE FOR FINDING CREATIVE SOLUTIONS THAT MAKE THE WORLD BETTER.</p>
                        </div>
                    </div>
                </div>
                <div className = "w-full lg:w-1/2  h-screen text-white text-4xl sm:text-8xl text-center font-fun font-black">
                    <div className="flex ">
                        <div id="home-about" className = "relative w-full h-0 pb-1/2 hover:italic grayscale hover:grayscale-0 transform transition duration-500 hover:scale-125 hover:z-10">
                            <NavLink className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" exact="true" to='/about'>about.</NavLink> 
                        </div>
                        <div id="home-work" className = "relative w-full h-0 pb-1/2 hover:italic grayscale hover:grayscale-0 transform transition duration-500 hover:scale-125 hover:z-10">
                            <video
                            id="video-element"
                                autoPlay
                                loop
                                muted
                                className="w-full absolute"
                              
                            >
                                <source
                                src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-4192-large.mp4"
                                type="video/mp4"
                                />
                            Your browser does not support the video tag.
                            </video>
                            <NavLink  className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" exact="true" to='/portfolio'>work.</NavLink>
                        </div>
                    </div>
                    <div className = "relative hover:italic w-full pb-1/2 bg-neutral-900">
                        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" >
                        <HomePageContact />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;