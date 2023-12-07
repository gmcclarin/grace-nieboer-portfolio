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

            
            <div className="z-50 p-5 content-center text-center">
                <h1  className="text-5xl sm:text-7xl md:text-[110px] xl:text-[150px] font-nyght font-bold" >let's connect.</h1>
                <a href="https://www.linkedin.com/in/gracenieboer/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} style={{height:"40px",color: "#262626", margin:"10px"}}/>
                </a>
                <a href="mailto:grace.nieboer@outlook.com">
                    <FontAwesomeIcon icon={faEnvelope} style={{height:"40px", color:"#262626", margin:"8px"}}/>
                </a>
                <a href="https://www.instagram.com/grayce.elisabeth_/">
                    <FontAwesomeIcon icon={faInstagram} style={{height:"40px", color:"#262626", margin:"8px"}}/>
                </a>
                <a className="mx-2" href="https://medium.com/@grace.nieboer">
                    <FontAwesomeIcon icon={faMedium} style={{height:"40px",color: "#262626", margin:"8px"}}/>
                </a>
                <a className="mx-2" href="https://github.com/gnieb">
                    <FontAwesomeIcon icon={faGithub} style={{height:"40px",color: "#262626", margin:"8px"}} />
                </a>
            </div>
            </div>
        </div>
    )
}