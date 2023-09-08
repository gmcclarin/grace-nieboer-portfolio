import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import { NavLink } from "react-router-dom";

export default function TwoOrMore () {

    const photos = [
        {src:"https://i.postimg.cc/qM4K3Cd3/Screenshot-2023-08-29-at-8-05-00-PM.png",
        name:"home page1",
        isPhoto: true},
        {src:"https://i.postimg.cc/ryQVfdrW/Screenshot-2023-08-29-at-8-05-13-PM.png",
        name:"home page2",
        isPhoto:true},
        {src:"https://player.vimeo.com/video/859195808?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&autopause=0",
        name:"share video",
        isPhoto:false},
        {src:"https://i.postimg.cc/4450tV9C/Screenshot-2023-08-29-at-8-05-48-PM.png",
        name:"about1",
        isPhoto:true}
        
    ]

    return (
        <div className="p-2 sm:p-10 mb-10 sm:mb-40">
            <NavLink
                to="/portfolio"
                exact="true"
                className="hover:text-orange-500 rounded-md py-20 text-sm sm:text-2xl font-bold -rotate-90"
                >
                    ← BACK TO WORK ←
                </NavLink>
            <div className="font-fun sm:my-14 text-neutral-300 text-center font-bold sm:py-8">
                <div className="text-4xl sm:text-9xl">Two or More</div>
            </div>
            <div className="m-2 text-right">
                <div className="m-3">
                    <div className="font-bold sm:text-4xl italic">This web application is in progress for a client with the purpose of fostering community with individuals that identify as being a part of two or more racial groups, and providing educational materials and opportunities with the ultimate goal of racial reconciliation between families.</div>
                    <div className="m-4">
                        <div className="text-4xl  font-bold">THE TECH STACK</div>
                        <div className="text-3xl">REACT JS</div>
                        <div className="text-3xl">JAVASCRIPT</div>
                        <div className="text-3xl">JAVA</div>
                        <div className="text-3xl">SPRING BOOT</div>
                        <div className="text-3xl">POSTGRESQL</div>
                        <div className="text-3xl">TAILWIND</div>
                    </div>
                </div>
                <div className="flex justify-between sm:m-20 m-5">
                    <div className="text-3xl m-3">The interactive LIBRARY provides helpful educational resources, categorized by various material types (digital, print, audio, etc). It also features a vocabulary page that will highlight rotating founder-chosen words that have important meaning within the community.</div>
                    <div className="text-3xl m-3">Everyone has a story! The Story page features reader submissions that tell share their story with the Two Or More community.</div>
                </div>
                <div className="text-3xl sm:m-20 m-5">Readers inspired by others who have shared their stories can submit their own through the Share page, which is persisted to a PostgreSQL database</div>
                <div className="w-full mb-10" >
                    
                        <ResponsiveMasonry
                            columnsCountBreakPoints={{350: 2, 750: 2, 900: 2}}
                            >
                            <Masonry gutter="20px" >
                                {(photos).map((photo, i) => {
                                    if (photo.isPhoto) {
                                        return (
                                        <img
                                            key={i}
                                            src={photo.src}
                                            style={{width: "100%", display: "block"}}
                                            alt={photo.name}
                                        /> 
                                        )
                                } else {
                                    return (
                                        <iframe 
                                        key={i}
                                        src={photo.src}
                                        style={{width:"100%", height:"100%", display: "block"}}
                                        title={photo.name}
                                        allow="autoplay;"
                                        // frameBorder="0"
                                        />
                                    )
                                }
                            })}
                            </Masonry>
                        </ResponsiveMasonry>
                    </div>
            </div>
        </div>
    )
}