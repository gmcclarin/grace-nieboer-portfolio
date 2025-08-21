import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import NavBar from "./NavBar";
import MobileMenu from "./MobileMenu";
import circle from "../photos/enormouscirclegradient.png";
import CertModal from "./CertModal";
import { useState } from "react";

export default function Contact() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="relative bg-zinc-200 bg-center bg-fixed h-screen w-full overflow-x-hidden flex flex-col p-4">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={circle}
          alt="bg-circle"
          className="object-cover opacity-10 blur-lg h-full w-full"
        />
      </div>
      <MobileMenu />
      <NavBar />

      <div className="flex justify-center items-center h-screen">
        <div className="z-30 p-5 content-center text-center">
          <div className="flex justify-center">
            <a
              className="hover:scale-150 transform transition duration-500 m-2 sm:m-3 text-black"
              href="https://www.linkedin.com/in/gracemcclarin/"
              target="_blank"
              rel="noreferrer"

            >
              <FontAwesomeIcon
                icon={faLinkedin}
                
                style={{ height: "50px"}}
              />
            </a>
            <a
              className="hover:scale-150 transform transition duration-500 m-2 sm:m-3 text-black"
              href="mailto:grace.nieboer@outlook.com"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ height: "50px" }}
              />
            </a>
            <a
              className="hover:scale-150 transform transition duration-500 m-2 sm:m-3 text-black"
              href="https://www.instagram.com/grayce.elisabeth_/"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ height: "50px" }}
              />
            </a>
            <a
              className="mx-2 hover:scale-150 transform transition duration-500 m-2 sm:m-3 text-black"
              href="https://medium.com/@grace.nieboer"
            >
              <FontAwesomeIcon
                icon={faMedium}
                style={{ height: "50px"}}
              />
            </a>
            <a
              className="mx-2 hover:scale-150 transform transition duration-500 m-2 sm:m-3 text-black"
              href="https://github.com/gmcclarin"
            >
              <FontAwesomeIcon
                icon={faGithub}
                style={{ height: "50px" }}
              />
            </a>
          </div>
        </div>
        <div className="z-40 absolute bottom-40 right-10 flex justify-end w-full">
          <button className="z-40 flex justify-center border-indigo-800 border-2 hover:scale-125 rounded-full py-3 w-1/4 sm:w-1/5">
            <a
              className="text-indigo-800 text-lg font-black px-3 text-center cursor-pointer "
              href="https://docs.google.com/document/d/11j7BKzqYw5y554miHNBvvi2kuwA7iyPftVtoJ9Hyh7o/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              RESUME
            </a>
          </button>
        </div>
        <div className="z-40 absolute bottom-24 right-10 flex justify-end w-full ">
          <CertModal showModal={showModal} setShowModal={setShowModal} />
        </div>
        <div>
          {/* Footer */}
          <div className="z-40 absolute bottom-12 right-10 text-black text-right font-nyght text-[10px] pr-4">
            font nyght by{" "}
            <a
              href="https://www.tunera.xyz/fonts/nyght-serif/"
              target="_blank"
              rel="noreferrer"
            >
              @Maksym Kobuzan
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
