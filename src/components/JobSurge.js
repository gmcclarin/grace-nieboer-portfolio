import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

export default function JobSurge () {

    const photos = [
        {src:"https://i.postimg.cc/HWN6Qg2m/Screenshot-2023-08-29-at-9-08-11-PM.png",
        name:"home page",
        isPhoto: true},
        {src:"https://player.vimeo.com/video/859210275?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&autopause=0",
        name:"live clock",
        isPhoto:false},
        {src:"https://player.vimeo.com/video/859211278?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&autopause=0",
        name:"loading web driver",
        isPhoto:false},
        {src:"https://i.postimg.cc/28mtKP5g/Screenshot-2023-08-30-at-7-39-12-PM.png",
        name:"oddballjobs",
        isPhoto:true},
        {src:"https://i.postimg.cc/MZY5vXWr/Screenshot-2023-08-30-at-7-38-14-PM.png",
        name:"todos",
        isPhoto:true},
    ]

    return (
        <div className="p-2 sm:p-10 mb-10 sm:mb-40">
            <div className="font-fun sm:my-14 text-neutral-300 text-center font-bold sm:py-8">
                <div className="text-4xl sm:text-9xl">JobSurge</div>
            </div>
            <div className="m-2 text-right">
                <div className="m-3">
                <div className="font-bold sm:text-4xl italic">SURGE [ v ]: to move suddenly and powerfully forward or upward.</div>
                    <div className="font-bold sm:text-4xl italic">A career dashboard to help me navigate my job search, organize my priorities, and categorize my goals by Day, Week, Month, and Year. JobSurge was built to navigate my transition from Human Resources into tech.</div>
                    <div className="m-4">
                        <div className="text-4xl  font-bold">THE TECH STACK</div>
                        <div className="text-3xl">REACT JS</div>
                        <div className="text-3xl">JAVASCRIPT</div>
                        <div className="text-3xl">PYTHON</div>
                        <div className="text-3xl">FLASK</div>
                        <div className="text-3xl">POSTGRESQL</div>
                        <div className="text-3xl">TAILWIND</div>
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