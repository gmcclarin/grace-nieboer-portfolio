
import { NavLink } from "react-router-dom";

function NavBar () {
    return (
        <nav className="my-7 hidden sm:flex sm:flex-col h-100vh bg-transparent content-center justify-center sm:fixed">

                            <NavLink
                            to="/"
                            exact="true"
                            className="hover:text-orange-500 rounded-md py-20  text-sm sm:text-xl font-bold -rotate-90"
                            >
                                HOME
                            </NavLink>
                            <NavLink
                            to="/about"
                            exact="true"
                            className="hover:text-orange-500 rounded-md py-20 text-sm sm:text-xl font-bold -rotate-90"
                            >
                                ABOUT
                            </NavLink>
                            <NavLink
                            to="/portfolio"
                            exact="true"
                            className="hover:text-orange-500 rounded-md py-20 text-sm sm:text-xl font-bold -rotate-90"
                            >
                                WORK
                            </NavLink>
                            <NavLink
                            to="/contact"
                            exact="true"
                            className="hover:text-orange-500 rounded-md py-20 text-sm sm:text-xl font-bold -rotate-90"
                            >CONTACT
                            </NavLink>
        </nav>
    )
}

export default NavBar;