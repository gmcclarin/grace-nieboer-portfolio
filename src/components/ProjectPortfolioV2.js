import MobileMenu from "./MobileMenu";
import NavBar from "./NavBar";
import { NavLink } from "react-router-dom";
import Time from "./Time";
import trees from "../photos/trees.png";
import twoOrMore from "../photos/tomhome.png";
import inspired from "../photos/photo20.avif";
// import preview from "../photos/githubgenerator.png";

export default function ProjectPortfolio2() {
  const isDisabled = true;

  const containedButtonStyle =
    "rounded-full bg-stone-50 px-6 py-3 flex justify-center text-sm text-black m-2 shadow-2xl";
  const outlinedButtonStyle =
    "rounded-full border-2 border-black px-6 py-3 flex justify-center text-sm text-black m-2 shadow-2xl";
  return (
    <div className="bg-white h-screen w-screen overflow-hidden flex flex-col text-center">
      <div className="sm:hidden">
        <MobileMenu />
      </div>
      <NavBar />
      <div className="flex-1 min-h-0 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 h-full w-full gap-8 px-40">
          {/* Column 1 */}
          <div className="bg-stone-100 flex flex-col min-h-0 shadow-2xl">
            <div className="flex-1 min-h-0 overflow-y-auto mt-12">
              <div className=" space-y-4">
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
          <div className="bg-stone-100 flex flex-col min-h-0 mt-24 shadow-2xl">
            <div className="flex-1 min-h-0 overflow-y-auto">
              {/* Section 1 */}
              <div className="relative text-center flex-none">
                <img
                  src={trees}
                  alt="trees"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-white text-xl font-bold">
                  <div className="p-6">TYLER'S TREE SERVICE</div>
                  <NavLink
                    to="/treesolutions"
                    exact="true"
                    className={containedButtonStyle}
                  >
                    Learn More
                  </NavLink>
                </div>
              </div>

              {/* Section 2 */}
              <div className="p-6 flex-none">
                <div className="pt-16 p-6 text-center font-bold text-xl text-black">
                  GITHUB GENERATOR
                </div>
                <NavLink
                  to="/github-profile-generator"
                  exact="true"
                  className={outlinedButtonStyle}
                >
                  Learn More
                </NavLink>
              </div>

              {/* Section 3 (fills remaining space) */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <img
                  src={twoOrMore}
                  alt="twoORMore"
                  className="w-full h-full object-cover"
                />
                <div className="text-center font-bold text-xl text-black p-6">
                  TWO OR MORE
                </div>
                <NavLink
                  to="/twoormore"
                  exact="true"
                  className={outlinedButtonStyle}
                >
                  Learn More
                </NavLink>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="bg-stone-300 flex flex-col min-h-0 pt-24 text-left shadow-2xl">
            <div className="flex-1 flex flex-col min-h-0 h-full overflow-y-auto text-left">
              {/* section 1 */}
              <div className="flex flex-col flex-none p-6">
                <div className="pt-16 p-6 font-bold text-3xl text-black text-center">
                  Current Work @ Wilmac Technologies
                </div>
                <div className="pt-16 p-6 text-center font-bold text-xl text-black">
                  Continuity Replay
                </div>
                <div className="pt-16 p-6 text-center font-bold text-xl text-black">
                  Continuity Workforce Management
                </div>
                <a
                  href="https://wilmactech.com/"
                  r
                  target="_blank"
                  rel="noopener noreferrer"
                  className={containedButtonStyle}
                >
                  Wilmac Technologies
                </a>
              </div>
              {/* section 2 */}
              <div className="flex-1 bg-stone-50 p-6 text-stone-800">
                <div className="pt-16 p-6 text-center font-bold text-xl text-black">
                  Cultivate
                </div>
                <div>Define goals, track growth, and live with intention</div>
                <NavLink
                  to="/cultivate"
                  exact="true"
                  className={`${outlinedButtonStyle} ${
                    isDisabled ? "pointer-events-none opacity-50" : ""
                  }`}
                >
                  In Progress
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
