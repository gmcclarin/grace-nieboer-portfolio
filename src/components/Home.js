import React from "react";
import { NavLink } from "react-router-dom";


function Home () {

    return (
        < div className = "my-15 p-10 sm:p-20 bg-cover ">
            <div className="sm:flex sm:justify-between">
                <div className="flex-col w-1/4">
                    <div className="font-bold pb-5 text-xl sm:text-3xl">Grace Nieboer</div>
                    <div className="text-xxl sm:text-2xl lg:text-4xl pb-5">SOFTWARE ENGINEER. DEVELOPER. ARCHITECT.</div>
                    <div className="text-xxl sm:text-2xl lg:text-4xl">PASSIONATE DEVELOPER WITH A LOVE FOR FINDING CREATIVE SOLUTIONS THAT MAKE THE WORLD BETTER.</div>
                </div>
                <div className = "text-8xl sm:pt-0 pt-20 md:text-[150px] xl:text-[250px] 2xl:text-[320px] text-right font-fun font-black m-2 ">
                    <div className = "p-2  hover:italic">
                    <NavLink exact="true" to='/about'>about.</NavLink> 
                    </div>
                    <div className = "p-2 hover:italic">
                        <NavLink exact="true" to='/portfolio'>work.</NavLink>
                    </div>
                    <div className = "p-2 hover:italic">
                        <NavLink exact="true" to='/contact'>contact.</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;