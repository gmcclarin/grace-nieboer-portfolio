import NavBar from './NavBar';
import MobileMenu from './MobileMenu';
import { useState } from 'react'
import HomePageContact from './HomePageContact'


function About () {
    

    const [openAbout, setOpenAbout] = useState(false)
    const [openBefore, setOpenBefore] = useState(false)
    const [openNow, setOpenNow] = useState(false)
    const [openConnect, setOpenConnect] = useState(false)

    const handleOpenAbout = () => {
        setOpenAbout(true)
        setOpenBefore(false)
        setOpenConnect(false)
        setOpenNow(false)
    }
    const handleOpenBefore = () => {
        setOpenBefore(true)
        setOpenAbout(false)
        setOpenConnect(false)
        setOpenNow(false)
    }

    const handleOpenNow = () => {
         setOpenNow(true)
         setOpenAbout(false)
        setOpenBefore(false)
        setOpenConnect(false)
       
    }

    const handleOpenConnect = () => {
        setOpenConnect(true)
        setOpenAbout(false)
        setOpenBefore(false)
        setOpenNow(false)
    }

    return (
        <div id="about" className="bg-neutral-100 relative block h-screen overscroll-y-hidden">
            <MobileMenu />
            <NavBar />
            
            
            <div className="relative sm:mx-20 lg:mx-32 mb-5 flex bg-neutral-100 h-screen items-center justify-center overscroll-x-auto overscroll-y-hidden">

                {openAbout ? <div className = "aboutabout  z-10 text-white font-bold  top-50 left-50 text-xl sm:text-2xl lg:text-3xl xl:text-3xl text-justify w-3/4 xl:w-1/3 h-full flex justify-center items-center px-8 rounded-full ">
                    <div>
                        <p className="m-4 p-2 text-white bg-gray-900 opacity-50">HI, I'M GRACE! </p>
                        <p className="m-4 p-2 text-white bg-gray-900 opacity-50"> I am a full stack software engineer with a love for the creative elements of front-end design.</p>
                       <p className="m-4 p-2 text-white bg-gray-900 opacity-50">I love Python as a language, along with building API's with REST-ful architecture.
                        </p>
                    </div>
                    </div> 
                    :
                    <div onClick={handleOpenAbout}className="aboutabout cursor-pointer w-1/5 xl:w-1/6 h-3/4   bg-neutral-400 rounded-full transform transition duration-500 hover:scale-125 flex justify-center items-center overflow-hidden "> 
                        <p  className="-rotate-90 font-black text-7xl text-white">ABOUT</p> 
                    </div> 
                    
                    }
                { openBefore ? <div className = "aboutbackground z-10 text-white font-bold bg-neutral-600 top-50 left-50 text-sm md:text-md lg:text-lg 2xl:text-2xl text-justify w-3/4 xl:w-1/3 h-full flex justify-center items-center p-8 rounded-full ">
                    <div>
                        <p className="my-1 sm:m-4 p-2 text-white bg-gray-900 opacity-50">
                        I have a Master's degree in Public Administration, with a professional background in Human Resources. I've spent the past few years of my career partnering with multi-lingual, cross-functional teams to resolve conflicts. </p>
                        <p className="my-1 sm:m-4 p-2 text-white bg-gray-900 opacity-50">My unique professional background in complex problem-solving in person-focused roles allows me to better collaborate and communicate with diverse teams. Technology is built WITH people, FOR people.</p>
                        </div>
                    </div> 
                
                :<div onClick={handleOpenBefore} className="aboutbackground ursor-pointer w-1/5 xl:w-1/6 h-3/4   bg-neutral-400 rounded-full transform transition duration-500 hover:scale-125 flex justify-center items-center overflow-hidden "> 
                    <p  className=" -rotate-90 font-black text-7xl text-white">BACKGROUND</p>
                </div>}

                {openNow ? 
                <div className = "aboutnow z-10 text-white font-bold bg-neutral-600 top-50 left-50 text-xl sm:text-2xl lg:text-3xl xl:text-3xl text-justify w-3/4 xl:w-1/3 h-full flex justify-center items-center p-8 rounded-full ">
                    <div className="">
                    <p className="m-4 p-2 text-white bg-gray-900 opacity-50">I am currently learning Java, React Native, and Typescript.</p> 
                    <p className="m-4 p-2 text-white bg-gray-900 opacity-50">I am collaborating on several projects with different teams to build quality, creative products.</p>
                    <p className="m-4 p-2 text-white bg-gray-900 opacity-50"> In my free time, I'm probably kickboxing or thrifting somewhere.</p>
                    </div>
                </div> 
                
                :<div onClick={handleOpenNow} className="aboutnow cursor-pointer w-1/5 xl:w-1/6 h-3/4 bg-neutral-600 rounded-full transform transition duration-500 hover:scale-125 overflow-hidden flex justify-center items-center ">
                    <p  className=" -rotate-90 font-black text-7xl text-white">NOW</p> 
                </div>
                
            }

            {openConnect ? 
                
                <div className = "aboutconnect z-10 text-white bg-neutral-800 top-50 left-50 text-xl sm:text-2xl lg:text-3xl xl:text-3xl text-justify w-2/3 xl:w-1/3 h-full flex justify-center items-center p-8 rounded-full ">
                    <HomePageContact />
                </div> 
                
                
                :<div onClick={handleOpenConnect}  className="aboutconnect   cursor-pointer w-1/5 xl:w-1/6 h-3/4 bg-neutral-800 rounded-full transform transition duration-500 hover:scale-125 flex justify-center  items-center overflow-hidden"> 
                    <p  className="-rotate-90 font-black text-7xl text-white">CONNECT</p>
                </div>
            }
       
        </div>  
        </div>
    )
}
export default About;