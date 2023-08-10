import { NavLink, useParams } from "react-router-dom";

export default function ProjectNav({p}) {

    return (
        <div className="hover:text-orange-600">
            <NavLink to={`/portfolio/${p.id}`} className="text-9xl font-fun font-bold sm:text-[50px]">
                {p.name.toUpperCase()}.
            </NavLink>
        </div>
    )
}