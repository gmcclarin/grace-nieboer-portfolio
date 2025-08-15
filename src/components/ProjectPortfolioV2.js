import MobileMenu from "./MobileMenu";
import NavBar from "./NavBar";
import { NavLink } from "react-router-dom";
import Time from "./Time";
import trees from "../photos/trees.png";
import twoOrMore from "../photos/tomhome.png";
import inspired from "../photos/photo20.avif";
import preview from "../photos/githubgenerator.png";

export default function ProjectPortfolio2() {
  const moreButtonStyle = "rounded-full bg-white px-6 py-2 flex justify-center"
  
  return (
    <div className="bg-zinc-100 h-screen w-screen overflow-hidden flex flex-col text-center">
      <div className="sm:hidden">
        <MobileMenu />
      </div>
      <NavBar />
      <div className="flex-1 min-h-0 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 h-full w-full gap-8 px-40">
          {/* Column 1 */}
          <div className="bg-white flex flex-col min-h-0">
            <div className="flex-1 min-h-0 overflow-y-auto mt-12">
              <div className="py-6 space-y-4">
                <div className="p-6 text-center font-bold text-xl">
                  INSPIRED INTERIORS
                </div>
                <div>
                  <img src={inspired} alt="mini_inspired"/>
                </div>
                <div className="p-6 space-y-4 text-center">
                  Bringing color, texture, and inspiration together — one moodboard at a time               
                </div>
                {/* JOB SURGE */}
                  <div className="bg-stone-400 p-6 py-16">
                  <Time />
                  <div className="p-6 space-y-4 text-center">
                    <div className="font-bold text-xl">JOB SURGE</div>
                  web scraping working hard here
                </div>
                {/* <div className="flex justify-stretch"> */}
                  <NavLink to="/jobsurge" exact="true" className={moreButtonStyle}>Learn More</NavLink>
                {/* </div> */}
                </div>
                
                
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="bg-white flex flex-col min-h-0 mt-24">
            <div className="p-4 border-b font-semibold text-black">02</div>
            <div className="flex-1 min-h-0 overflow-y-auto">
              <div className="p-6 space-y-4">
                
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="bg-white flex flex-col min-h-0">
            <div className="mt-12 p-4 border-b font-semibold text-black">03</div>
            <div className="flex-1 min-h-0 overflow-y-auto">
              <div className="p-6 space-y-4">
                Currently working on the production of two new products in the Continuity Suite @ WILMAC Technologies :
                 
              </div>
              <div className="p-6 space-y-4">
                Continuity Replay
              </div>
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

