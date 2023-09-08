import { useState } from "react";
import { NavLink } from "react-router-dom";


export default function PortfolioNav() {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <nav>
            <div className="px-2 sm:px-6 lg:px-8">
                <div className="flex">
                    
                    <div onClick={()=> setShowMenu(!showMenu)}  className="hidden sm:block p-4 space-y-2 z-10">
                        <div className="w-6 h-0.5 bg-black"></div>
                        <div className="w-6 h-0.5 bg-black"></div>
                        <div className="w-6 h-0.5 bg-black"></div>
                    </div>

                    {/* ------------- FOR MOBILE ---------------- */}
                    <ul className={showMenu ? "bg-orange-600 absolute  left-0 top-0 w-full p-5 space-y-5 text-center rounded-b-3xl" : 
                    "hidden bg-orange-600 absolute left-0 top-0 w-full p-7 space-y-8 text-center rounded-b-3xl"}>
                        <li>
                            <NavLink
                            to="/inspiredinteriors"
                            exact="true"
                            className="hover:text-white rounded-md px-3 py-2 text-sm sm:text-xl font-medium"
                            onClick={()=> setShowMenu(!showMenu)}
                            >
                                INSPIRED INTERIORS
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                            to="/twoormore"
                            exact="true"
                            className="hover:text-white rounded-md px-3 py-2 text-sm sm:text-xl font-medium"
                            onClick={()=> setShowMenu(!showMenu)}
                            >
                                TWO Or MORE
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                            to="/jobsurge"
                            exact="true"
                            className="hover:text-white rounded-md px-3 py-2 text-sm sm:text-xl font-medium"
                            onClick={()=> setShowMenu(!showMenu)}
                            >
                                JOB SURGE
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                            to="/fryme"
                            exact="true"
                            className="hover:text-white rounded-md px-3 py-2 text-sm sm:text-xl font-medium"
                            onClick={()=> setShowMenu(!showMenu)}
                            >
                                FRY ME TO THE MOON
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>    
        </nav>
    )
}