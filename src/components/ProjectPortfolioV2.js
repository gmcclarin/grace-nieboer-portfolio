import MobileMenu from "./MobileMenu";
import NavBar from "./NavBar";
import { NavLink } from "react-router-dom";
import Time from "./Time";
import trees from "../photos/trees.png";
import twoOrMore from "../photos/tomhome.png";
import inspired from "../photos/photo20.avif";
import preview from "../photos/githubgenerator.png";

export default function ProjectPortfolio2() {
  const containedButtonStyle =
    "rounded-full bg-white px-6 py-3 flex justify-center text-sm text-black";
  const outlinedButtonStyle =
    "rounded-full border-2 border-black px-6 py-3 flex justify-center text-sm text-black";
  return (
    <div className="bg-white h-screen w-screen overflow-hidden flex flex-col text-center">
      <div className="sm:hidden">
        <MobileMenu />
      </div>
      <NavBar />
      <div className="flex-1 min-h-0 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 h-full w-full gap-8 px-40">
          {/* Column 1 */}
          <div className="bg-stone-100 flex flex-col min-h-0">
            <div className="flex-1 min-h-0 overflow-y-auto mt-12">
              <div className="py-6 space-y-4">
                <div className=" p-6 py-16">
                  <div className="p-6 text-center font-bold text-xl text-black">
                    INSPIRED INTERIORS
                  </div>
                  <div>
                    <img src={inspired} alt="mini_inspired" />
                  </div>
                  <div className="p-6 space-y-4 text-cennter text-black">
                    Bringing color, texture, and inspiration together — one
                    moodboard at a time
                  </div>
                  <NavLink
                    to="/inspiredinteriors"
                    exact="true"
                    className={outlinedButtonStyle}
                  >
                    Learn More
                  </NavLink>
                </div>

                {/* JOB SURGE */}
                <div className="bg-stone-400 p-6 py-16">
                  <div className="font-bold text-xl py-6">JOB SURGE</div>
                  <Time />
                  <div className="p-6 space-y-4 text-center">
                    
                    web scraping working hard here
                  </div>
                  {/* <div className="flex justify-stretch"> */}
                  <NavLink
                    to="/jobsurge"
                    exact="true"
                    className={containedButtonStyle}
                  >
                    Learn More
                  </NavLink>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="bg-stone-200 flex flex-col min-h-0 mt-24">
            <div className="flex-1 min-h-0 overflow-y-auto">
              <div className="p-6 space-y-4">
                <div className="p-6 text-center font-bold text-xl text-black">TYLER'S TREE SERVICE</div>
                  {/* example content */}
                                <div className="p-6 text-center font-bold text-xl text-black">
GITHUB GENERATOR</div>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="bg-stone-400 flex flex-col min-h-0 pt-24 text-left p-6">
            <div className="flex-1 min-h-0 overflow-y-auto">
              <div className="p-6 space-y-4 text-justify">
                Currently working on the production of two new products in the
                Continuity Suite @ WILMAC Technologies :
              </div>
              <div className="p-6 space-y-4">Continuity Replay</div>
              <div className="p-6 space-y-4">
                Continuity Workforce Management
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
