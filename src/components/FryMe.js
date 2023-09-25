import { NavLink } from "react-router-dom";
import menu1 from '../photos/menu1.png'
import menu2 from '../photos/menu2.png'
import { RevealOnScroll } from "./RevealOnScroll";

export default function FryMe () {

    const photos = [
        {src:"https://i.postimg.cc/nzrwDfFx/home-Page1.png",
        name:"home page1",
        isPhoto: true},
        {src:"https://i.postimg.cc/05Z4hVJQ/Screenshot-2023-08-30-at-7-58-15-PM.png",
        name:"no fries in cart",
        isPhoto:true},
        {src:"https://player.vimeo.com/video/859585838?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&autopause=0",
        name:"home page carousel",
        isPhoto:false},
        {src:"https://player.vimeo.com/video/859587750?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&autopause=0",
        name:"ordering fries",
        isPhoto:false}
        
    ]

    return (

        <div className="relative overflow-y-hidden overflow-x-hidden ">

        <NavLink
            to="/portfolio"
            exact="true"
            className="absolute z-30 bg-white bg-opacity-50 rounded-full p-1 -rotate-90 hover:text-orange-500 text-sm sm:text-2xl font-bold translate-y-28 -translate-x-12 top-0 left-3"
            >
                BACK TO WORK
        </NavLink>
        <div className="snap-y snap-mandatory h-screen w-screen overflow-y-scroll overflow-x-hidden ">
            <div  className=" bg-black relative snap-start snap-always w-screen h-screen flex justify-center items-center">

                <video
                    autoPlay
                    loop
                    muted
                    className="min-w-full min-h-screen w-screen h-screen"
                >
                        <source
                        src="https://assets.mixkit.co/videos/preview/mixkit-full-moon-with-a-soft-haze-4433-large.mp4"
                        type="video/mp4"
                        />
                    Your browser does not support the video tag.
                    </video>
                <div className="absolute text-orange-500 text-4xl pb-5 sm:text-2xl md:text-5xl lg:text-8xl  transform translate-y-12 transition-opacity swishy2 font-black">FRY ME TO THE MOON</div>
            </div>
            <div className="snap-start snap-always w-screen h-screen flex justify-center mx-auto pl-5 items-center">
                <RevealOnScroll>
                <div className="sm:my-14 text-center font-bold sm:py-8">
                    <div className="text-4xl pb-5 sm:text-2xl md:text-5xl lg:text-7xl font-black">FRY ME TO THE MOON</div>
                    <div className="flex w-3/4 justify-between mx-auto ">
                        <div className="w-1/2 p-2 text-left file:font-bold sm:text-xl md:text-3xl lg:text-4xl italic text-black"> {`[An outer-space themed store front for custom potato fry creations]`}</div>
                        <div className="w-1/2 p-2 text-left font-bold sm:text-xl md:text-3xl lg:text-3xl italic text-black">This full stack web application is a retro take on artisan potatoes. This was a group project built to showcase client, server, and RESTful API development</div>
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
                        <div className="text-3xl">PYTHON</div>
                        <div className="text-3xl">FLASK</div>
                        <div className="text-3xl">SQLITE3</div>
                        <div className="text-3xl">BOOTSTRAP</div>
                </div>
                </RevealOnScroll>
            </div>
            <div className="snap-start snap-always w-screen h-screen">
                    <div className="md:flex w-screen h-screen pt-12 px-10 sm:px-32 justify-between items-center">
                        <div className="w-full lg:w-1/2">
                            <div id="colorPalette" className="xl:text-8xl md:text-7xl text-4xl font-black lg:w-1/3 w-full">MENU</div>
                            <div className=" w-full  lg:my-8 text-xl 2xl:text-3xl font-bold">A retro menu designed for mouth watering.
                            </div>
                            <div className="sm:pl-32 w-full lg:w-3/4 p-5 text-lg 2xl:text-2xl text-justify font-bold">
                            </div>
                        </div>
                        <div className=" w-full lg:w-1/2 flex-col sm:justify-center aspect-video">
                        <img className="w-3/4 sm:w-2/3 p-2" src={menu1}  allow="autoplay"  alt="menu" />
                        <div className="flex">
                            <img className="w-1/2 sm:w-2/3 p-2" src={menu2}  allow="autoplay"  alt="menu"  />
                        </div>
                        </div>
                    </div>
            </div>
        
            <div className="snap-start snap-always w-screen h-screen">
                    <div className="md:flex w-screen h-screen pt-12 px-10 sm:pl-32 justify-between items-center">
                        <div className="w-full lg:w-1/2">
                            <div className="xl:text-8xl md:text-7xl text-4xl font-black lg:w-1/3 w-full">ORDER UP!</div>
                            <div className=" w-full my-8 text-xl 2xl:text-3xl font-bold">
                                Sign up to be a spud club member or log in to the application to place an order!
                            </div>
                            <div className="md:pl-32 pl-16 w-full  my-3 text-lg 2xl:text-2xl text-justify font-bold"> Place your order for artisan fry menu items! Want extra cheese? Add gravy? Leave the chef a note on any item(s) to customize ♥ .
                            </div>
                            <div className="md:pl-32 pl-16 w-full lg:w-3/4 my-3 text-lg 2xl:text-2xl text-justify font-bold">Go to cart and check out!
                            </div>
                        </div>
                        <div className=" w-full lg:w-2/3 flex sm:justify-center aspect-video">
                        <iframe className="w-full" src={photos[3].src}  allow="autoplay"  title="share" />
                        </div>
                    </div>
            </div>
            <div className="snap-start snap-always w-screen h-screen flex justify-center mx-auto items-center">
            <div className="m-4">
                    <div className="text-4xl font-black">WANT MORE?</div>
                    <div className="transform transition duration-500 hover:scale-125">
                        <a href="https://github.com/patchwork109/phase-4-project" target="_blank"
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