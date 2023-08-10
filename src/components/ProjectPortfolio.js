import { useEffect, useState } from "react"
import ProjectNav from "./ProjectNav"
import NavBar from "./NavBar"
import MobileMenu from "./MobileMenu"
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

    console.log(projects)

    const displayProjects = projects.map((p) => {
        return <ProjectNav key={p.id} p={p} />
    })

    return (
        <div>
           <PortfolioHome project={projects} displayProjects={displayProjects} />
            <Routes>
                <Route path=":id" element={<Project />}/>
            </Routes>
        </div>
    )
}

export default ProjectPortfolio
