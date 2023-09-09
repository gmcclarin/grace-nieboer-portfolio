import React from "react";
import { NavLink } from "react-router-dom";


function Home () {

    return (
        < div className = "bg-cover bg-neutral-100 bg-fixed h-auto overflow-auto ">
            <div className="sm:flex">
                <div className="w-1/2 h-screen ">
                    <div className="relative hover:italic w-full pb-1/2 bg-neutral-700 font-bold ">
                        <h1 className="absolute text-4xl sm:text-[100px] text-white top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">Grace Nieboer</h1>
                    </div>
                    <div className="flex ">
                        <div className="relative w-full h-0 pb-1/2 text-xxl sm:text-2xl lg:text-2xl xl:text-3xl">
                            <p className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">SOFTWARE ENGINEER. DEVELOPER. ARCHITECT.</p>
                        </div>
                        <div className="relative w-full h-0 pb-1/2 text-xxl sm:text-2xl lg:text-2xl xl:text-3xl">
                            <p className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">PASSIONATE DEVELOPER WITH A LOVE FOR FINDING CREATIVE SOLUTIONS THAT MAKE THE WORLD BETTER.</p>
                        </div>
                    </div>
                </div>
                <div className = "w-1/2  h-screen text-white text-8xl text-center font-fun font-black">
                    <div className="flex ">
                        <div id="home-about" className = "relative w-full h-0 pb-1/2 hover:italic grayscale hover:grayscale-0 bg-pink-300">
                            <NavLink className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" exact="true" to='/about'>about.</NavLink> 
                        </div>
                        <div id="home-work" className = "relative w-full h-0 pb-1/2 hover:italic ">
            
                            <NavLink  className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" exact="true" to='/portfolio'>work.</NavLink>
                        </div>
                    </div>
                    <div className = "relative hover:italic w-full pb-1/2 bg-neutral-900">
                        <NavLink className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" exact="true" to='/contact'>contact.</NavLink>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;