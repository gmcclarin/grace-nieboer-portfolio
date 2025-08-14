import MobileMenu from "./MobileMenu";
import NavBar from "./NavBar";
import { NavLink } from "react-router-dom";
import Time from "./Time";
import { useEffect } from "react";
import trees from "../photos/trees.png";
import twoOrMore from "../photos/tomhome.png";
import inspired from "../photos/photo20.avif";
import lapTop from "../photos/roseLaptop.jpg";
import circle from "../photos/enormouscirclegradient.png";
import preview from "../photos/githubgenerator.png";

export default function ProjectPortfolio2() {
  return (
    <div className="bg-zinc-100 h-screen w-screen overflow-hidden flex flex-col">
      <div className="sm:hidden">
        <MobileMenu />
      </div>
      <NavBar />
      <div className="flex-1 min-h-0 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 h-full w-full gap-8 px-40">
          
          {/* Column 1 */}
          <div className="bg-white flex flex-col min-h-0">
            <div className="mt-12 p-4 border-b font-semibold">01</div>

            <div className="flex-1 min-h-0 overflow-y-auto">
              <div className="py-16 space-y-4">
                <div className="p-6 space-y-4 text-center font-bold text-xl">
                  INSPIRED INTERIORS
                </div>
                <div>
                  <img src={inspired} alt="mini_inspired"/>
                </div>
                <div className="p-6 space-y-4 text-center">
Bringing color, texture, and inspiration together — one moodboard at a time                </div>
                <Time />
                <div className="p-6 space-y-4">
                  web scraping working hard here
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="bg-white flex flex-col min-h-0 mt-24">
            <div className="p-4 border-b font-semibold">02</div>
            <div className="flex-1 min-h-0 overflow-y-auto">
              <div className="p-6 space-y-4">
                
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="bg-white flex flex-col min-h-0">
            <div className="mt-12 p-4 border-b font-semibold">03</div>
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

