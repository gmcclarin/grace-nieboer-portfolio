import NavBar from "./NavBar";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import HomePageContact from "./HomePageContact";
import { WorkWithMe } from "./WorkWithMe";
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
    <div className="bg-zinc-100 relative h-screen w-screen overflow-auto p-5">
      <MobileMenu />
      <NavBar />

      <div className="z-40 flex items-center justify-between w-full mt-7 sm:mt-0">
        <WorkWithMe />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <img
          src={circle}
          alt="bg-circle"
          className="object-cover opacity-10 blur-lg h-full w-full"
        />
      </div>

      <div className="relative sm:mx-20 lg:mx-32 mb-5 flex  h-screen items-center justify-center overscroll-x-auto overscroll-y-hidden">
        {openAbout ? (
          <div className="aboutabout  z-10 text-white font-bold  top-50 left-50 text-xl lg:text-2xl  w-3/4 xl:w-1/3 h-full flex justify-center items-center rounded-full ">
            <div className="flex flex-col items-center justify-center bg-gray-900 opacity-70 rounded-full h-full w-full">
              <p className="m-6 p-5 text-white  ">Hi, I'm Grace! </p>
              <p className="m-4 p-2 text-white ">
                {" "}
                I am a full stack software engineer with a love for the creative
                elements of UX / UI
              </p>
              <p className="m-4 p-2 text-white ">
                In my free time, I'm probably kickboxing or thrifting somewhere.
              </p>
            </div>
          </div>
        ) : (
          <div
            onClick={handleOpenAbout}
            className="aboutabout cursor-pointer w-1/5 h-3/4   bg-neutral-400 rounded-full transform transition duration-500 hover:scale-125 flex justify-center items-center overflow-hidden "
          >
            <div className="flex items-end -rotate-90 font-black text-4xl sm:text-7xl text-orange-600 font-nyght ">
              <p className="text-6xl sm:text-9xl ">a</p>
              <p>bout</p>
            </div>
          </div>
        )}
        {openBefore ? (
          <div className="aboutbackground z-10 text-white font-bold bg-neutral-600 top-50 left-50 text-sm md:text-md lg:text-lg 2xl:text-2xl text-justify w-3/4 xl:w-1/3 h-full flex justify-center items-center rounded-full ">
            <div className="flex flex-col items-center justify-center bg-gray-900 opacity-70 rounded-full h-full w-full">
              <p className="my-1 sm:m-4 p-2 text-white rounded-lg">
                I have a Master's degree in Public Administration, with a
                professional background in Human Resources. I've spent the past
                few years of my career partnering with multi-lingual,
                cross-functional teams to resolve conflicts.{" "}
              </p>
              <p className="my-1 sm:m-4 p-2 text-white rounded-lg">
                My unique professional background in complex problem-solving in
                person-focused roles allows me to better collaborate and
                communicate with diverse teams. Technology is built WITH people,
                FOR people.
              </p>
            </div>
          </div>
        ) : (
          <div
            onClick={handleOpenBefore}
            className="aboutbackground cursor-pointer w-1/5 h-3/4 bg-neutral-400 rounded-full transform transition duration-500 hover:scale-125 flex justify-center items-center overflow-hidden "
          >
            <div className="flex items-end -rotate-90 font-black text-4xl sm:text-7xl text-orange-600 font-nyght ">
              <p className="text-6xl sm:text-9xl ">b</p>
              <p>ackground</p>
            </div>
          </div>
        )}

        {openNow ? (
          <div className="aboutnow z-10 text-white font-bold bg-neutral-600 top-50 left-50 text-lg sm:text-xl lg:text-2xl w-3/4 xl:w-1/3 h-full flex justify-center items-center rounded-full ">
            <div className="flex flex-col items-center justify-center bg-gray-900 opacity-70 rounded-full h-full w-full">
              <p className="m-4 p-2 text-white ">
                I work @ Wilmac Technologies with several cross-functional teams
                to enhance their Continuity Replay product.
              </p>
              <p className="m-4 p-2 text-white ">
                I am currently learning C# and various AWS services; I recently
                received the AWS Cloud Practitioner certification and plan to
                continue learning!
              </p>
            </div>
          </div>
        ) : (
          <div
            onClick={handleOpenNow}
            className="aboutnow cursor-pointer w-1/5  h-3/4 bg-neutral-600 rounded-full transform transition duration-500 hover:scale-125 overflow-hidden flex justify-center items-center "
          >
            <div className="flex items-end -rotate-90 font-black text-4xl sm:text-7xl text-orange-600 font-nyght ">
              <p className="text-6xl sm:text-9xl ">n</p>
              <p>ow</p>
            </div>
          </div>
        )}

        {openConnect ? (
          <div className="aboutconnect z-10 text-white bg-neutral-800 top-50 left-50 text-xl sm:text-2xl lg:text-3xl xl:text-3xl text-justify w-2/3 xl:w-1/3 h-full flex justify-center items-center rounded-full ">
            <div className="flex flex-col items-center justify-center bg-gray-900 opacity-70 rounded-full h-full w-full">
              <HomePageContact />
            </div>
          </div>
        ) : (
          <div
            onClick={handleOpenConnect}
            className="aboutconnect cursor-pointer w-1/5 h-3/4 bg-neutral-800 rounded-full transform transition duration-500 hover:scale-125 flex justify-center items-center overflow-hidden"
          >
            <div className="flex items-end -rotate-90 font-black text-4xl sm:text-7xl text-orange-600 font-nyght ">
              <p className="text-6xl sm:text-9xl ">c</p>
              <p>onnect</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default About;
