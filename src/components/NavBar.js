import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="z-50 text-neutral-800 ml-7 my-20 hidden sm:flex sm:flex-col h-100vh bg-white rounded-full content-center justify-center sm:fixed">
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
    </nav>
  );
}

export default NavBar;
