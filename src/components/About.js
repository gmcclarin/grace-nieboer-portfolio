import lookatcamera from '../photos/lookatcameraportfolio3.png'
import lookdown from '../photos/lookingdownportfolio1.png'
import portfolio4 from '../photos/portfolio4.jpg'
import portoflio5 from '../photos/portfolio5.png'
import starbs from '../photos/starbsandcaution.png'
import getlost from '../photos/getlost.png'
import NavBar from './NavBar';
import MobileMenu from './MobileMenu';
import { useState } from 'react'
import HomePageContact from './HomePageContact'

function About () {
    const photos = [lookatcamera, starbs, portoflio5, portfolio4,  getlost, lookdown ]

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
        <div id="about" className="relative block h-screen ">
            <MobileMenu />
            <NavBar />
            
            
            <div className="relative mx-32 mb-5 sm:flex h-screen items-center justify-center overscroll-x-auto overscroll-y-hidden">

                {openAbout ? <div className = "z-10 text-white bg-orange-400 top-50 left-50 text-xl sm:text-2xl lg:text-3xl xl:text-3xl text-justify w-1/2 h-3/4 flex justify-center items-center p-8 rounded-full ">
                        <p>HI! 
                    My name is Grace Nieboer. I am a full stack software engineer with a love for the creative elements of front-end design, but I recently fell in love with Python on the back-end along with building API's with REST-ful architecture. I am currently learning Java and collaborating on a few projects with other teams. In my free time, you'll find me kickboxing or eating pizza</p></div> 
                    :
                    <div onClick={handleOpenAbout}className="cursor-pointer w-1/6 h-3/4  bg-orange-400 rounded-full transform transition duration-500 hover:scale-125 flex justify-center items-center overflow-hidden "> 
                        <p  className="-rotate-90 font-black text-8xl text-white">ABOUT</p> 
                    </div> 
                    
                    }
                { openBefore ? <div className = "z-10 text-white bg-orange-400 top-50 left-50 text-xl sm:text-2xl lg:text-3xl xl:text-3xl text-justify w-1/2 h-3/4 flex justify-center items-center p-8 rounded-full ">
                        <p>HI! 
                    My name is Grace Nieboer. I am a full stack software engineer with a love for the creative elements of front-end design, but I recently fell in love with Python on the back-end along with building API's with REST-ful architecture. I am currently learning Java and collaborating on a few projects with other teams. In my free time, you'll find me kickboxing or eating pizza</p></div> 
                
                :<div onClick={handleOpenBefore} className="cursor-pointer w-1/6 h-3/4 bg-orange-500 rounded-full transform transition duration-500 hover:scale-125 overflow-hidden flex justify-center items-center"> 
                    <p  className=" -rotate-90 font-black text-8xl text-white">BEFORE</p>
                </div>}

                {openNow ? 
                <div className = "z-10 text-white bg-orange-400 top-50 left-50 text-xl sm:text-2xl lg:text-3xl xl:text-3xl text-justify w-1/2 h-3/4 flex justify-center items-center p-8 rounded-full ">
                    <p>HI! 
                    My name is Grace Nieboer. I am a full stack software engineer with a love for the creative elements of front-end design, but I recently fell in love with Python on the back-end along with building API's with REST-ful architecture. I am currently learning Java and collaborating on a few projects with other teams. In my free time, you'll find me kickboxing or eating pizza</p>
                </div> 
                
                :<div onClick={handleOpenNow} className="cursor-pointer w-1/6 h-3/4 bg-orange-600 rounded-full transform transition duration-500 hover:scale-125 overflow-hidden flex justify-center items-center ">
                    <p  className=" -rotate-90 font-black text-8xl text-white">NOW</p> 
                </div>
                
            }

            {openConnect ? 
                
                <div className = "z-10 text-white bg-orange-400 top-50 left-50 text-xl sm:text-2xl lg:text-3xl xl:text-3xl text-justify w-1/2 h-3/4 flex justify-center items-center p-8 rounded-full ">
                    <HomePageContact />
                </div> 
                
                
                :<div onClick={handleOpenConnect}  className="cursor-pointer w-1/6 h-3/4 bg-orange-700 rounded-full transform transition duration-500 hover:scale-125 flex justify-center  items-center overflow-hidden"> 
                    <p  className="-rotate-90 font-black text-8xl text-white">CONNECT</p>
                </div>
            }
       
        </div>  
            
            
            <div className="mb-5 pb-10 flex justify-end ">
                <div className="sm:w-1/2 flex-col text-right">
                <p className="text-3xl font-bold">BACKGROUND</p>
                <p className="text-xl sm:text-2xl lg:text-4xl text-justify pb-10">I have a Master's degree in Public Administration, with a professional background in Human Resources. I've spent the past few years of my career working in employee relations roles within HR, partnering with multi-lingual, cross-functional teams to work through employee issues and resolve conflicts. 
                </p>
                <p className="text-3xl font-bold mt-3">PERSON-FOCUSED</p>
                <p className="text-xl sm:text-2xl lg:text-4xl text-justify">My unique background in complex problem solving in a very person-focused industry and roles allows me better collaborate and communicate with diverse teams. We work in tech, but we work WITH people, FOR people.</p>
                </div>
            </div>
        </div>
    )
}
export default About;