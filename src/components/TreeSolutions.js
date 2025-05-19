
import { NavLink } from "react-router-dom";
import explore from '../photos/explorepage.png'
import palette from '../photos/color_palette.png'
import moodboard1 from '../photos/moodboardexample.png'
import moodboard2 from '../photos/moodboard2.png'
import { RevealOnScroll } from "./RevealOnScroll";

export default function TreeSolutions () {

    // const photos = [
    //     {src:"https://i.postimg.cc/VkmSncp2/Screenshot-2023-05-10-at-10-50-29-AM.png",
    //     name:"home page",
    //     isPhoto: true},
    //     {src:"https://i.postimg.cc/Y2fC8fW0/Screenshot-2023-08-10-at-9-54-37-PM.png",
    //     name:"log in",
    //     isPhoto:true},
    //     {src:"https://i.postimg.cc/xdvFzCXk/Screenshot-2023-08-10-at-10-07-30-PM.png",
    //     name:"palette",
    //     isPhoto:true},
    //     {src:"https://i.postimg.cc/kXCBMfkF/Screenshot-2023-08-10-at-10-22-19-PM.png",
    //     name:"moodboard",
    //     isPhoto:true},
    //     {src:"https://player.vimeo.com/video/853567624?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&autopause=0",
    //     name:"palette video",
    //     isPhoto:false},
    // ]

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
                <div id="inspfirstsection" className="snap-start snap-always w-screen h-screen flex justify-center items-center">
                    <div className="text-4xl pb-5 sm:text-8xl  transform translate-y-12 transition-opacity swishy2 font-black">TYLER'S TREE SOLUTIONS</div>
                </div>
                <div className="snap-start snap-always w-screen h-screen flex justify-center mx-auto pl-5 items-center">
                    <RevealOnScroll>
                    <div className="sm:my-14 text-center font-bold sm:py-8">
                        <div className="text-4xl pb-5 md:text-6xl lg:text-7xl font-black">TYLER'S TREE SOLUTIONS</div>
                        <div className="flex w-full sm:w-3/4 justify-between mx-auto ">
                            <div className="w-1/2 m-4 text-left file:font-bold sm:text-xl md:text-3xl lg:text-4xl italic  font-bold"> {`[A Tree Solutions services project ]`}</div>
                            <div className="w-1/2 m-4 text-md text-left font-bold sm:text-lg md:text-3xl italic ">This client .</div>
                        </div>
                        
                    </div>
                    </RevealOnScroll>
                </div>
                <div className="snap-start snap-always w-screen h-screen flex justify-center mx-auto items-center">
                <RevealOnScroll >
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
                                <div className="xl:text-8xl md:text-5xl text-4xl font-black sm:w-1/2 w-full">THE MOOD BOARD</div>
                                    <div className=" w-full lg:w-full my-8 text-xl 2xl:text-3xl font-bold">A virtual moodboard tool. 
                                </div>
                                    <div className="sm:pl-32 pl-16 w-full  my-8 text-lg 2xl:text-2xl text-justify font-bold">A blank 'canvas' awaits the application user with this beautiful tool. Design elements added by the user are displayed in a masonry layout and are fully customizeable, featuring a special <a className="underline text-pink-500" href="#colorPalette">color palette</a>.
                                </div>
                            </div>
                            <div className="flex lg:flex-col items-center">
                                <img className="w-1/2 lg:w-2/3 2xl:w-2/3  p-1 " src={moodboard1} alt="moodboard1" />
                                <img className="w-1/2 lg:w-2/3 2xl:w-2/3 p-1 " src={moodboard2} alt="moodboard2" />
                            </div>
                            
                        </div>
                </div>
                <div className="snap-start snap-always w-screen h-screen  ">
                   
                        <div className="md:flex w-screen pt-12 px-10 sm:px-32 justify-between items-center">
                            <div className="xl:text-8xl md:text-7xl text-4xl font-black sm:w-1/3 w-full 2xl:w-1/4 ">EXPLORE</div>
                            <div className=" w-3/4 md:w-1/3 my-3 sm:my-8 text-md 2xl:text-3xl  font-bold">The EXPLORE feature was inspired by the popular explore pages on social media platforms like Instagram.
                            </div>
                        </div>
                        <div className="sm:pl-32  w-2/3 md:w-1/2 my-3 mx-auto text-md 2xl:text-2xl text-justify font-bold">The Explore feature brings current trends and design inspiration to the user from an industry classic: Architectural Digest (AD). Users can browse the top trending articles from AD and click on an article to read it at its source.
                        </div>
                        <div className="flex justify-center ">
                            <img className="w-1/2 m-7" src={explore} alt="explore" />
                        </div>
                </div>
                <div className="snap-start snap-always w-screen h-screen">
                        <div className="sm:flex w-screen pt-12 px-10 sm:pl-32 justify-between items-center">
                            <div>
                            <div id="colorPalette" className="xl:text-8xl md:text-7xl text-4xl font-black sm:w-1/3 w-full">THE COLOR PALETTE</div>
                            <div className=" w-full lg:w-1/3 my-3 md:my-8 text-xl 2xl:text-3xl  font-bold">A paint swatch-inspired tool for color exploration. 
                            </div>
                            <div className="md:pl-32 pl-8 w-full lg:w-3/4 my-4 sm:p-5 text-md 2xl:text-2xl text-justify font-bold"> The Palette is a tool built using the Colormind API. Every moodboard is equipped with the default palette shown here. The user can click a button, and a new color palette from the API will be displayed in the palette structure.
                            </div>
                            </div>
                            <div className="sm:flex sm:justify-center ">
                                <img className="w-1/2 sm:w-full " src={palette} alt="palette" />
                            </div>
                        </div>
                </div>
                <div className="snap-start snap-always w-screen h-screen flex justify-center mx-auto items-center">
                <div className="m-4">
                        <div className="text-4xl font-black">WANT MORE?</div>
                        <div className="transform transition duration-500 hover:scale-125">
                            <a href="https://github.com/gmcclarin/interior-design-board" target="_blank"
                            className="text-3xl"
                            rel="noreferrer">GITHUB
                            </a>
                        </div>
                        <div className="transform transition duration-500 hover:scale-125">
                            <a href="https://www.loom.com/share/d2cb126a6bbe4227b5eeaeba2bc0135b?sid=fe522f3b-9de5-4312-affb-55622e104937"
                            target="_blank"
                            rel="noreferrer"
                            className="text-3xl">DEMO
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}