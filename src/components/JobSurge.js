import { NavLink } from "react-router-dom";
import Time from "./Time";
import todos from '../photos/todos.png'


export default function JobSurge () {

    const photos = [
        {src:"https://i.postimg.cc/HWN6Qg2m/Screenshot-2023-08-29-at-9-08-11-PM.png",
        name:"home page",
        isPhoto: true},
        {src:"https://player.vimeo.com/video/859210275?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&autopause=0",
        name:"live clock",
        isPhoto:false},
        {src:"https://player.vimeo.com/video/859211278?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&autopause=0",
        name:"loading web driver",
        isPhoto:false},
        {src:"https://i.postimg.cc/28mtKP5g/Screenshot-2023-08-30-at-7-39-12-PM.png",
        name:"oddballjobs",
        isPhoto:true},
        {src:"https://i.postimg.cc/MZY5vXWr/Screenshot-2023-08-30-at-7-38-14-PM.png",
        name:"todos",
        isPhoto:true},
    ]

    return (
        <div className="">
            <NavLink
                to="/portfolio"
                exact="true"
                className="fixed -rotate-90 hover:text-orange-500 text-sm sm:text-2xl font-bold translate-y-28 -translate-x-12 top-0 left-0"
                >
                    BACK TO WORK
            </NavLink>
            <div className="snap-y snap-mandatory h-screen w-screen  overflow-y-scroll overflow-x-hidden">
                <div className="snap-start snap-always bg-neutral-400 w-screen h-screen flex justify-center mx-auto pl-5 items-center">
                    <Time />
                </div>
                <div className="snap-start snap-always w-screen h-screen flex justify-center mx-auto pl-5 items-center">
                    <div className="sm:my-14 text-neutral-500 text-center font-black sm:py-8">
                        <div className="text-4xl pb-5 sm:text-9xl">JOB SURGE</div>
                        <div className="flex sm:w-3/4 justify-between mx-auto ">
                            <div className="w-1/2 p-2 text-left file:font-bold sm:text-4xl italic text-black">SURGE [ v ]: to move suddenly and powerfully forward or upward.</div>
                            <div className="w-1/2 p-2 text-left font-bold sm:text-3xl italic text-black">A career dashboard to help me navigate my job search, organize my priorities, and categorize my goals by Day, Week, Month, and Year. JobSurge was built to navigate my transition from Human Resources into tech.</div>
                        </div>
                        
                    </div>
                </div>
                <div className="snap-start snap-always w-screen h-screen flex justify-center mx-auto pl-5 items-center">
                <div className="m-4">
                        <div className="text-4xl  font-black">THE TECH STACK</div>
                        <div className="text-3xl">REACT JS</div>
                        <div className="text-3xl">JAVASCRIPT</div>
                        <div className="text-3xl">PYTHON</div>
                        <div className="text-3xl">FLASK</div>
                        <div className="text-3xl">POSTGRESQL</div>
                        <div className="text-3xl">TAILWIND</div>
                    </div>
                </div>
                <div className="snap-start snap-always w-screen h-screen">
                        <div className="lg:flex w-screen pt-12 px-10 sm:px-32 justify-between items-center">
                            <div className="w-3/4">
                            <div  className="xl:text-8xl md:text-7xl text-4xl font-black sm:w-1/3 w-full">JOB SEARCHING</div>
                            <div className=" w-full lg:w-1/3 my-2 sm:my-8 text-xl 2xl:text-3xl text-justify font-bold">A tool to scrape the web for relevant jobs posted by a target company. 
                            </div>
                            <div className="md:pl-32 w-full lg:w-3/4 my-2 lg:p-5 text-lg 2xl:text-2xl text-justify font-bold">The Jobs component of the application uses Selenium's headless chrome web driver to mimic user interaction with the target page, allowing the program to then retrieve dynamically rendered information from the site and display it on this application.
                            </div>
                            </div>
                            <div className="lg:flex-col flex sm:justify-center ">
                                <img className="w-1/2 md:w-1/3 lg:w-3/4 p-4 sm:p-7" src={photos[3].src} alt="oddball jobs" />
                                <iframe className="w-1/2 lg:w-full" src={photos[2].src} title="web driver in action"/>
                                
                            </div>
                            
                        </div>
                </div>

                <div className="snap-start snap-always w-screen h-screen">
                        <div className="lg:flex w-screen pt-12 px-10 sm:px-32 justify-between items-center">
                            <div className="w-3/4">
                            <div  className="xl:text-8xl md:text-7xl text-4xl font-black sm:w-1/3 w-full">DASHBOARD</div>
                            <div className=" w-full lg:w-1/3 my-2 sm:my-8 text-xl 2xl:text-3xl text-justify font-bold">Everything I needed in one place. 
                            </div>
                            <div className="sm:pl-32 w-full lg:w-1/2 lg:p-5 text-lg 2xl:text-2xl text-justify font-bold">The Dashboard is just that - one place that combines priortized career goals and daily reminders with self- care and wisdom collected from experienced devs during my career transition.
                            </div>
                        
                            </div>
                            <div className="">
                               
                                    <img className="mx-auto md:w-full m-2 lg:p-10" src={todos}  alt="dashboard home page" />
                                <div className="flex sm:justify-between">
                                <div className="w-1/2 2xl:w-1/2 p-2 sm:pr-4 ">
                                    <div className="text-sm md:text-lg text-justify font-bold">Goals are organized by priority time frame - day, week, month, and year.
                                    </div>
                                </div>
                                    
                                <div className="w-1/2 2xl:w-1/2 p-2 sm:pl-4 ">
                                    <div className="text-sm md:text-lg text-justify font-bold">A live clock feature at the top of the dashboard is a reminder to me to take advantage of every minute.
                                    </div>
                                </div>
                                </div>
                            </div>
                            
                        </div>
                </div>
                <div className="snap-start snap-always w-screen h-screen">
                        <div className="lg:flex w-screen pt-12 px-10 sm:px-32 justify-between items-center">
                            <div className="w-full">
                            <div  className="xl:text-8xl md:text-7xl text-4xl font-black sm:w-1/3 w-full">ADVICE COLLECTION</div>
                            <div className="md:flex">
                                <div className="w-full md:w-1/2">
                                    <div className="w-full md:w-3/4 sm:my-8 my-4 text-md 2xl:text-3xl text-justify font-bold">A place for my continually growing collection of advice gathered from experienced devs.
                                    </div>
                                    <div className="w-full md:w-3/4 my-4 text-md lg:text-xl 2xl:text-2xl text-justify font-bold">As I make new connections with devs in the industry, I collect pieces of advice, and add them to my ever-growing collection, each credited to the dev that gave it.
                                    </div>
                                    <div className="w-full md:w-3/4  text-md lg:text-xl 2xl:text-2xl text-justify font-bold">As a career transitioner, I greatly value the experience of dev who have gone before me, and now are willing to share their insight into the industry. 
                                    </div>
                                </div>

                                <div className="w-3/4 md:w-1/2 my-4">
                                    <div className="hidden sm:block w-3/4 2xl:w-1/2 my-8">
                                        <div className="text-sm md:text-lg lg:text-xl text-justify font-bold">I've enjoyed and continue to seek out connections with devs that are diverse in demographic, background, experience level, and on and on. 
                                        </div>
                                    </div>
                                    <div className="w-full 2xl:w-1/2 ">
                                        <div className="text-sm md:text-lg lg:text-xl text-justify font-bold">I've been overwhelmed with gratitude for each person who has sacrificed their time to meet with me, share their wisdom, and help me better prepare for the career path ahead of me in various ways. This is truly an industry full of supportive and encouraging people.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                </div>

                <div className="snap-start snap-always w-screen h-screen flex justify-center mx-auto items-center">
                <div className="m-4">
                        <div className="text-4xl font-black">WANT MORE?</div>
                        <div className="transform transition duration-500 hover:scale-125">
                            <a href="https://github.com/gnieb/jobsurge" target="_blank"
                            className="text-3xl"
                            rel="noreferrer">GITHUB - FE
                            </a>
                        </div>
                        <div className="transform transition duration-500 hover:scale-125">
                            <a href="https://github.com/gnieb/jobwave-server"
                            target="_blank"
                            rel="noreferrer"
                            className="text-3xl">GITHUB - BE
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}