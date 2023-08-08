import { useEffect, useState } from "react"
import Project from "./Project"

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
    <div className = "flex justify-center text-center p-20">
        <div className="">
            <h2 id="portfolio" className="text-5xl sm:text-7xl font-display snap-always snap-center pb-10 font-bold">WORK</h2>
            <div className="flex sm:p-10" >
            {displayProjects}
            </div>
            
        </div>
    </div>
    )
}

export default ProjectPortfolio
