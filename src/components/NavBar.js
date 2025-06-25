import { NavLink } from "react-router-dom";
import DarkMode from "./DarkMode";

function NavBar() {
  return (
    <nav className="z-50 p-5 text-neutral-800 hidden sm:flex w-full content-center items-center justify-end sm:fixed">
      <NavLink
        to="/"
        exact="true"
        className="hover:text-orange-500 mx-32  text-sm sm:text-xl font-bold "
      >
        HOME
      </NavLink>
      <NavLink
        to="/about"
        exact="true"
        className="hover:text-orange-500 mx-32 text-sm sm:text-xl font-bold "
      >
        ABOUT
      </NavLink>
      <NavLink
        to="/portfolio"
        exact="true"
        className="hover:text-orange-500 mx-32 text-sm sm:text-xl font-bold "
      >
        WORK
      </NavLink>
      <div className="mx-8">
        <DarkMode />
      </div>
    </nav>
  );
}

export default NavBar;
