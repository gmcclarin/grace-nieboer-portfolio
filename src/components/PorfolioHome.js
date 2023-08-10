import NavBar from "./NavBar";
import MobileMenu from "./MobileMenu";

export default function PortfolioHome({ displayProjects}) {

    return (
        <div className="bg-cover m-5 ">
            <div className="sm:hidden"><MobileMenu /></div>
                <div className = "flex-col justify-center text-center">
                    <div className="flex justify-center">
                        <h2 className="text-5xl sm:text-[200px] font-fun pb-10 font-bold">work.</h2>
                    </div>
                    <div className="mb-5 pb-10 flex justify-end ">
                        <div className="sm:w-3/4 m-10 flex-col text-right">
                            {displayProjects}
                        </div>
                    </div>
                    
                </div>
                <div className="invisible sm:visible sm:fixed sm:bottom-0">
                    <NavBar />
                </div>
            </div>
    )
}