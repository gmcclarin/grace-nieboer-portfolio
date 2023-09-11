
import { NavLink } from "react-router-dom";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

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
        <div className="relative overflow-y-hidden">
            <NavLink
                to="/portfolio"
                exact="true"
                className="absolute hover:text-orange-500 rounded-md p-10 py-15 text-sm sm:text-2xl font-bold "
                >
                    ← BACK TO WORK ←
            </NavLink>
            <div className="snap-y snap-mandatory h-screen w-screen overflow-y-scroll overflow-x-hidden">
                <div id="inspfirstsection" className="snap-start snap-always w-screen h-screen flex justify-center items-center">
                    <div className="text-4xl pb-5 sm:text-9xl font-bold transform translate-y-12 transition-opacity swishy2">INSPIRED INTERIORS</div>
                </div>
                <div className="snap-start snap-always w-screen h-screen flex justify-center mx-auto pl-5 items-center">
                    <div className="sm:my-14 text-neutral-500 text-center font-bold sm:py-8">
                        <div className="text-4xl pb-5 sm:text-9xl">Inspired Interiors</div>
                        <div className="flex w-3/4 justify-between mx-auto ">
                            <div className="w-1/2 p-2 text-left file:font-bold sm:text-4xl italic text-black"> {`[An interior design planning and inspiration solution]`}</div>
                            <div className="w-1/2 p-2 text-left font-bold sm:text-3xl italic text-black">This full stack application was built to explore trending design ideas and create moodboards with a visual tool to experiment with different elements of design together.</div>
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
                        <div className="text-3xl">SQLITE3</div>
                        <div className="text-3xl">BOOTSTRAP</div>
                        <div className="text-3xl">MATERIAL UI</div>
                    </div>
                </div>
                <div className="snap-start snap-always w-screen h-screen flex items-center ">
                    <div className="">
                        <div><img className="mx-auto content-center w-3/4 2xl:w-1/2 border border-black" src={photos[0].src} />
                        </div>
                    
                        <div className="mx-auto sm:ml-10 w-3/4 md:w-1/3 py-8 text-2xl 2xl:text-3xl text-justify font-bold">The dashboard shows a live clock feature at the top as a reminder and motivation for me to take advantage of every minute.
                        </div>
                        <div className="mx-auto sm:ml-10 w-3/4 md:w-1/2 py-8 text-2xl 2xl:text-3xl text-justify font-bold"> There are goals displayed by time priority, along with a rotating random piece of advice or encouragement I've collected from experienced software developers.
                        </div>
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