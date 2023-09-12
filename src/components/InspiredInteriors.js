
import { NavLink } from "react-router-dom";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import explore from '../photos/explorepage.png'

export default function InspiredInteriors () {

    const photos = [
        {src:"https://i.postimg.cc/VkmSncp2/Screenshot-2023-05-10-at-10-50-29-AM.png",
        name:"home page",
        isPhoto: true},
        {src:"https://i.postimg.cc/Y2fC8fW0/Screenshot-2023-08-10-at-9-54-37-PM.png",
        name:"log in",
        isPhoto:true},
        {src:"https://i.postimg.cc/xdvFzCXk/Screenshot-2023-08-10-at-10-07-30-PM.png",
        name:"palette",
        isPhoto:true},
        {src:"https://i.postimg.cc/kXCBMfkF/Screenshot-2023-08-10-at-10-22-19-PM.png",
        name:"moodboard",
        isPhoto:true},
        {src:"https://player.vimeo.com/video/853567624?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&autopause=0",
        name:"palette video",
        isPhoto:false},
    ]

    return (
        <div className="relative overflow-y-hidden overflow-x-hidden ">

            <NavLink
                to="/portfolio"
                exact="true"
                className="fixed -rotate-90 hover:text-orange-500 text-sm sm:text-2xl font-bold translate-y-28 -translate-x-12 top-0 left-0"
                >
                    BACK TO WORK
            </NavLink>
            <div className="snap-y snap-mandatory h-screen w-screen overflow-y-scroll overflow-x-hidden ">
                <div id="inspfirstsection" className="snap-start snap-always w-screen h-screen flex justify-center items-center">
                    <div className="text-4xl pb-5 sm:text-9xl font-bold transform translate-y-12 transition-opacity swishy2">INSPIRED INTERIORS</div>
                </div>
                <div className="snap-start snap-always w-screen h-screen flex justify-center mx-auto pl-5 items-center">
                    <div className="sm:my-14 text-neutral-500 text-center font-bold sm:py-8">
                        <div className="text-4xl pb-5 sm:text-9xl">Inspired Interiors</div>
                        <div className="flex w-3/4 justify-between mx-auto ">
                            <div className="w-1/2 p-2 text-left file:font-bold sm:text-4xl italic text-black"> {`[An interior design planning and inspiration solution]`}</div>
                            <div className="w-1/2 p-2 text-left font-bold sm:text-3xl italic text-black">This full stack application was built to explore trending design ideas and create moodboards as a visual tool to experiment with different elements of design together.</div>
                        </div>
                        
                    </div>
                </div>
                <div className="snap-start snap-always w-screen h-screen flex justify-center mx-auto items-center">
                <div className="m-4">
                        <div className="text-4xl  font-bold">THE TECH STACK</div>
                        <div className="text-3xl">REACT JS</div>
                        <div className="text-3xl">JAVASCRIPT</div>
                        <div className="text-3xl">PYTHON</div>
                        <div className="text-3xl">FLASK</div>
                        <div className="text-3xl">SQLITE3</div>
                        <div className="text-3xl">BOOTSTRAP</div>
                        <div className="text-3xl">MATERIAL UI</div>
                    </div>
                </div>
                <div className="snap-start snap-always w-screen h-screen  ">
                   
                        <div className="md:flex w-screen pt-12 px-32 justify-between items-center">
                            <div className="xl:text-8xl md:text-6xl text-4xl font-black sm:w-1/3 w-full">EXPLORE</div>
                            <div className=" w-full md:w-1/3 my-8 text-xl 2xl:text-3xl text-justify font-bold">The EXPLORE feature was inspired by the popular explore pages on social media platforms like Instagram.
                            </div>
                        </div>
                    
                        <div className="sm:pl-32  w-3/4 md:w-1/2 p-5 text-lg 2xl:text-2xl text-justify font-bold">The Explore feature brings current trends and design inspiration to the user from an industry classic: Architectural Digest (AD). Users can browse the top trending articles from AD and click on an article to read it at its source.
                        </div>
                       
                        <div className="sm:flex sm:justify-center ">
                            <img className="w-full md:w-3/4 2xl:w-1/2 p-7" src={explore} title="explore" />
                        </div>
                 
                </div>
                <div className="snap-start snap-always w-screen h-screen flex items-center ">
                <div>
                    <iframe 
                                        src={photos[2].src}
                                        style={{width:"100%", height:"100%", display: "block"}}
                                        title={photos[2].name}
                                        allow="autoplay;"
                                        // frameBorder="0"
                                        />
                </div>
                </div>
            </div>
        </div>
    )
}