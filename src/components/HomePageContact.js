import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faMedium } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


export default function HomePageContact () {
    return (
            <div className="flex content-center text-center">
                <a className="transform transition duration-500 hover:scale-150" href="https://www.linkedin.com/in/gracenieboer/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} style={{height:"50px",color: "#ffffff", margin:"10px"}}/>
                </a>
                <a className="transform transition duration-500 hover:scale-150" href="mailto:grace.nieboer@outlook.com">
                    <FontAwesomeIcon icon={faEnvelope} style={{height:"50px", color:"#ffffff", margin:"10px"}}/>
                </a>
                <a className="transform transition duration-500 hover:scale-150" href="https://www.instagram.com/grayce.elisabeth_/">
                    <FontAwesomeIcon icon={faInstagram} style={{height:"50px", color:"#ffffff", margin:"10px"}}/>
                </a>
                <a className="transform transition duration-500 hover:scale-150" href="https://medium.com/@grace.nieboer">
                    <FontAwesomeIcon icon={faMedium} style={{height:"50px",color: "#ffffff", margin:"8px"}}/>
                </a>
                <a className="transform transition duration-500 hover:scale-150" href="https://github.com/gnieb">
                    <FontAwesomeIcon icon={faGithub} style={{height:"50px",color: "#ffffff", margin:"7px"}} />
                </a>
            </div>
            
    
    )
}