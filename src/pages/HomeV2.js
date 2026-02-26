// placeholder image: 
// https://images.unsplash.com/photo-1771032933033-f94d641f3439?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D

import Button from "../components/Button";
import Navigation from "../components/Navigation";

/**
 * structure:
 * 
 * nav bar - top right - sticky
 * 
 * image 75% 
 * 
 */

const bg1 = "https://images.unsplash.com/photo-1771694583915-78f9b39fd6d1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTB8fHxlbnwwfHx8fHw%3D"

export default function HomeV2() {
    return (
        <div className="min-h-screen">
            {/* HERO section*/}
        <div className="bg-cover bg-center h-[75vh]"
        style={{ backgroundImage: `url(${bg1})` }}
        >
            <Navigation />
            <div className="p-4 text-5xl font-serif text-white">
                <p>Grace</p>
                <p>McClarin</p>
            </div>
        </div>

        {/* Pretty fluff section */}
        <div className="h-[25vh] bg-white flex m-10">
            <div>
               <p className="text-3xl w-1/3 font-serif mb-5" >
                SOME BIG BAD WORDS ABOUT ME GO HERE
            </p> 
            <Button label="More about me" />
            </div>

            {/* image of me and something I like */}
            <img alt="me" src="" />
            
        </div>

        {/* Portfolio words with link */}


        {/* photos for about  */}


         </div>
    )
}