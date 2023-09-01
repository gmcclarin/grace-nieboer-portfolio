
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

export default function ({p}) {
    console.log(p)

    return (
        <div className="p-2 sm:p-10 mb-10 sm:mb-40 bg-stone-900 bg-opacity-75">
            <div className="font-fun sm:my-14 text-neutral-300 text-center font-bold sm:py-8">
                <div className="text-4xl sm:text-9xl">{p.name.toUpperCase()}</div>
            </div>
            <div className="m-2 text-right">
                <div className="m-3">
                    <div className="font-bold sm:text-4xl italic">{p.descript}</div>
                    <div className="m-4">
                        <div className="text-4xl  font-bold">THE TECH STACK</div>
                        <div className="text-3xl">{p.front_end}</div>
                        <div className="text-3xl">{p.back_end}</div>
                        <div className="text-3xl">{p.database}</div>
                        <div className="text-3xl">{p.css}</div>
                    </div>
                </div>
                <div className="w-full mb-10" >
                    
                        <ResponsiveMasonry
                            columnsCountBreakPoints={{350: 2, 750: 2, 900: 3}}
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