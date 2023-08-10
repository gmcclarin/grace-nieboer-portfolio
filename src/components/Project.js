import { useParams } from "react-router-dom";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

export default function Project({getProject}) {
    const {id} = useParams();
    const project = getProject(id)
    console.log(project)

    return (
        <div className="mx-5 mb-10">
            <div className="sm:text-[70px] font-fun font-bold underline p-4">
                <div className="text-4xl sm:text-6xl">{project.name.toUpperCase()}</div>
            </div>
            <div className="flex justify-end m-5 ">
                {/* <div className="text-[50px] font-bold">
                
                </div> */}
                <div className="w-full sm:w-3/4 mb-10" >
                        <ResponsiveMasonry
                            columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                            >
                            <Masonry gutter="20px" >
                                {(project.photos).map((photo, i) => (
                                    <img
                                        key={i}
                                        src={photo.url}
                                        style={{width: "100%", display: "block"}}
                                        alt={photo.name}
                                    />
                                ))}
                            </Masonry>
                        </ResponsiveMasonry>
                    </div>
            </div>
        </div>
    )
}