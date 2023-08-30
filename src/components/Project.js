
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

export default function ({p}) {
    

    return (
        <div className=" p-10 mb-40 bg-green-900 bg-opacity-50">
            <div className="font-fun font-bold p-4">
                <div className="text-4xl sm:text-6xl ">{p.name.toUpperCase()}</div>
            </div>
            <div className="m-2 text-right">
                <div className="m-3">
                    <div className="font-bold sm:text-2xl">{p.descript}</div>
                    <div className="m-4">
                        <div className="text-2xl underline font-bold">Built With</div>
                        <div className="text-2xl">{p.front_end}</div>
                        <div className="text-2xl">{p.back_end}</div>
                        <div className="text-2xl">{p.database}</div>
                        <div className="text-2xl">{p.css}</div>
                    </div>
                </div>
                <div className="w-full mb-10" >
                    
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