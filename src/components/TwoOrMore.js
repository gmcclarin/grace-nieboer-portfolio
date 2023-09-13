
import { NavLink } from "react-router-dom";
import about from '../photos/abouttwoormore.png'
import why from '../photos/thewhy.png'
import meet from '../photos/meetbrian.png'


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


        <div className="relative overflow-y-hidden overflow-x-hidden ">

            <NavLink
                to="/portfolio"
                exact="true"
                className="fixed -rotate-90 hover:text-orange-500 text-sm sm:text-2xl font-bold translate-y-28 -translate-x-12 top-0 left-0"
                >
                    BACK TO WORK
            </NavLink>
            <div className="snap-y snap-mandatory h-screen w-screen overflow-y-scroll overflow-x-hidden ">
                <div id="twofirstsection" className="snap-start snap-always w-screen h-screen flex justify-center items-center">
                    <div className="text-4xl pb-5 sm:text-8xl  transform translate-y-12 transition-opacity swishy2 font-black">TWO OR MORE</div>
                </div>
                <div className="snap-start snap-always w-screen h-screen flex justify-center mx-auto pl-5 items-center">
                    <div className="sm:my-14 text-center font-bold sm:py-8">
                        <div className="text-4xl pb-5 sm:text-9xl font-black">TWO OR MORE</div>
                        <div className="flex w-3/4 justify-between mx-auto ">
                            <div className="w-1/2 p-2 text-left file:font-bold sm:text-4xl italic text-black"> {`[An educational resource and community internet space for the non-profit, Two or More]`}</div>
                            <div className="w-1/2 p-2 text-left font-bold sm:text-3xl italic text-black">This web application is in progress for a client with the purpose of fostering community with individuals that identify as being a part of two or more racial groups, and providing educational materials and opportunities with the ultimate goal of racial reconciliation between families.</div>
                        </div>
                        
                    </div>
                </div>
                <div className="snap-start snap-always w-screen h-screen flex justify-center mx-auto items-center">
                <div className="m-4">
                        <div className="text-4xl  font-black">THE TECH STACK</div>
                        <div className="text-3xl">REACT JS</div>
                        <div className="text-3xl">JAVASCRIPT</div>
                        <div className="text-3xl">JAVA</div>
                        <div className="text-3xl">SPRING BOOT</div>
                        <div className="text-3xl">POSTGRESQL</div>
                        <div className="text-3xl">TAILWIND</div>
                    </div>
                </div>
                <div className="snap-start snap-always w-screen h-screen">
                        <div className="lg:flex w-screen h-screen pt-12 px-10 sm:px-32 justify-between items-center">
                            <div className="w-full lg:w-1/2">
                                <div id="colorPalette" className="xl:text-8xl md:text-7xl text-4xl font-black lg:w-1/3 w-full">MISSION AND VISION</div>
                                <div className=" w-full lg:w-1/3  lg:my-8 text-xl 2xl:text-3xl text-justify font-bold">Dive into the story behind Two or More.
                                </div>
                                <div className="sm:pl-32 w-full lg:w-3/4 p-5 text-lg 2xl:text-2xl text-justify font-bold"> Two or More exist in their journey to serve bi/multi-ethnic individuals and their families. Get to know the founder and partners to learn more about the heart behind the non-profit.
                                </div>
                            </div>
                            <div className=" w-full lg:w-1/2 flex-col sm:justify-center aspect-video">
                            <img className="w-1/2 lg:w-full p-2" src={why}  allow="autoplay"  title="share" />
                            <div className="flex">
                                <img className="w-1/3 lg:w-1/2 p-2" src={about}  allow="autoplay"  title="share"  />
                                <img className="w-1/3 lg:w-1/2 p-2" src={meet}  allow="autoplay"  title="share"  />
                            </div>
                            </div>
                        </div>
                </div>
                <div className="snap-start snap-always w-screen h-screen">
                        <div className="lg:flex w-screen pt-12 px-10 sm:px-32 justify-between items-center">
                            <div>
                            <div className="xl:text-8xl md:text-7xl text-4xl font-black sm:w-1/3 w-full">LIBRARY</div>
                            <div className=" w-full lg:w-1/3 my-8 text-xl 2xl:text-3xl text-justify font-bold">Resources for learning and growth  
                            </div>
                            <div className="sm:pl-32 w-full lg:w-3/4 p-5 text-lg 2xl:text-2xl text-justify font-bold">The LIBRARY provides helpful educational resources, categorized by various material types (digital, print, audio, etc). It also features a vocabulary page that will highlight rotating founder-chosen words that have important meaning within the community.
                            </div>
                            </div>
                           
                            
                        </div>
                </div>
                <div className="snap-start snap-always w-screen h-screen">
                        <div className="lg:flex w-screen h-screen pt-12 px-10 sm:px-32 justify-between items-center">
                            <div className="w-full lg:w-1/2">
                                <div id="colorPalette" className="xl:text-8xl md:text-7xl text-4xl font-black lg:w-1/3 w-full">STORIES</div>
                                <div className=" w-full lg:w-1/3 my-8 text-xl 2xl:text-3xl text-justify font-bold">Everyone has a story.
                                </div>
                                <div className="sm:pl-32 w-full lg:w-3/4 p-5 text-lg 2xl:text-2xl text-justify font-bold"> The Story page will feature reader submissions sharing their story. Everyone is welcome to browse stories and are encouraged to share their own experience.
                                </div>
                            </div>
                            <div className=" w-full lg:w-1/2 flex sm:justify-center aspect-video">
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
                        <div className="transform transition duration-500 hover:scale-125">
                            <a href="https://brave-tree-0c566030f.3.azurestaticapps.net/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-3xl">LIVE APPLICATION
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        // <div className="p-2 sm:p-10 mb-10 sm:mb-40">
        //     <NavLink
        //         to="/portfolio"
        //         exact="true"
        //         className="hover:text-orange-500 rounded-md py-20 text-sm sm:text-2xl font-bold -rotate-90"
        //         >
        //             ← BACK TO WORK ←
        //         </NavLink>
        //     <div className="font-fun sm:my-14 text-neutral-300 text-center font-bold sm:py-8">
        //         <div className="text-4xl sm:text-9xl">Two or More</div>
        //     </div>
        //     <div className="m-2 text-right">
        //         <div className="m-3">
        //             <div className="font-bold sm:text-4xl italic">This web application is in progress for a client with the purpose of fostering community with individuals that identify as being a part of two or more racial groups, and providing educational materials and opportunities with the ultimate goal of racial reconciliation between families.</div>
        //             <div className="m-4">
        //                 <div className="text-4xl  font-bold">THE TECH STACK</div>
        //                 <div className="text-3xl">REACT JS</div>
        //                 <div className="text-3xl">JAVASCRIPT</div>
        //                 <div className="text-3xl">JAVA</div>
        //                 <div className="text-3xl">SPRING BOOT</div>
        //                 <div className="text-3xl">POSTGRESQL</div>
        //                 <div className="text-3xl">TAILWIND</div>
        //             </div>
        //         </div>
        //         <div className="flex justify-between sm:m-20 m-5">
        //             <div className="text-3xl m-3">The interactive LIBRARY provides helpful educational resources, categorized by various material types (digital, print, audio, etc). It also features a vocabulary page that will highlight rotating founder-chosen words that have important meaning within the community.</div>
        //             <div className="text-3xl m-3">Everyone has a story! The Story page features reader submissions that tell share their story with the Two Or More community.</div>
        //         </div>
        //         <div className="text-3xl sm:m-20 m-5">Readers inspired by others who have shared their stories can submit their own through the Share page, which is persisted to a PostgreSQL database</div>
        //         <div className="w-full mb-10" >
                    
        //                 <ResponsiveMasonry
        //                     columnsCountBreakPoints={{350: 2, 750: 2, 900: 2}}
        //                     >
        //                     <Masonry gutter="20px" >
        //                         {(photos).map((photo, i) => {
        //                             if (photo.isPhoto) {
        //                                 return (
        //                                 <img
        //                                     key={i}
        //                                     src={photo.src}
        //                                     style={{width: "100%", display: "block"}}
        //                                     alt={photo.name}
        //                                 /> 
        //                                 )
        //                         } else {
        //                             return (
        //                                 <iframe 
        //                                 key={i}
        //                                 src={photo.src}
        //                                 style={{width:"100%", height:"100%", display: "block"}}
        //                                 title={photo.name}
        //                                 allow="autoplay;"
        //                                 // frameBorder="0"
        //                                 />
        //                             )
        //                         }
        //                     })}
        //                     </Masonry>
        //                 </ResponsiveMasonry>
        //             </div>
        //     </div>
        // </div>
    )
}