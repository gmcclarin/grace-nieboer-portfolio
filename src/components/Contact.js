import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faMedium } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import NavBar from './NavBar'
import MobileMenu from './MobileMenu'
import circle from '../photos/enormouscirclegradient.png'

export default function Contact () {
    return (
        <div className = "relative bg-zinc-200 h-screen w-screen overflow-auto ">
            <MobileMenu />
            <NavBar />
            <img src={circle} className="rounded-full absolute object-cover m-auto top-0 bottom-0 left-0 right-0"/>
            
            <div className="flex justify-center items-center h-screen">

            
            <div className="z-30 p-5 content-center text-center">
                <h1  className="text-5xl sm:text-7xl md:text-[80px] lg:text-[100px] xl:text-[150px] font-nyght font-bold" >connect with me.</h1>
                <a href="https://www.linkedin.com/in/gracenieboer/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} style={{height:"40px",color: "#262626", margin:"10px"}}/>
                </a>
                <a href="mailto:grace.nieboer@outlook.com">
                    <FontAwesomeIcon icon={faEnvelope} style={{height:"40px", color:"#262626", margin:"9px"}}/>
                </a>
                <a href="https://www.instagram.com/grayce.elisabeth_/">
                    <FontAwesomeIcon icon={faInstagram} style={{height:"40px", color:"#262626", margin:"9px"}}/>
                </a>
                <a className="mx-2" href="https://medium.com/@grace.nieboer">
                    <FontAwesomeIcon icon={faMedium} style={{height:"40px",color: "#262626", margin:"8px"}}/>
                </a>
                <a className="mx-2" href="https://github.com/gnieb">
                    <FontAwesomeIcon icon={faGithub} style={{height:"40px",color: "#262626", margin:"8px"}} />
                </a>
            </div>
                <div className="z-40 absolute bottom-40 right-10 flex justify-end w-full">
                    <div className="z-40 flex justify-center border-indigo-800 border-2  rounded-full py-3 w-1/4 sm:w-1/5">
                        <a 
                            className="text-indigo-800 text-lg font-black px-3 cursor-pointer"
                            href="https://docs.google.com/document/d/11j7BKzqYw5y554miHNBvvi2kuwA7iyPftVtoJ9Hyh7o/edit?usp=sharing"
                            target="_blank"
                            rel="noreferrer">RESUME</a>
                    </div>
                </div>
                <div className="z-40 absolute bottom-28 right-10 flex justify-end w-full ">
                    <div className="z-40 flex justify-center border-indigo-800 border-2 rounded-full py-3 w-1/4 sm:w-1/5">
                        <div 
                            className="text-indigo-800 text-lg font-black px-3 cursor-pointer"
            
                            >CERTIFICATION</div>
                    </div>
                </div>
            </div>

            
        </div>
    )
}