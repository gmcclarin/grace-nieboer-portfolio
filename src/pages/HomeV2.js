import Button from "../components/Button";
import Navigation from "../components/Navigation";
import coffee from "../photos/escalatorcoffee.png";
import ex2 from "../photos/laptoplove.png";
import ex3 from "../photos/Optimized-starbsandcaution.png";
import fuego from "../photos/home/fuego.jpg";
import california from "../photos/home/california.png";
import palms from "../photos/home/palm-trees.png";
import pellegrino from "../photos/home/pellegrino.png";
import bandw from "../photos/home/black-and-white-flowers.png" 
import waiting from "../photos/home/waitingforthetrain.png"
import mag from "../photos/home/mag.jpeg"
import vogue from "../photos/home/vogue.jpeg"
import me from "../photos/home/me.jpeg"
import boston from "../photos/home/boston-art.jpeg";
import roses from "../photos/home/roses.jpeg";


const placeholder3 =
  "https://images.unsplash.com/photo-1771580425842-36380c98efc4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNDN8fHxlbnwwfHx8fHw%3D";


export default function HomeV2() {
  return (
    <div className="min-h-screen">
      {/* HERO section*/}
      <div
        className="bg-cover bg-center h-[75vh]"
        style={{ backgroundImage: `url(${boston})` }}
      >
        <Navigation />
        <div className="p-8 text-6xl font-serif text-white">
          <p>Grace</p>
          <p>McClarin</p>
        </div>
      </div>

      {/* Pretty fluff section */}
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-2 md:grid-cols-12 gap-5 items-start">
        <div className="col-span-2 md:col-span-4 ">
          <p className="text-3xl font-serif mb-5">
            I’m drawn to thoughtful design, quiet details, and building things that feel both useful and human.
          </p>
          <Button label="More about me" />
        </div>

        {/* EMPTY SPACER */}
        <div className="hidden md:block md:col-span-2" />

        {/* image of me and something I like */}
        <img
          alt="me"
          src={waiting}
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
            This will be some more text about the work that I have done, and why
            I am proud of each item.
          </p>
        </div>
        <div className="col-span-5 row-start-3 flex itens-center justify-center text-9xl font-serif">
          PORTFOLIO
        </div>
      </div>

      {/* photos in mason-ish layout for about  */}

      <div className="grid grid-cols-3 gap-3 bg-black p-3 grid-rows-4 aspect-[3/2]">
        <img
          alt="1"
          src={placeholder3}
          className="row-span-2 col-span-2 w-full h-full object-cover"
        />
        <img
          alt="1"
          src={pellegrino}
          className="row-span-2 w-full h-full object-cover"
        />
        <img
          alt="1"
          src={mag}
          className="row-span-2 w-full h-full object-cover"
        />
        <img
          alt="1"
          src={vogue}
          className="row-span-2 col-span-2 w-full h-full object-cover"
        />
      </div>

      {/* 5th section */}
      <div className="h-[35vh] grid grid-cols-3 grid-rows-4 ">
        <div className=" gap-2 col-start-2 col-span-1 row-span-2 row-start-2 flex flex-col items-center justify-center">
          <p className="font-serif text-2xl text-justify flex items-center">
            Lorem ipsum excaliber gargantuan the quick brown fox jumps over the
            lazt turtle
          </p>
          <p className="mx-auto">SOMETHING</p>
          <Button className="mx-auto" label="ABOUT" />
        </div>
      </div>

      {/* 6th section */}
      <div className="grid grid-cols-4 grid-rows-3 items-center justify-center">
        <p className="col-start-2 col-span-2 text-8xl font-serif">SOME KIND OF QUOTE HERE</p>
        <img alt="about me" className="col-start-2 col-span-1 row-start-2 w-full h-full object-cover"  src={fuego}/>
      </div>

      {/* 7th section  */}
    </div>
  );
}
