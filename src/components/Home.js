import React from "react";
import { faMedium } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Typewriter from "typewriter-effect";


function Home () {

    return (
        
        < div id="home" className = "m-5 p-2">
            <div className = "text-[50px] text-left md:text-[100px] xl:text-[200px] font-display font-extrabold">
                <p className = "text-[20px] sm:text-[30px] text-left font-display">passionate</p>
                <Typewriter
                options={{
                strings: ['DEVELOPER', 'ARCHITECT', 'COFFEE DRINKER'],
                autoStart: true,
                loop: true,
                }}
            />
            </div>
            <div className="flex justify-end">
                <div className=" text-3xl sm:text-5xl sm:w-3/4 text-right ">
                    I AM A PASSIONATE DEVELOPER WITH A LOVE FOR FINDING CREATIVE SOLUTIONS THAT MAKE THE WORLD BETTER.
                </div>
            </div>
            <div className = "flex flex-col text-right mr-28 my-5 sm:my-20">
                <div className="my-12">
                    <a
                    href="#contact"
                    className=" hover:bg-gray-300 bg-orange-600 text-white border-2 text-xl sm:text-2xl border-white font-bold py-2 px-4 sm:py-4 sm:px-8 rounded-full mx-8 my-8"
                    >
                        CONTACT
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Home;