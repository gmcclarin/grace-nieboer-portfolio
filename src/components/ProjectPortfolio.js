import { useEffect, useState } from "react"
import Project from "./Project"

function ProjectPortfolio () {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('https://portfolio-service-1qui.onrender.com/projects')
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
    <div className = "flex justify-center text-center">
        <div className="">
            <h2 id="portfolio" className="text-4xl snap-always snap-center">Work</h2>
            <div className="flex" >
            {displayProjects}
            </div>
            
        </div>
    </div>
    )
}

export default ProjectPortfolio
