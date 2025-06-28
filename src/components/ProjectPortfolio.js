import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import MobileMenu from "./MobileMenu";
import Time from "./Time";
import { useEffect } from "react";
import trees from "../photos/trees.png";
import twoOrMore from "../photos/tomhome.png";
import inspired from "../photos/photo20.avif";
import lapTop from "../photos/roseLaptop.jpg"
import circle from "../photos/enormouscirclegradient.png";


const galleryItems = [
  {
    id: "1",
    to: "/twoormore",
    image: twoOrMore,
    label: "Two or More"
  },
  {
    id: "2",
    to: "/treesolutions",
    image: trees,
    label: "Tree Solutions"
  },
  {
    id: "3",
    to: "/jobsurge",
    image: lapTop,
    label: "JobSurge",
    overlay: <Time />
  },
  {
    id: "4",
    to: "/inspiredinteriors",
    image: inspired,
    label: "Inspired Interiors"
  },
];

function GalleryItem({ id, to, image, label, overlay }) {
  return (
    <NavLink
      key={id}
      id={id}
      to={to}
      exact="true"
      className="group relative w-full flex justify-center py-20 overflow-hidden"
    >
      <div className="relative flex items-center justify-center w-[90%] max-w-4xl aspect-video overflow-hidden rounded-xl shadow-xl transition-transform duration-700 ease-in-out transform translate-y-10 opacity-0 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:brightness-90 animate-fade-slide">
        <img
          src={image}
          alt={label}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-3xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {overlay || label}
        </div>
      </div>
    </NavLink>
  );
}

function ProjectPortfolio() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("!opacity-100", "!translate-y-0");
        }
      });
    }, { threshold: 0.3 });

    const items = document.querySelectorAll(".animate-fade-slide");
    items.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white min-h-screen no-scrollbar overflow-x-hidden p-4">
      <div className="sm:hidden">
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

      <div className="flex flex-col gap-24 pt-20">
        {galleryItems.map((item) => (
          <GalleryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default ProjectPortfolio;
