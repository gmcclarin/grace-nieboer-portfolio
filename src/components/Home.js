import React from "react";
import { NavLink } from "react-router-dom";


function Home () {

    return (
        
        < div className = "my-20 p-20">
            <div className = "text-4xl sm:text-7xl md:text-[200px] text-right font-fun font-bold m-5">
                <div className = "p-2 hover:text-white">
                   <NavLink exact to='/about'>about.</NavLink> 
                </div>
                <div className = "p-2 hover:text-white">
                    <NavLink exact to='/portfolio'>work.</NavLink>
                </div>
                <div className = "p-2 hover:text-white">
                    <NavLink exact to='/contact'>contact.</NavLink>
                </div>
            </div>
            <div className="flex justify-end">
                <div className=" text-3xl sm:text-5xl sm:w-3/4 text-left ">
                    I AM A PASSIONATE DEVELOPER WITH A LOVE FOR FINDING CREATIVE SOLUTIONS THAT MAKE THE WORLD BETTER.
                </div>
            </div>
        </div>
    )
}
export default Home;