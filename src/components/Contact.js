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
        <div className = "m-5">
            <MobileMenu />
            <div className="">
                <NavBar />
            </div>
            <div className="p-10 sm:p-20 content-center text-center">
                <h1 id="contact" className="text-5xl sm:text-[200px] font-fun font-bold pb-10" >contact.</h1>
                <h1 className= " text-2xl sm:text-4xl">
                    get to know me a little better. 
                </h1>
                <a href="https://www.linkedin.com/in/gracenieboer/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} style={{height:"60px",color: "#262626", margin:"10px"}}/>
                </a>
                <a href="mailto:grace.nieboer@outlook.com">
                    <FontAwesomeIcon icon={faEnvelope} style={{height:"60px", color:"#262626", margin:"10px"}}/>
                </a>
                <a href="https://www.instagram.com/grayce.elisabeth_/">
                    <FontAwesomeIcon icon={faInstagram} style={{height:"60px", color:"#262626", margin:"10px"}}/>
                </a>
                <a className="mx-2" href="https://medium.com/@grace.nieboer">
                    <FontAwesomeIcon icon={faMedium} style={{height:"60px",color: "#262626", margin:"10px"}}/>
                </a>
                <a className="mx-2" href="https://github.com/gnieb">
                    <FontAwesomeIcon icon={faGithub} style={{height:"60px",color: "#262626", margin:"10px"}} />
                </a>
            </div>
            
        </div>
    )
}