import { useState } from "react";
import { NavLink } from "react-router-dom";
import Contact from "./Contact";


function NavBar () {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <nav className="bg-transparent ">
            
            <div className="px-2 sm:px-6 lg:px-8">
                
                <div className="flex">
                    
                    <div onClick={()=> setShowMenu(!showMenu)}  className="sm:hidden p-4 space-y-2 z-10">
                        <div className="w-6 h-0.5 bg-white"></div>
                        <div className="w-6 h-0.5 bg-white"></div>
                        <div className="w-6 h-0.5 bg-white"></div>
                    </div>

                    {/* ------------- FOR MOBILE ---------------- */}
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

                    {/*------------------- FOR SMALL+ SCREENS ----------------  */}
                    <div className="hidden sm:w-1/3 flex-wrap-reverse sm:flex sm:justify-items-start ">
                       <a className="hover:text-white rounded-md px-3 py-2 text-sm sm:text-xl font-medium" 
                            href="mailto:grace.nieboer@outlook.com"
                            >EMAIL  
                        </a>
                        <a className="hover:text-white rounded-md px-3 py-2 text-sm sm:text-xl font-medium" 
                            href="https://www.instagram.com/grayce.elisabeth_/"
                            target="_blank" 
                            rel="noreferrer"
                            >INSTAGRAM 
                        </a>
                        <a className="hover:text-white rounded-md px-3 py-2 text-sm sm:text-xl font-medium" 
                            href="https://medium.com/@grace.nieboer"
                            target="_blank"
                            rel="noreferrer" 
                            >BLOG
                        </a>
                        <a className="hover:text-white rounded-md px-3 py-2 text-sm sm:text-xl font-medium" 
                            href="https://github.com/gnieb"
                            target="_blank" 
                            rel="noreferrer"
                            >GITHUB
                        </a>
                        <a className="hover:text-white rounded-md px-3 py-2 text-sm sm:text-xl font-medium" 
                            href="https://www.linkedin.com/in/gracenieboer/" 
                            target="_blank" 
                            rel="noreferrer"
                            >LINKEDIN
                        </a>
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
                        >CONTACT
                        </NavLink>
                        
                        
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;