import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import MobileMenu from "./MobileMenu";
import Time from "./Time";
import { RevealOnScroll } from "./RevealOnScroll";
import DarkMode from "./DarkMode";

const galleryItems = [
  {
    id: "twofirstsection",
    to: "/twoormore",
    className: "col-span-2 row-span-2 bg-pink-800",
    content: null,
  },
  {
    id: "treeSolutionsPortfolio",
    to: "/treesolutions",
    className: "bg-green-700 row-span-1",
    content: null,
  },
  {
    id: "jobsurge",
    to: "/jobsurge",
    className: "bg-stone-600 row-span-1 flex items-center justify-center",
    content: <Time />, 
  },
  {
    id: "portsection1",
    to: "/inspiredinteriors",
    className: "bg-stone-600 row-span-1",
    content: null,
  },
];

function GalleryItem({ id, to, className, content }) {
  return (
    <NavLink
      key={id}
      id={id}
      to={to}
      exact="true"
      className={`transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl ${className}`}
    >
      {content}
    </NavLink>
  );
}

function ProjectPortfolio() {
  return (
    <div className="bg-white relative block no-scrollbar overflow-x-hidden p-4">
      <div className="sm:hidden">
        <MobileMenu />
      </div>
      <NavBar />

      <div className="flex">
        <div className="mx-auto text-center w-screen">
          <div className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl">
            <div className="bg-white mb-16 flex items-center justify-center">
              <RevealOnScroll>
                <div className="w-full p-4">
                  <div className="w-full sm:pl-24 py-10 px-5">
                    <div className="p-5 text-black">
                      <div className="font-bold text-2xl text-left animate-pulse">
                        Current projects, in progress
                      </div>
                      <div className="text-xl text-left italic font-nyght">
                        deployment estimation varies by project
                      </div>
                    </div>
                    <div
                      id="ellipse"
                      className="sm:w-3/4 p-5 border-2 border-black"
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

            <div className="grid grid-cols-3 gap-7 auto-rows-[200px]">
              {galleryItems.map((item) => (
                <GalleryItem key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPortfolio;
