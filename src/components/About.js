import lookatcamera from '../photos/lookatcameraportfolio3.png'
import lookdown from '../photos/lookingdownportfolio1.png'
import portfolio4 from '../photos/portfolio4.jpg'
import portoflio5 from '../photos/portfolio5.png'
import starbs from '../photos/starbsandcaution.png'
import getlost from '../photos/getlost.png'
import NavBar from './NavBar';
import MobileMenu from './MobileMenu';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

function About () {
    const photos = [lookatcamera, starbs, portoflio5, portfolio4,  getlost, lookdown ]

    return (
        <div className="m-5 relative block">
            <MobileMenu />
            <NavBar />
            <div>
                <div className="mx-32">
                    <div className="text-6xl sm:text-[200px] font-fun font-bold pb-10 my-7">about.</div>
                    <div className=" mb-5 sm:flex ">
                        <div className = "text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-justify w-full sm:w-1/2 pb-10">My name is Grace Nieboer. I am a full stack software engineer with a love for the creative elements of front-end design, but I recently fell in love with Python on the back-end along with building API's with REST-ful architecture. I am currently learning Java and collaborating on a few projects with other teams. In my free time, you'll find me kickboxing or eating pizza</div>
                        <div className="w-full sm:w-1/2 m-5 mb-10" >
                        
                            <ResponsiveMasonry
                                columnsCountBreakPoints={{350: 2, 900: 3}}
                                >
                                <Masonry gutter="20px" >
                                    {photos.map((photo, i) => {
                                            return (
                                            <img
                                                key={i}
                                                src={photo}
                                                style={{width: "100%", display: "block"}}
                                                alt="portfolio picture"
                                            /> 
                                            )
                                })}
                                </Masonry>
                            </ResponsiveMasonry>
                        </div>
                    
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
        </div>
        
        </div>
    )
}

export default About;