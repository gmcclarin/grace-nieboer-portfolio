import { NavLink } from "react-router-dom";

export default function Project({p}) {
    console.log(p.photos)
    return (
        <div className="hover:text-orange-500">
            <NavLink exact to={`/portfolio/${p.name}`} className="text-9xl font-fun font-bold sm:text-[50px]">
                {p.name.toUpperCase()}.
            </NavLink>
        </div>
    )
}