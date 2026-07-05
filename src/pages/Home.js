import Button from "../components/Button";
import Navigation from "../components/Navigation";
import california from "../assets/images/home/california.png";
import pellegrino from "../assets/images/home/pellegrino.png";
import mag from "../assets/images/home//mag.jpeg";
import vogue from "../assets/images/home//vogue.jpeg";
import me from "../assets/images/home/me.jpeg";
import boston from "../assets/images/home/boston-art.jpeg";
import fuego2 from "../assets/images/home/fuego2.jpeg";
import laptop2 from "../assets/images/home/laptop2.jpeg";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Seo
        description="Grace McClarin is a full-stack software engineer in Rochester, NY building websites and web apps for small businesses. React, TypeScript, Node, and AWS."
        path="/"
      />
      {/* HERO section*/}
      <div
        className="bg-cover bg-center h-[60vh] md:h-[75vh]"
        style={{ backgroundImage: `url(${boston})` }}
      >
        <Navigation fontColor="white" />
        <div className="p-6 md:p-8 text-4xl md:text-6xl lg:text-7xl font-serif text-white">
          <p>Grace</p>
          <p>McClarin</p>
        </div>
      </div>

      {/* Pretty fluff section */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-6 items-start">
        <div className="col-span-2 md:col-span-4 ">
          <p className="text-2xl md:text-3xl font-serif mb-5">
            I’m drawn to thoughtful design, quiet details, and building things
            that feel both useful and human.
          </p>
          <Link to="/about">              
          <Button label="More about me" />

          </Link>
        </div>

        {/* EMPTY SPACER */}
        <div className="hidden md:block md:col-span-2" />

        {/* image of me and something I like */}
        <img
          alt="me"
          src={california}
          className="w-full h-auto col-span-1 md:col-span-4"
        />
        <div className=" col-span-1 md:col-span-2">
          <img alt="coffee" src={me} className="w-full h-auto" />
          <p className="text-sm md:text-base lg:text-lg leading-relaxed">
            As AI reshapes how we build, I’m focused on ensuring what we build
            still serves people first.
          </p>
        </div>
      </div>

      {/* Portfolio words with link */}
      <div className="bg-amber-900 min-h-[25vh] grid md:grid-cols-4 grid-cols-4 grid-rows-3 gap-6 p-8 text-white">
        <div className="col-span-2 col-start-2 row-start-1 flex items-center justify-center text-justify">
          <p className="max-w-md md:max-w-lg text-base md:text-lg lg:text-2xl leading-relaxed">
            In a rapidly evolving digital landscape — shaped increasingly by
            automation and AI — I care about building technology that remains
            human at its core. My work balances systems thinking with empathy.
          </p>
        </div>
        <div className="col-span-5 row-start-3 flex items-center justify-center text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-serif">
          PORTFOLIO
        </div>
      </div>

      {/* Mason Image Layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 bg-black p-2 md:p-3 aspect-[4/5] md:aspect-[3/2]">
        <img
          alt="1"
          src={laptop2}
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
      <div className="min-h-[50vh] md:min-h-[35vh] px-6 grid grid-cols-3 grid-rows-4 ">
        <div className=" gap-4 col-start-2 col-span-1 row-span-2 row-start-2 flex flex-col items-center justify-center">
          <p className="font-serif text-xl sm:text-2xl md:text-3xl text-justify flex items-center">
            I’m most inspired by work that blends aesthetics with intention —
            where structure supports creativity and simplicity feels powerful.
          </p>
          <div className="flex  items-center justify-center gap-2">
            <p className="mx-auto underline">
              Let’s build something thoughtful.
            </p>
            <Button className="mx-auto" label="ABOUT" />
          </div>
        </div>
      </div>

      {/* 6th section */}
      {/* 6th section */}
      <div className="py-24 md:py-32 px-6 grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        {/* LEFT: Philosophy */}
        <div>
          <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-serif tracking-tight">
            Good design should feel inevitable.
          </p>

          <p className="mt-6 text-base md:text-lg leading-relaxed max-w-md">
            I design and build — from interface to implementation — working
            comfortably across both creative and technical layers.
          </p>
        </div>

        {/* RIGHT: Image */}
        <div className="aspect-[4/5] w-full">
          <img
            alt="about me"
            src={fuego2}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 7th section  */}
      <Footer />
    </div>
  );
}
