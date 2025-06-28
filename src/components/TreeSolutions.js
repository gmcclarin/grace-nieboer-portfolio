import { NavLink } from "react-router-dom";
import { RevealOnScroll } from "./RevealOnScroll";
import contact from "../photos/contact.png";
import marquis from "../photos/marquis.png";

export default function TreeSolutions() {
  return (
    <div className="relative overflow-y-hidden overflow-x-hidden ">
      <NavLink
        to="/portfolio"
        exact="true"
        className="absolute z-30 -rotate-90 hover:text-orange-500 text-sm sm:text-2xl font-bold translate-y-28 -translate-x-12 top-0 left-3"
      >
        BACK TO WORK
      </NavLink>
      <div className="snap-y snap-mandatory h-screen w-screen overflow-y-scroll overflow-x-hidden ">
        <div
          id=""
          className="snap-start snap-always w-screen h-screen flex justify-center items-center"
        >
          <div className="text-4xl pb-5 sm:text-8xl  transform translate-y-12 transition-opacity swishy2 font-black">
            TYLER'S TREE SOLUTIONS
          </div>
        </div>
        <div className="snap-start snap-always w-screen h-screen flex justify-center mx-auto pl-5 items-center">
          <RevealOnScroll>
            <div className="sm:my-14 text-center font-bold sm:py-8">
              <div className="text-4xl pb-5 md:text-6xl lg:text-7xl font-black">
                TYLER'S TREE SOLUTIONS
              </div>
              <div className="flex w-full sm:w-3/4 justify-between mx-auto ">
                <div className="w-1/2 m-4 text-left file:font-bold sm:text-xl md:text-3xl lg:text-4xl italic  font-bold">
                  {" "}
                  {`[A Tree Solutions services project ]`}
                </div>
                <div className="w-1/2 m-4 text-md text-left font-bold sm:text-lg md:text-3xl italic ">
                  This client was expanding their business and needed a central
                  place to direct potential leads, submit a contact info for a
                  quote, and list services in a way that prioritizes UX/UI
                  design. .
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
        <div className="snap-start snap-always w-screen h-screen flex justify-center mx-auto items-center">
          <RevealOnScroll>
            <div className="m-4">
              <div className="text-4xl  font-black">THE TECH STACK</div>
              <div className="text-3xl">REACT JS</div>
              <div className="text-3xl">JAVASCRIPT</div>
              <div className="text-3xl">EMAILJS</div>
              <div className="text-3xl">TAILWIND</div>
              <div className="text-3xl">FORMIK</div>
              <div className="text-3xl">FONTAWESOME</div>
            </div>
          </RevealOnScroll>
        </div>
        <div className="snap-start snap-always w-screen h-screen">
          <div className="lg:flex w-screen pt-12 px-10 sm:px-32 justify-between items-center">
            <div>
      <div className="flex items-center justify-center w-[90%] m-10 max-w-4xl aspect-video overflow-hidden rounded-xl shadow-xl ">
                <img src={marquis} alt="marquis" />
              </div>
      <div className="flex items-center justify-center w-[90%] m-10 max-w-4xl aspect-video overflow-hidden rounded-xl shadow-xl ">
                <img src={contact} alt="contact" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
        <div className="snap-start snap-always w-screen h-screen flex justify-center mx-auto items-center">
          <div className="m-4">
            <div className="text-4xl font-black">WANT MORE?</div>
            <div className="transform transition duration-500 hover:scale-125">
              <a
                href="https://github.com/gmcclarin/tyler"
                target="_blank"
                className="text-3xl"
                rel="noreferrer"
              >
                GITHUB
              </a>
            </div>
            <div className="transform transition duration-500 hover:scale-125">
              <a
                href="https://tylerstreesolutions.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="text-3xl"
              >
                LIVE PROJECT
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
