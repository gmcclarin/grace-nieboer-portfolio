
import { NavLink } from "react-router-dom";

function NavBar () {
    return (
        <nav className="bg-transparent ">
            <div className="px-2 my-5 ">
                <div className="flex">
                    <div className="invisible sm:visible sm:w-1/3 sm:flex-col sm:justify-items-start ">
                        <div>
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
                        <div>
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
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;