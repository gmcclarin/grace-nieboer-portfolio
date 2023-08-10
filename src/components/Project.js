import { useParams } from "react-router-dom"
export default function Project({getProject}) {
    const {id} = useParams();
    const project = getProject(id)
    console.log(project)

    return (
        <div className="text-[200px]">
           <div>YAY you MADE IT THIS FAR!!!</div> 
           <div>
            {id}
           </div>
        </div>
    )
}