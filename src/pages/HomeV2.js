import Button from "../components/Button";
import Navigation from "../components/Navigation";
import me1 from "../photos/Optimized-lookatcameraportfolio3.png";
import coffee from "../photos/escalatorcoffee.png";

const bg1 =
  "https://images.unsplash.com/photo-1771694583915-78f9b39fd6d1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTB8fHxlbnwwfHx8fHw%3D";

export default function HomeV2() {
  return (
    <div className="min-h-screen">
      {/* HERO section*/}
      <div
        className="bg-cover bg-center h-[75vh]"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <Navigation />
        <div className="p-4 text-5xl font-serif text-white">
          <p>Grace</p>
          <p>McClarin</p>
        </div>
      </div>

      {/* Pretty fluff section */}
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-2 md:grid-cols-12 gap-5 items-start">
        <div className="col-span-2 md:col-span-3 ">
          <p className="text-3xl font-serif mb-5">
            SOME BIG BAD WORDS ABOUT ME GO HERE
          </p>
          <Button label="More about me" />
        </div>

        {/* EMPTY SPACER */}
        <div className="hidden md:block md:col-span-3" />

        {/* image of me and something I like */}
        <img
          alt="me"
          src={me1}
          className="w-full h-auto col-span-1 md:col-span-4"
        />
        <div className=" col-span-1 md:col-span-2">
          <img alt="coffee" src={coffee} className="w-full h-auto" />
          <p>
            something will go here about my desire to find purpose in coding
            solutions that impact the community
          </p>
        </div>
      </div>

      {/* Portfolio words with link */}
      <div className="bg-amber-900 min-h-[25vh] grid grid-cols-5 grid-rows-3 gap-6 p-8 text-white">
        
        <div className="col-start-3 row-start-1 flex items-center justify-center text-justify">
          <p className="max-w-md">
            This will be some more text about the work that I have done, and why I am proud of
            each item.
          </p>
        </div>
        <div className="col-span-5 row-start-3 flex itens-center justify-center text-9xl font-serif">
            PORTFOLIO
        </div>
      </div>

      {/* photos for about  */}
    </div>
  );
}
