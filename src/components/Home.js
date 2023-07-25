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
                <div >
                    <p className = "my-4 text-2xl sm:text-[40px] font-bold">get to know me</p>
                        <a className="mx-2" href="https://www.instagram.com/grayce.elisabeth_/" >
                            <FontAwesomeIcon icon={faInstagram} style={{height:"30px", color: "#ffffff",}} />
                        </a>
                        <a className="mx-2" href="https://www.linkedin.com/in/gracenieboer/"> 
                            <FontAwesomeIcon icon={faLinkedin} style={{height:"30px",color: "#ffffff",}}/>
                        </a>
                        <a className="mx-2" href="https://github.com/gnieb">
                            <FontAwesomeIcon icon={faGithub} style={{height:"30px",color: "#ffffff",}} />
                        </a>
                        <a className="mx-2" href="https://medium.com/@grace.nieboer">
                            <FontAwesomeIcon icon={faMedium} style={{height:"30px",color: "#ffffff",}}/>
                        </a>
                </div>
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