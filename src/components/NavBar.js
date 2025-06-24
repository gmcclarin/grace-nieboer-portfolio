import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="z-50 text-neutral-800 hidden sm:flex w-full content-center justify-end sm:fixed">
      <NavLink
        to="/"
        exact="true"
        className="hover:text-orange-500 rounded-md px-32  text-sm sm:text-xl font-bold "
      >
        HOME
      </NavLink>
      <NavLink
        to="/about"
        exact="true"
        className="hover:text-orange-500 rounded-md px-32 text-sm sm:text-xl font-bold "
      >
        ABOUT
      </NavLink>
      <NavLink
        to="/portfolio"
        exact="true"
        className="hover:text-orange-500 px-32 text-sm sm:text-xl font-bold "
      >
        WORK
      </NavLink>
    </nav>
  );
}

export default NavBar;
