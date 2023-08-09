import React from "react";
import { NavLink } from "react-router-dom";


function Home () {

    return (
        
        < div className = "my-15 p-20 bg-cover">
            <div className="flex justify-between">
                <div className="text-2xl flex-col">
                    <div className="font-bold pb-5 text-3xl">Grace Nieboer</div>
                    <div className="pb-5">SOFTWARE ENGINEER. DEVELOPER. ARCHITECT.</div>
                    <div>PASSIONATE DEVELOPER WITH A LOVE FOR FINDING CREATIVE SOLUTIONS THAT MAKE THE WORLD BETTER.</div>
                </div>
                <div className = "text-4xl sm:text-7xl md:text-[200px] lg:text-[270px] text-right font-fun font-bold m-2">
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
            </div>
        </div>
    )
}
export default Home;