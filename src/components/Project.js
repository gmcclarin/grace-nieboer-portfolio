import { useParams } from "react-router-dom"
export default function Project() {
    const {id} = useParams();

    return (
        <div className="text-[200px]">
           <div>PROJECT YAY you MADE IT THIS FAR!!!</div> 
           <div>
            {id}
           </div>
        </div>
    )
}