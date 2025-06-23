import { NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import circle from "../photos/enormouscirclegradient.png";
import { WorkWithMe } from "./WorkWithMe";
import DarkMode from "./DarkMode";

function Home() {
  return (
    <div className="relative bg-zinc-200 bg-center bg-fixed h-screen w-full overflow-x-hidden flex flex-col p-8">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={circle}
          alt="bg-circle"
          className="object-cover opacity-30 blur-lg h-full w-full"
        />
      </div>
      <MobileMenu />

      <div className="sm:flex w-full h-full">
        {/* left half side of the screen */}
        <div className="text-black sm:w-1/2  flex flex-col justify-between h-full">
          <div className="w-full flex pt-5">
            <div className="w-1/2 z-40 mx-2 text-xs font-bold">
              FULL STACK DEVELOPER WITH A LOVE FOR DESIGN AND USER IMPACT.
            </div>
            <div className="w-1/2 z-40  mx-5 text-xs md::text-sm font-bold">
              BUILDING CREATIVE SOLUTIONS THAT MAKE THE WORLD BETTER.
            </div>
          </div>
          <div className="relative w-full flex flex-1 justify-center items-center  text-sm sm:text-2xl lg:text-2xl xl:text-3xl p-5">
            <div className="text-black z-50 font-bold">
              PASSIONATE
              <div className="scroller text-black">
                <span>
                  ENGINEER.
                  <br />
                  DEVELOPER.
                  <br />
                  ARCHITECT.
                </span>
              </div>
            </div>
          </div>

          <div className="text-black z-50 w-full flex pb-3 px-10 font-nyght text-4xl md:text-5xl">
            grace
          </div>
          <div className="text-black z-50 w-full flex pb-5 px-10 font-nyght text-4xl md:text-5xl">
            McCLARIN
          </div>
          <div className=" w-3/4 lg:w-1/2 px-10">
            <WorkWithMe />
          </div>
        </div>

        {/* RIGHT HALF */}
        <div className="sm:w-1/2 relative flex flex-col justify-between items-end z-10">
          <DarkMode />
          <div className="flex-grow"></div>

          <div className="relative flex items-end justify-end space-x-8 ">
            <NavLink
              className="inline-block text-black hover:transition-transform hover:scale-110 font-nyght text-8xl lg:text-[8rem] rotate-[-90deg] origin-top-right -translate-y-[190%] "
              exact="true"
              to="/about"
            >
              about.
            </NavLink>

            <NavLink
              className="inline-block text-black hover:transition-transform hover:scale-110 font-nyght text-8xl lg:text-[8rem] rotate-[-90deg] origin-top-left translate-y-[100%] translate-x-20"
              exact="true"
              to="/portfolio"
            >
              work.
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
