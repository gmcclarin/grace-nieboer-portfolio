import { useEffect, useState } from "react"
import ProjectNav from "./ProjectNav"
import {Routes, Route} from 'react-router-dom'
import PortfolioHome from "./PorfolioHome"
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

    const displayProjects = projects.map((p) => {
        return <ProjectNav key={p.id} p={p} />
    })

    function getProject(projectId) {
        return projects.find( p => p.id == projectId ) 
    }
    
    return (
        <div>
           <PortfolioHome  displayProjects={displayProjects} />
            <Routes>
                <Route path=":id" element={<Project getProject={getProject} />}/>
            </Routes>
        </div>
    )
}

export default ProjectPortfolio
