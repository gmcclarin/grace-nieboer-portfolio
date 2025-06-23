
import { NavLink } from "react-router-dom";
import about from '../photos/abouttwoormore.png'
import why from '../photos/thewhy.png'
import meet from '../photos/meetbrian.png'
import { RevealOnScroll } from "./RevealOnScroll";


export default function GithubProfileGenerator () {

    return (
        <div className="relative overflow-y-hidden overflow-x-hidden ">
            <NavLink
                to="/portfolio"
                exact="true"
                className="absolute z-30 rounded-full p-1 bg-white bg-opacity-50 -rotate-90 hover:text-orange-500 text-sm sm:text-2xl font-bold translate-y-28 -translate-x-12 top-0 left-3"
                >
                    BACK TO WORK
            </NavLink>
            <div className="snap-y snap-mandatory h-screen w-screen overflow-y-scroll overflow-x-hidden ">
                <div id="twofirstsection" className="snap-start snap-always w-screen h-screen flex justify-center items-center">
                    <div className="text-4xl pb-5 md:text-6xl lg:text-8xl  transform translate-y-12 transition-opacity swishy2 font-black">Github Profile Generator</div>
                </div>
                <div className="snap-start snap-always w-screen h-screen flex justify-center mx-auto pl-5 items-center">
                    <RevealOnScroll>
                    <div className="sm:my-14 text-center font-bold sm:py-8">
                        <div className="text-4xl pb-5  md:text-6xl lg:text-7xl font-black">Github Profile Generator</div>
                        <div className="flex w-3/4 justify-between mx-auto ">
                            <div className="w-1/2 p-2 text-left text-sm file:font-bold sm:text-xl md:text-3xl lg:text-4xl italic "> {`[An educational resource and community internet space for the non-profit, Two or More]`}</div>
                            <div className="w-1/2 p-2 text-left text-sm sm:text-xl md:text-3xl lg:text-4xl italic ">This deployed project was built to help software engineers quickly distinguish their skills directly from their github profile page. Create a *special* README to try it out</div>
                        </div>
                    </div>
                    </RevealOnScroll>
                </div>
                <div className="snap-start snap-always w-screen h-screen flex justify-center mx-auto items-center">
                    <RevealOnScroll>
                    <div className="m-4">
                            <div className="text-4xl  font-black">THE TECH STACK</div>
                            <div className="text-3xl">REACT JS</div>
                            <div className="text-3xl">MARKDOWN</div>
                            <div className="text-3xl">MATERIAL UI</div>
                    </div>
                    </RevealOnScroll>
                </div>
                <div className="snap-start snap-always w-screen h-screen">
                        <div className="lg:flex w-screen h-screen pt-12 px-10 sm:px-32 justify-between items-center">
                            <div className="w-full lg:w-1/2">
                                <div id="colorPalette" className="xl:text-8xl md:text-5xl text-4xl font-black lg:w-1/3 w-full">MISSION AND VISION</div>
                                <div className=" w-full lg:my-8 text-xl 2xl:text-3xl font-bold">Dive into the story behind Two or More.
                                </div>
                                <div className="md:pl-32 pl-16  w-full lg:w-3/4 my-3 text-sm md:text-xl 2xl:text-2xl text-justify font-bold"> Two or More exist in their journey to serve bi/multi-ethnic individuals and their families. Get to know the founder and partners to learn more about the heart behind the non-profit.
                                </div>
                            </div>
                            <div className=" w-full lg:w-1/2 flex-col sm:justify-center aspect-video">
                            <img className="w-1/2 lg:w-full p-2" src={why}  allow="autoplay"  alt="why" />
                            <div className="flex">
                                <img className="w-1/3 md:w-1/4 lg:w-1/3 p-2" src={about}  allow="autoplay"  alt="about"  />
                                <img className="w-1/3 md:w-1/4  lg:w-1/3 p-2" src={meet}  allow="autoplay"  alt="meet"  />
                            </div>
                            </div>
                        </div>
                </div>
                <div className="snap-start snap-always w-screen h-screen">
                        <div className="lg:flex w-screen pt-12 px-10 sm:px-32 justify-between items-center">
                            <div>
                            <div className="xl:text-8xl md:text-7xl text-4xl font-black sm:w-1/3 w-full">LIBRARY</div>
                            <div className=" w-full lg:w-1/3 my-4 sm:my-8 text-xl 2xl:text-3xl font-bold">Resources for learning and growth  
                            </div>
                            <div className="sm:pl-32 pl-16 w-full lg:w-1/2 p-5 text-lg 2xl:text-2xl text-justify font-bold">The LIBRARY provides helpful educational resources, categorized by various material types (digital, print, audio, etc). It also features a vocabulary page that will highlight rotating founder-chosen words that have important meaning within the community.
                            </div>
                            </div>
                           
                            
                        </div>
                </div>
                <div className="snap-start snap-always w-screen h-screen">
                        <div className="lg:flex w-screen h-screen pt-12 px-10 sm:px-32 justify-between items-center">
                            <div className="w-full lg:w-1/2">
                                <div id="colorPalette" className="xl:text-8xl md:text-7xl text-4xl font-black lg:w-1/3 w-full">STORIES</div>
                                <div className=" w-full my-8 text-xl 2xl:text-3xl font-bold">Everyone has a story.
                                </div>
                                <div className="sm:pl-32 w-full lg:w-3/4 p-5 text-lg 2xl:text-2xl text-justify font-bold"> The Story page will feature reader submissions sharing their story. Everyone is welcome to browse stories and are encouraged to share their own experience.
                                </div>
                            </div>
                            <div className=" w-full md:w-1/2 flex sm:justify-center aspect-video">
                            <iframe className="w-full" src="https://player.vimeo.com/video/859198489?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479autoplay=1&loop=1&autopause=0?muted=1"  allow="autoplay"  title="share" />
                            </div>
                        </div>
                </div>
                <div className="snap-start snap-always w-screen h-screen flex justify-center mx-auto items-center">
                <div className="m-4">
                        <div className="text-4xl font-black">WANT MORE?</div>
                        <div className="transform transition duration-500 hover:scale-125">
                            <a href="https://github.com/madalinefitz/Two-or-More" target="_blank"
                            className="text-3xl"
                            rel="noreferrer">GITHUB
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}