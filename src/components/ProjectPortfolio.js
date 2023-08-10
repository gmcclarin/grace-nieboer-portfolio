import { useEffect, useState } from "react"
import Project from "./Project"
import NavBar from "./NavBar"
import MobileMenu from "./MobileMenu"

function ProjectPortfolio () {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('https://grace-nieboer-server2-0.onrender.com/projects')
            .then(r => {
                if(r.ok){
                    r.json().then(data => setProjects(data))
                }
                else {
                    console.log(r)
                }
            })
    }, [])

    console.log(projects)

    const displayProjects = projects.map((p) => {
        return <Project key={p.id} p={p} />
    })

    return (
    <div className="bg-cover m-5 ">
        <div className="sm:hidden"><MobileMenu /></div>
    <div className = "flex-col justify-center text-center">
        <div className="flex justify-center">
            <h2 className="text-5xl sm:text-[200px] font-fun pb-10 font-bold">work.</h2>
        </div>
            <div className="mb-5 pb-10 flex justify-end ">
                <div className="sm:w-1/2 m-10 flex-col text-right">
                    {displayProjects}
                </div>
            </div>
        
    </div>
    <div className="invisible sm:visible sm:fixed sm:bottom-0">
        <NavBar />
    </div>
    </div>
    )
}

export default ProjectPortfolio
