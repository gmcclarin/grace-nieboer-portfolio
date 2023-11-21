import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function MobileMenu () {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <nav className="">
            <div className=" sm:px-6 lg:px-8">
                <div className="flex">
                    
                    <div onClick={()=> setShowMenu(!showMenu)}  className="sm:hidden fixed top-3 left-3 p-1 space-y-1 z-10">
                        <div className="w-6 h-0.5 bg-zinc-800"></div>
                        <div className="w-6 h-0.5 bg-zinc-800"></div>
                        <div className="w-6 h-0.5 bg-zinc-800"></div>
                    </div>

                    {/* ------------- FOR MOBILE ---------------- */}
                    <ul className={showMenu ? "bg-orange-600 absolute z-30  left-0 top-0 w-full p-5 space-y-5 text-center rounded-b-3xl" : 
                    "hidden bg-orange-600 absolute left-0 top-0 w-full p-7 space-y-8 text-center rounded-b-3xl"}>
                        <li>
                            <NavLink
                            to="/"
                            exact="true"
                            className="hover:text-white rounded-md px-3 py-2 text-sm sm:text-xl font-medium"
                            onClick={()=> setShowMenu(!showMenu)}
                            >
                                HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                            to="/about"
                            exact="true"
                            className="hover:text-white rounded-md px-3 py-2 text-sm sm:text-xl font-medium"
                            onClick={()=> setShowMenu(!showMenu)}
                            >
                                ABOUT
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                            to="/portfolio"
                            exact="true"
                            className="hover:text-white rounded-md px-3 py-2 text-sm sm:text-xl font-medium"
                            onClick={()=> setShowMenu(!showMenu)}
                            >
                                WORK
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                            to="/contact"
                            exact="true"
                            className="hover:text-white rounded-md px-3 py-2 text-sm sm:text-xl font-medium"
                            onClick={()=> setShowMenu(!showMenu)}
                            >
                                CONTACT
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>    
        </nav>
    )
}