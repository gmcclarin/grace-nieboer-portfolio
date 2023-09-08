
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

export default function InspiredInteriors () {

    const photos = [
        {src:"https://i.postimg.cc/VkmSncp2/Screenshot-2023-05-10-at-10-50-29-AM.png",
        name:"home page",
        isPhoto: true},
        {src:"https://i.postimg.cc/Y2fC8fW0/Screenshot-2023-08-10-at-9-54-37-PM.png",
        name:"log in",
        isPhoto:true},
        {src:"https://i.postimg.cc/xdvFzCXk/Screenshot-2023-08-10-at-10-07-30-PM.png",
        name:"palette",
        isPhoto:true},
        {src:"https://i.postimg.cc/kXCBMfkF/Screenshot-2023-08-10-at-10-22-19-PM.png",
        name:"moodboard",
        isPhoto:true},
        {src:"https://player.vimeo.com/video/853567624?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&autopause=0",
        name:"palette video",
        isPhoto:false},
    ]

    return (
        <div className="p-2 sm:p-10 mb-10 sm:mb-40">
            <div className="font-fun sm:my-14 text-neutral-300 text-center font-bold sm:py-8">
                <div className="text-4xl sm:text-9xl">INSPIRED INTERIORS</div>
            </div>
            <div className="m-2 text-right">
                <div className="m-3">
                    <div className="font-bold sm:text-4xl italic">Full Stack interior design planning and inspiration solution application</div>
                    <div className="m-4">
                        <div className="text-4xl  font-bold">THE TECH STACK</div>
                        <div className="text-3xl">REACT JS</div>
                        <div className="text-3xl">JAVASCRIPT</div>
                        <div className="text-3xl">PYTHON</div>
                        <div className="text-3xl">FLASK</div>
                        <div className="text-3xl">SQLITE3</div>
                        <div className="text-3xl">MATERIAL UI</div>
                    </div>
                </div>
                <div className="flex justify-between sm:m-20 m-5">
                    <div className="text-3xl m-3">PLACEHOLDER</div>
                    <div className="text-3xl m-3">PLACEHOLDER</div>
                </div>
                <div className="text-3xl sm:m-20 m-5">AGAIN, LOREM IPSUM ETC ETC</div>
                <div className="w-full mb-10" >
                    
                        <ResponsiveMasonry
                            columnsCountBreakPoints={{350: 2, 750: 2, 900: 3}}
                            >
                            <Masonry gutter="20px" >
                                {(photos).map((photo, i) => {
                                    if (photo.isPhoto) {
                                        return (
                                        <img
                                            key={i}
                                            src={photo.src}
                                            style={{width: "100%", display: "block"}}
                                            alt={photo.name}
                                        /> 
                                        )
                                } else {
                                    return (
                                        <iframe 
                                        key={i}
                                        src={photo.src}
                                        style={{width:"100%", height:"100%", display: "block"}}
                                        title={photo.name}
                                        allow="autoplay;"
                                        // frameBorder="0"
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