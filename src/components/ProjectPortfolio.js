import { useEffect, useState } from "react"
import Project from "./Project"
import NavBar from "./NavBar"
import MobileMenu from "./MobileMenu"
import {Routes, Route} from 'react-router-dom'
import PortfolioHome from "./PorfolioHome"

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

    const getRoutes = projects.map((p) => {
        return (
            <Route key={p.id} exact path={`:${p.id}`} element={<Project key={p.id} p={p} />} ></Route>
        )
    })

    return (
        <div>
           <PortfolioHome project={projects} displayProjects={displayProjects} />
            <Routes>
                {getRoutes}
            </Routes>
        </div>
    )
}

export default ProjectPortfolio
