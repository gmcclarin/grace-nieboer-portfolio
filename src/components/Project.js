
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

export default function ({p}) {
    

    return (
        <div className="mx-5 mb-10">
            <div className="font-fun font-bold p-4">
                <div className="text-4xl sm:text-6xl underline">{p.name.toUpperCase()}</div>
            </div>
            <div className="flex justify-end m-2 ">
                <div className="w-1/2 m-3 text-xl">{p.descript}
                <div className="m-4">
                        <div className="text-2xl underline font-bold">Built With</div>
                        <div className="text-2xl">{p.front_end}</div>
                        <div className="text-2xl">{p.back_end}</div>
                        <div className="text-2xl">{p.database}</div>
                        <div className="text-2xl">{p.css}</div>
                </div></div>
                <div className="w-full sm:w-3/4 mb-10" >
                    
                        <ResponsiveMasonry
                            columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                            >
                            <Masonry gutter="20px" >
                                {(p.photos).map((photo, i) => {
                                    if (photo.isPhoto) {
                                        return (
                                        <img
                                            key={i}
                                            src={photo.url}
                                            style={{width: "100%", display: "block"}}
                                            alt={photo.name}
                                        /> 
                                        )
                                } else {
                                    return (
                                        <iframe 
                                        src={photo.url}
                                        style={{width:"100%", height:"100%", display: "block"}}
                                        title={photo.name}
                                        allow="autoplay;"
                                        frameborder="0"
                                        />
                                    )
                                }
                            })}
                            </Masonry>
                        </ResponsiveMasonry>
                    </div>
            </div>
        </div>
    )
}