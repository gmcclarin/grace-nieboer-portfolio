import NavBar from "./NavBar";
import MobileMenu from "./MobileMenu";
import { NavLink } from "react-router-dom";
import Time from "./Time";
import { RevealOnScroll } from "./RevealOnScroll";
import circle from "../photos/enormouscirclegradient.png";

function ProjectPortfolio() {
  return (
    <div className="bg-neutral-100 relative block no-scrollbar overflow-x-hidden p-4 ">
      <div className="sm:hidden ">
        <MobileMenu />
      </div>
      <NavBar />
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={circle}
          alt="bg-circle"
          className="object-cover opacity-10 blur-lg h-full w-full"
        />
      </div>
      <div className="flex">
        <div className="mx-auto text-center">
          <div className="w-screen text-3xl md:text-4xl lg:text-6xl xl:text-7xl">
            <div className="mb-16 flex items-center justify-center ">
              <RevealOnScroll>
                <div className="w-full p-4">
                  <div className=" w-full sm:pl-24 py-10 px-5 ">
                    <div className="p-5 text-black">
                      <div className="font-bold text-2xl text-left animate-pulse">
                        Current projects, in progress
                      </div>
                      <div className="text-xl text-left italic font-nyght">
                        deployment estimation varies by project{" "}
                      </div>
                    </div>
                    <div
                      id="ellipse"
                      className="sm:w-3/4 p-5 border-2 border-black "
                    >
                      <div className="text-left text-black pb-2 text-2xl sm:text-3xl font-bold hover:text-orange-700 hover:translate-x-3">
                        TYLER'S TREE SOLUTIONS
                      </div>
                      <div className="text-left text-black pb-2 text-2xl sm:text-3xl font-bold hover:text-orange-700 hover:translate-x-3">
                        SEASONSCATERING
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex justify-center sm:justify-end text-right">
                    <div className="w-3/4 sm:w-1/2">
                      <img
                        className="object-contain w-full"
                        src="https://i.postimg.cc/9QNp5c9g/blurryholdinghands.avif"
                        alt="holding_hands"
                      />
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
            <div className=" grid grid-flow-row-dense grid-cols-3 gap-7">
              <NavLink
                id="twofirstsection"
                className=" w-full row-span-6 col-span-2 bg-pink-800 transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl"
                to="/twoormore"
                exact="true"
              ></NavLink>
              <NavLink
                id="treeSolutionsPortfolio"
                to="/treesolutions"
                exact="true"
              ></NavLink>
              <NavLink
                to="/jobsurge"
                exact="true"
                className="bg-stone-600 row-span-2 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl"
              >
                <Time />
              </NavLink>

              <NavLink
                id="portsection1"
                to="/inspiredinteriors"
                exact="true"
                className="bg-stone-600 flex flex-col row-span-5 items-center justify-center transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl"
              ></NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPortfolio;
