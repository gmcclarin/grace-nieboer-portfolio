import NavBar from "./NavBar";
import MobileMenu from "./MobileMenu";
import { NavLink } from "react-router-dom";
import Time from "./Time";
import { RevealOnScroll } from "./RevealOnScroll";
import DarkMode from "./DarkMode";

function ProjectPortfolio() {
  return (
    <div className="bg-white relative block no-scrollbar overflow-y-scroll overflow-x-hidden">
      <div className="sm:hidden ">
        <MobileMenu />
      </div>
      <div className="absolute z-50 top-3 right-3">
        <DarkMode />
      </div>
      <NavBar />
      <div className="flex">
        <div className="mx-auto text-center">
          <div className="h-screen w-screen text-3xl md:text-4xl lg:text-6xl xl:text-7xl">
            <div
              className=" bg-white w-screen h-5/6 mb-16 flex items-center justify-center "
            >
              <RevealOnScroll>
                <div className="w-full h-full">
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
                  <div className="w-full h-1/2 flex justify-center sm:justify-end text-right">
                    <div className="w-3/4 sm:w-1/2 h-full">
                      <img
                        className="object-contain w-full h-full"
                        src="https://i.postimg.cc/9QNp5c9g/blurryholdinghands.avif"
                        alt="holding_hands"
                      />
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
              <div className="flex fixed right-1/2 bottom-10">
                <p className="text-lg lg:text-xl m-1 mb-4 font-bold text-orange-600 font-nyght">
                  scroll
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  className="animate-bounce fill-orange-600"
                  viewBox="0 0 384 512"
                >
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </div>
            </div>
            <div className="h-full  grid grid-flow-row-dense grid-cols-3 gap-4 m-5">
              <NavLink
                id="twofirstsection"
                className=" w-full h-full row-span-4 col-span-2 bg-pink-800 transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl"
                to="/twoormore"
                exact="true"
              >
              </NavLink>

              
                
                <NavLink to="/jobsurge" exact="true" className="bg-stone-600 row-span-2 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl">
                  <Time />
                </NavLink>

                <NavLink id="portsection1" to="/inspiredinteriors" exact="true"
                className="bg-stone-600 flex flex-col row-span-2 items-center justify-center transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl">
                  INSPIRED INTERIORS
                </NavLink>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPortfolio;
