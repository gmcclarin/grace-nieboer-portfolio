import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faMedium } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import NavBar from './NavBar'
import MobileMenu from './MobileMenu'

export default function Contact () {
    return (
        <div className = "home flex flex-col items-center justify-center h-screen">
            <MobileMenu />
            <div>
                <NavBar />
            </div>
            <div className="p-5 sm:p-20 content-center text-center">
                <h1 id="contact" className="text-4xl sm:text-[100px] md:text-[150px] lg:text-[200px] font-nyght font-bold pb-10" >let's connect.</h1>
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
    )
}