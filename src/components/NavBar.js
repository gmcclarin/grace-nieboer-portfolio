import { NavLink } from "react-router-dom";
import DarkMode from "./DarkMode";
import { WorkWithMe } from "./WorkWithMe";

function NavBar() {
  return (
    <nav className="z-50 p-5 text-neutral-800 hidden sm:flex w-full content-center items-center justify-between sm:fixed">
      {/* <div className="flex justify-between"> */}
        <WorkWithMe />
        <div className="w-1/2 items-center flex justify-between">
          <NavLink
            to="/"
            exact="true"
            className="hover:text-orange-500  text-sm sm:text-xl font-bold "
          >
            HOME
          </NavLink>
          <NavLink
            to="/about"
            exact="true"
            className="hover:text-orange-500 text-sm sm:text-xl font-bold "
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/portfolio"
            exact="true"
            className="hover:text-orange-500 text-sm sm:text-xl font-bold "
          >
            WORK
          </NavLink>
          <div className="mx-5">
            <DarkMode />
          </div>
        </div>
      {/* </div> */}
    </nav>
  );
}

export default NavBar;
