import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Contact () {
    return (
        <div className="mx-8 mb-8 p-20 snap-always snap-center">
        <h1 id="contact" className="text-5xl sm:text-7xl font-display" >CONTACT</h1>
        <h1 className= "text-5xl">
            Connect with me 
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