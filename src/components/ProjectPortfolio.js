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

    displayProjects = projects.map((p) => {
        return 
    })

    return (
    <>
    <h2 id="portfolio" className="text-4xl snap-always snap-center">Work</h2>
        <div >
            
        </div>
            
    </>
    )
}

export default ProjectPortfolio
