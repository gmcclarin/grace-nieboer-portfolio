import tongue from './tongue.png'

function About () {

    return (
        <div className="p-16 snap-always snap-center">
        <div className="mx-8  mb-8">
            <p id="about" className="text-5xl sm:text-7xl font-display sm:p-10 my-7 sm:my-6">HI THERE, AND WELCOME! </p>
            <div className=" mb-5 pb-10 flex ">
                <p className = "text-xl sm:text-4xl text-justify sm:w-1/2 ">My name is Grace Nieboer. I am a full stack software engineer with a love for the creative elements of front-end design, but I recently fell in love with Python on the back-end along with building API's with REST-ful architecture. I am currently learning Java and collaborating on a few projects with other teams. In my free time, you'll find me kickboxing or eating pizza</p>
                {/* <img alt="tongue" className="h-2/5 " src={tongue} /> */}
            </div>
            <div className="mb-5 pb-10 flex justify-end ">
                <div className="sm:w-1/2 flex-col text-right">
                <p className="text-3xl font-bold">BACKGROUND</p>
                <p className="text-xl sm:text-4xl text-justify pb-10">I have a Master's degree in Public Administration, with a professional background in Human Resources. I've spent the past few years of my career working in employee relations roles within HR, partnering with multi-lingual, cross-functional teams to work through employee issues and resolve conflicts. 
                </p>
                <p className="text-3xl font-bold mt-3">PERSON-FOCUSED</p>
                <p className="text-xl sm:text-4xl text-justify">My unique background in complex problem solving in a very person-focused industry and roles allows me better collaborate and communicate with diverse teams. We work in tech, but we work WITH humans, FOR humans.</p>
                </div>
             </div>
        </div>
        </div>
    )
}

export default About;