import MobileMenu from "./MobileMenu";
import NavBar from "./NavBar";
import { NavLink } from "react-router-dom";
import Time from "./Time";
import trees from "../photos/trees.png";
import twoOrMore from "../photos/tomhome.png";
import inspired from "../photos/photo20.avif";
import AutoScroll from "./AutoScroll";

export default function ProjectPortfolio2() {
  const isDisabled = true;

  const containedButtonStyle =
    "rounded-full bg-stone-50 px-6 py-3 flex justify-center text-sm text-black m-2 shadow-2xl transition duration-700 ease-in-out hover:scale-110";
  const outlinedButtonStyle =
    "rounded-full border-2 border-black px-6 py-3 flex justify-center text-sm text-black m-2 shadow-2xl transition duration-700 ease-in-out hover:scale-110";
  return (
    <div className="bg-white h-screen w-screen flex flex-col text-center">
      <div className="sm:hidden">
        <MobileMenu />
      </div>
      <NavBar />
      <div className="flex-1 min-h-0 ">
        <div className="grid sm:grid-cols-3 h-full w-full gap-4 sm:gap-2 lg:gap-8 sm:px-8 xl:px-40">
          {/* Column 1 */}
          <div className="bg-stone-100 flex flex-col min-h-0 shadow-2xl">
            <AutoScroll
              speed={22}
              showScrollbarOnHover
              contentClassName="space-y-4 mt-12"
            >
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
                    moodboard at a time.
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
                  <div className="font-bold text-xl py-6">DEPENDENCY DRIFT</div>
                  <div className="p-6 space-y-4 text-center">
                    A developer tool that detects **dependency drift** between
                    declared dependencies (e.g. `package.json`) and resolved
                    dependencies (e.g. `package-lock.json`) and detect outdated
                    dependencies with update risk levels across GitHub
                    repositories.
                  </div>
                  <a
                    className={outlinedButtonStyle}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/gmcclarin/dependency-drift"
                  >
                    In Progress
                  </a>
                </div>
              </div>
            </AutoScroll>
          </div>

          {/* Column 2 */}
          <div className="bg-stone-100 flex flex-col min-h-0 sm:mt-24 shadow-2xl">
            <AutoScroll reverse speed={28} showScrollbarOnHover>
              {" "}
              {/* Section 1 */}
              <div className="relative text-center flex-none">
                <img
                  src={trees}
                  alt="trees"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-white text-xl font-bold">
                  <div className="p-6">TYLER'S TREE SERVICE</div>
                  <div className="flex justify-between items-center flex-wrap">
                    <NavLink
                      to="/treesolutions"
                      exact="true"
                      className={containedButtonStyle}
                    >
                      More...
                    </NavLink>
                    <a
                      className={containedButtonStyle}
                      href="https://tylerstreesolutions.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LIVE
                    </a>
                  </div>
                </div>
              </div>
              {/* Section 2 */}
              <div className="p-6 py-16 flex-none">
                <div className="pt-16 p-6 text-center font-bold text-xl text-black">
                  GITHUB SPECIAL README GENERATOR
                </div>
                <div className="p-6 text-center text-black">
                  Deployed project that can help build a custom special README
                  to download or copy + paste to any github profile.
                </div>
                <div className="">
                  <NavLink
                    to="/github-profile-generator"
                    exact="true"
                    className={outlinedButtonStyle}
                  >
                    More...
                  </NavLink>
                  <a
                    className={outlinedButtonStyle}
                    href="https://generate-github-profile-readme.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LIVE
                  </a>
                </div>
              </div>
              {/* Section 3 (fills remaining space) */}
              <div className="p-6 py-16 flex-1 flex flex-col justify-between">
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
            </AutoScroll>
          </div>

          {/* Column 3 */}
          <div className="bg-stone-300 flex flex-col min-h-0  text-left shadow-2xl">
            <AutoScroll
              speed={34}
              showScrollbarOnHover
              contentClassName="space-y-0 pt-24"
            >
              {/* section 1 */}
              <div className="flex flex-col flex-none p-6 py-16">
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className={containedButtonStyle}
                >
                  Wilmac Technologies
                </a>
              </div>
              {/* section 2 */}
              <div className="flex-1 bg-stone-50 p-6 py-16 text-stone-800">
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
            </AutoScroll>
          </div>
        </div>
      </div>
    </div>
  );
}
