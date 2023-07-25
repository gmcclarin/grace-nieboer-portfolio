import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Contact () {
    return (
        <div className="mx-8 mb-8 snap-always snap-center">
        <h1 id="contact">Contact</h1>
        <h1 className= "text-7xl">
            Looking to collaborate or meet for coffee?
        </h1>
        Shoot me a message on LinkedIn or via Email
        <a href="https://www.linkedin.com/in/gracenieboer/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faLinkedin} style={{height:"60px",color: "#ffffff", margin:"10px"}}/>
        </a>
        <a href="mailto:grace.nieboer@outlook.com">
            <FontAwesomeIcon icon={faEnvelope} style={{height:"60px", color:"#ffffff", margin:"10px"}}/>
        </a>
        </div>
    )
}