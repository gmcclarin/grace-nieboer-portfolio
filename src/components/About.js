import NavBar from "./NavBar";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import HomePageContact from "./HomePageContact";
import circle from "../photos/enormouscirclegradient.png";

function About() {
  const [openAbout, setOpenAbout] = useState(false);
  const [openBefore, setOpenBefore] = useState(false);
  const [openNow, setOpenNow] = useState(false);
  const [openConnect, setOpenConnect] = useState(false);

  const handleOpenAbout = () => {
    setOpenAbout(true);
    setOpenBefore(false);
    setOpenConnect(false);
    setOpenNow(false);
  };
  const handleOpenBefore = () => {
    setOpenBefore(true);
    setOpenAbout(false);
    setOpenConnect(false);
    setOpenNow(false);
  };

  const handleOpenNow = () => {
    setOpenNow(true);
    setOpenAbout(false);
    setOpenBefore(false);
    setOpenConnect(false);
  };

  const handleOpenConnect = () => {
    setOpenConnect(true);
    setOpenAbout(false);
    setOpenBefore(false);
    setOpenNow(false);
  };

  return (
    <div className="bg-zinc-100 relative h-screen w-screen overflow-auto p-4">
      <MobileMenu />
      <NavBar />
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={circle}
          alt="bg-circle"
          className="object-cover opacity-10 blur-lg h-full w-full"
        />
      </div>

      <div className="relative sm:mx-20 lg:mx-32 mb-5 flex  h-screen items-center justify-center overscroll-x-auto overscroll-y-hidden">
        {openAbout ? (
          <div className="aboutabout z-10 text-white top-50 left-50 text-xl lg:text-2xl  w-3/4 xl:w-1/4 h-3/4 flex justify-center items-center rounded-full ">
            <div className="flex flex-col items-center justify-center bg-gray-900 opacity-70 rounded-full h-full w-full">
              <p className="m-4 p-2 text-white ">
                Hi, I’m Grace — a full-stack software engineer passionate about
                clean, human-centered design. I bring creativity into every
                corner of my work, whether it's crafting elegant code or
                intuitive user flows. When I'm not building, you’ll probably
                find me at kickboxing or hunting for vintage gems in thrift
                stores.
              </p>
            </div>
          </div>
        ) : (
          <div
            onClick={handleOpenAbout}
            className="aboutabout cursor-pointer w-1/5 h-1/2   bg-neutral-400 rounded-full transform transition duration-500 hover:scale-125 flex justify-center items-center overflow-hidden "
          >
            <div className="flex items-end -rotate-90 font-black text-4xl sm:text-7xl text-orange-600 font-nyght ">
              <p>hi</p>
            </div>
          </div>
        )}
        {openBefore ? (
          <div className="aboutbackground z-10 text-white bg-neutral-600 top-50 left-50 text-sm md:text-md lg:text-lg 2xl:text-2xl w-3/4 xl:w-1/4 h-3/4 flex justify-center items-center rounded-full ">
            <div className="flex flex-col items-center justify-center bg-gray-900 opacity-70 rounded-full h-full w-full">
              <p className="my-1 sm:m-4 p-2 text-white rounded-lg">
                Before tech, I earned my Master’s in Public Administration and
                worked in Human Resources. I specialized in conflict resolution
                and supported multilingual, cross-functional teams. That
                experience taught me the power of empathy and communication —
                two tools I now use daily in collaborative software development.
              </p>
            </div>
          </div>
        ) : (
          <div
            onClick={handleOpenBefore}
            className="aboutbackground cursor-pointer w-1/5 h-1/2 bg-neutral-400 rounded-full transform transition duration-500 hover:scale-125 flex justify-center items-center overflow-hidden "
          >
            <div className="flex items-end -rotate-90 font-black text-4xl sm:text-7xl text-orange-600 font-nyght ">
              <p>background</p>
            </div>
          </div>
        )}

        {openNow ? (
          <div className="aboutnow z-10 text-white bg-neutral-600 top-50 left-50 text-lg sm:text-xl lg:text-2xl w-3/4 xl:w-1/4 h-3/4 flex justify-center items-center rounded-full ">
            <div className="flex flex-col items-center justify-center bg-gray-900 opacity-70 rounded-full h-full w-full">
              <p className="m-4 p-2 text-white ">
                I’m currently a software engineer at Wilmac Technologies, enhancing their flagship product, Continuity Replay. I work closely with product, support, and engineering teams across the stack. I recently earned my AWS Cloud Practitioner certification and am diving deeper into C# and cloud architecture.
              </p>
            </div>
          </div>
        ) : (
          <div
            onClick={handleOpenNow}
            className="aboutnow cursor-pointer w-1/5  h-1/2 bg-neutral-600 rounded-full transform transition duration-500 hover:scale-125 overflow-hidden flex justify-center items-center "
          >
            <div className="flex items-end -rotate-90 font-black text-4xl sm:text-7xl text-orange-600 font-nyght ">
              <p>now</p>
            </div>
          </div>
        )}

        {openConnect ? (
          <div className="aboutconnect z-10 text-white bg-neutral-800 top-50 left-50 text-xl sm:text-2xl lg:text-3xl xl:text-3xl text-justify w-2/3 xl:w-1/4 h-3/4 flex justify-center items-center rounded-full ">
            <div className="flex flex-col items-center justify-center bg-gray-900 opacity-70 rounded-full h-full w-full">
              <p className="m-4 p-2 text-white">Let’s build something great — or just say hey! Whether it’s a project idea, a tech question, or a meme worth sharing, I’d love to hear from you.</p>
              <HomePageContact />
            </div>
          </div>
        ) : (
          <div
            onClick={handleOpenConnect}
            className="aboutconnect cursor-pointer w-1/5 h-1/2 bg-neutral-800 rounded-full transform transition duration-500 hover:scale-125 flex justify-center items-center overflow-hidden"
          >
            <div className="flex items-end -rotate-90 font-black text-4xl sm:text-7xl text-orange-600 font-nyght ">
              <p>connect</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default About;
