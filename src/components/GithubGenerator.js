import { NavLink } from "react-router-dom";
import { RevealOnScroll } from "./RevealOnScroll";
import instructionsDark from "../assets/images/portfolio/generatorinstructionsDark.png"
import instructionsLight from "../assets/images/portfolio/generatorInstructions.png"
import preview from "../assets/images/portfolio/githubgenerator.png"

export default function GithubGenerator() {
  return (
    <div className="relative overflow-y-hidden overflow-x-hidden bg-stone-100 text-black p-5">
      <NavLink
        to="/portfolio"
        exact="true"
        className="absolute z-30 -rotate-90 hover:text-orange-500 text-sm sm:text-2xl font-bold translate-y-28 -translate-x-12 top-0 left-3"
      >
        BACK TO WORK
      </NavLink>
      <div className="snap-y snap-mandatory h-screen w-screen overflow-y-scroll overflow-x-hidden ">
        <div className="snap-start snap-always w-screen h-screen relative flex items-center justify-center">
          <img
            src={instructionsDark}
            alt="trees"
            className="absolute top-50 left-50 w-3/4 h-[75vh] object-cover z-0"
          />
          <div className="absolute top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 text-stone-950 text-4xl sm:text-8xl font-black drop-shadow-xl text-center">
            Github Profile Generator
          </div>
        </div>

        <div className="snap-start snap-always flex justify-center items-center">
          <RevealOnScroll>
            <div className="sm:my-14 text-center font-bold sm:py-8">
              <div className="text-3xl p-5">✨ Features </div>
              <div className="w-full text-left justify-between mx-auto text-xl">
                  <div className="m-5 p-2 border-slate-200 rounded-lg border-2 shadow-xl">🔧 Live markdown preview</div>
                  <div className="m-5 p-2 border-slate-200 rounded-lg border-2 shadow-xl"> 🖼️ Customizable sections:  About Me, Skills, Projects, Stats, and Social Links</div>
                  <div className="m-5 p-2 border-slate-200 rounded-lg border-2 shadow-xl">🎨 Styled themes and layouts for aesthetic profiles</div> 
                  <div className="m-5 p-2 border-slate-200 rounded-lg border-2 shadow-xl">💾 One-click copy or
                  download of the finished README </div>
                  <div className="m-5 p-2 border-slate-200 rounded-lg border-2 shadow-xl">💡 Smart prompts and tips for
                  better self-branding</div>  
              </div>
            </div>
          </RevealOnScroll>
        </div>
        <div className="snap-start snap-always w-screen h-screen flex justify-center mx-auto items-center">
          <RevealOnScroll>
            <div className="m-4">
              <div className="text-4xl  font-black">THE TECH STACK</div>
              <div className="text-3xl">Frontend: React + Tailwind CSS</div>
              <div className="text-3xl">
                State Management: React Hook Form + Context API
              </div>
              <div className="text-3xl">Markdown Rendering: react-markdown</div>
              <div className="text-3xl">Deployment: Netlify</div>
            </div>
          </RevealOnScroll>
        </div>
        <div className="snap-start snap-always w-screen h-screen">
          <RevealOnScroll>
            <div className="columns-1 sm:columns-2 gap-4 px-4 sm:px-12 py-10 max-w-screen-xl mx-auto h-full overflow-y-auto">
              {[preview, instructionsLight, instructionsDark].map((img, i) => (
                <div
                  key={i}
                  className="mb-4 overflow-hidden rounded-xl shadow-xl transition-transform duration-500 hover:scale-105 break-inside-avoid"
                >
                  <img
                    src={img}
                    alt={`gallery-img-${i}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
        <div className="snap-start snap-always w-screen h-screen flex justify-center mx-auto items-center">
          <div className="m-4">
            <div className="text-4xl font-black">WANT MORE?</div>
            <div className="transform transition duration-500 hover:scale-125">
              <a
                href="https://github.com/gmcclarin/github-readme-generator"
                target="_blank"
                className="text-3xl"
                rel="noreferrer"
              >
                GITHUB
              </a>
            </div>
            <div className="transform transition duration-500 hover:scale-125">
              <a
                href="https://generate-github-profile-readme.netlify.app/"
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
