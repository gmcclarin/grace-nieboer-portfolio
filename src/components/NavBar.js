import { useState } from "react";
import { NavLink } from "react-router-dom";
import Contact from "./Contact";


function NavBar () {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <nav className="bg-transparent ">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex space-x-2 sm:space-x-10">
                        <h1 className="text-sm sm:text-lg font-display font-bold">grace nieboer, software engineer</h1>
                        
                    </div>
                    <div onClick={()=> setShowMenu(!showMenu)}  className="sm:hidden p-4 space-y-2 z-10">
                        <div className="w-6 h-0.5 bg-white"></div>
                        <div className="w-6 h-0.5 bg-white"></div>
                        <div className="w-6 h-0.5 bg-white"></div>
                    </div>
                    <ul className={showMenu ? "bg-orange-600 absolute left-0 top-0 w-full p-5 space-y-5 text-center rounded-b-3xl" : 
                    "hidden bg-orange-600 absolute left-0 top-0 w-full p-7 space-y-8 text-center rounded-b-3xl"}>
                        <li>
                            <NavLink
                            to="/"
                            exact
                            className="hover:text-white rounded-md px-3 py-2 text-sm sm:text-xl font-medium"
                            onClick={()=> setShowMenu(!showMenu)}
                            >
                                HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                            to="/about"
                            exact
                            className="hover:text-white rounded-md px-3 py-2 text-sm sm:text-xl font-medium"
                            onClick={()=> setShowMenu(!showMenu)}
                            >
                                ABOUT
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                            to="/portfolio"
                            exact
                            className="hover:text-white rounded-md px-3 py-2 text-sm sm:text-xl font-medium"
                            onClick={()=> setShowMenu(!showMenu)}
                            >
                                PORTFOLIO
                            </NavLink>
                        </li>
                    </ul>
                    <div className="hidden sm:flex sm:space-x-4 ">
                        <NavLink
                        to="/"
                        exact
                        className="hover:text-white rounded-md px-3 py-2 text-sm sm:text-xl font-medium"
                        >
                            HOME
                        </NavLink>
                        <NavLink
                        to="/about"
                        exact
                        className="hover:text-white rounded-md px-3 py-2 text-sm sm:text-xl font-medium"
                        >
                            ABOUT
                        </NavLink>
                        <NavLink
                        to="/portfolio"
                        exact
                        className="hover:text-white rounded-md px-3 py-2 text-sm sm:text-xl font-medium"
                        >
                            WORK
                        </NavLink>
                        <NavLink
                        to="/contact"
                        exact
                        className="hover:text-white rounded-md px-3 py-2 text-sm sm:text-xl font-medium"
                        >
                            CONTACT
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;