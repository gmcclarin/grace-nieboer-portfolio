import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import { NavLink } from "react-router-dom";
import Time from "./Time";

export default function JobSurge () {

    const photos = [
        {src:"https://i.postimg.cc/HWN6Qg2m/Screenshot-2023-08-29-at-9-08-11-PM.png",
        name:"home page",
        isPhoto: true},
        {src:"https://player.vimeo.com/video/859210275?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&autopause=0",
        name:"live clock",
        isPhoto:false},
        {src:"https://player.vimeo.com/video/859211278?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&autopause=0",
        name:"loading web driver",
        isPhoto:false},
        {src:"https://i.postimg.cc/28mtKP5g/Screenshot-2023-08-30-at-7-39-12-PM.png",
        name:"oddballjobs",
        isPhoto:true},
        {src:"https://i.postimg.cc/MZY5vXWr/Screenshot-2023-08-30-at-7-38-14-PM.png",
        name:"todos",
        isPhoto:true},
    ]

    return (
        <div className="">
            <NavLink
                to="/portfolio"
                exact="true"
                className="fixed hover:text-orange-500 rounded-md p-10 text-sm sm:text-2xl font-bold "
                >
                    ← BACK TO WORK ←
                </NavLink>
            <div className="snap-y snap-mandatory h-screen w-screen  overflow-y-scroll overflow-x-hidden">
                <div className="snap-start snap-always bg-neutral-400 w-screen h-screen flex justify-center mx-auto pl-5 items-center">
                    <Time />
                </div>
                <div className="snap-start snap-always w-screen h-screen flex justify-center mx-auto pl-5 items-center">
                    <div className="sm:my-14 text-neutral-500 text-center font-bold sm:py-8">
                        <div className="font-fun text-4xl sm:text-9xl">JobSurge</div>
                        <div className="flex w-3/4 justify-between mx-auto ">
                            <div className="w-1/2 p-2 text-left file:font-bold sm:text-4xl italic text-black">SURGE [ v ]: to move suddenly and powerfully forward or upward.</div>
                            <div className="w-1/2 p-2 text-left font-bold sm:text-3xl italic text-black">A career dashboard to help me navigate my job search, organize my priorities, and categorize my goals by Day, Week, Month, and Year. JobSurge was built to navigate my transition from Human Resources into tech.</div>
                        </div>
                        
                    </div>
                </div>
                <div className="snap-start snap-always w-screen h-screen flex justify-center mx-auto pl-5 items-center">
                <div className="m-4">
                        <div className="text-4xl  font-bold">THE TECH STACK</div>
                        <div className="text-3xl">REACT JS</div>
                        <div className="text-3xl">JAVASCRIPT</div>
                        <div className="text-3xl">PYTHON</div>
                        <div className="text-3xl">FLASK</div>
                        <div className="text-3xl">POSTGRESQL</div>
                        <div className="text-3xl">TAILWIND</div>
                    </div>
                </div>
                <div className="snap-start snap-always w-screen h-screen flex justify-center mx-auto items-center align-center">
                    
                        <img className="w-3/4 2xl:w-1/2 border border-black" src={photos[0].src} />
                        
                </div>
            </div>
        </div>
    )
}