import { NavLink } from "react-router-dom"
import { useState } from "react"


export const WorkWithMe = () => {
    const [, setIsHover] = useState(false);

    const hovering = () => {
        setIsHover(true);
    }
    const notHovering = () => {
        setIsHover(false);
    }

   

    return (
        <div className="z-40 flex border-orange-700 border-2 rounded-full py-1 overflow-y-hidden overflow-x-hidden ">
            <div
            onMouseOver={hovering}
            onMouseOut={notHovering} 
            className="flex flex-col scroll-x text-orange-700"
            >
            
                <NavLink 
                className="mx-1 sm:mx-2 transform transition duration-500"
                to="/contact"
                exact="true">
                LET'S WORK TOGETHER
                </NavLink>
            </div>
        </div>
    )
}