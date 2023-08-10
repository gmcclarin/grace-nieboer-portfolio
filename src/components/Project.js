import { NavLink } from "react-router-dom";

export default function Project({p}) {
    console.log(p.photos)
    return (
        <div className="hover:text-orange-600">
            <NavLink exact to={`/portfolio/${p.id}`} className="text-9xl font-fun font-bold sm:text-[50px]">
                {p.name.toUpperCase()}.
            </NavLink>
        </div>
    )
}