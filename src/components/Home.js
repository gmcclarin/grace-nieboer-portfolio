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

          <div className="text-black z-50 w-full flex pb-3 px-10 font-nyght text-6xl md:text-4xl">
            grace
          </div>
          <div className="text-black z-50 w-full flex pb-5 px-10 font-nyght text-6xl md:text-4xl">
            McCLARIN
          </div>
          <div className="w-3/4 px-10">
            <WorkWithMe />
          </div>
        </div>

        {/* RIGHT HALF */}
        <div className="sm:w-1/2 relative flex flex-col justify-between items-end z-10 overflow-hidden">
          <DarkMode />
          <div className="flex-grow"></div>

          <div className="relative flex flex-col items-end justify-end space-x-8 pb-4 pr-4">
            <NavLink
              className="inline-block leading-none text-black hover:transition-transform hover:scale-110 font-nyght text-8xl lg:text-[9rem] origin-bottom-right"
              exact="true"
              to="/about"
            >
              about.
            </NavLink>

            <NavLink
              className="inline-block leading-none text-black hover:transition-transform hover:scale-110 font-nyght text-8xl lg:text-[9rem]  origin-bottom-right"
              exact="true"
              to="/portfolio"
            >
              work.
            </NavLink>
          </div>

          <div className="text-black text-right font-nyght text-[8px] pr-4 pb-1">
            font nyght by{" "}
            <a
              href="https://www.tunera.xyz/fonts/nyght-serif/"
              target="_blank"
              rel="noreferrer"
            >
              @Maksym Kobuzan
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
