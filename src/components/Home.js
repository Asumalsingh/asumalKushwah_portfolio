import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import HomeImage from "../assets/homeImage.png";
import { Link } from "react-scroll";
import Social from "./Social";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Home() {
  const [text] = useTypewriter({
    words: ["Full Stack", "Backend", "Node js"],
    loop: 0,
  });
  return (
    <section name="home" className="w-full ">
      <div className="max-w-screen-xl flex flex-col lg:flex-row lg:justify-between lg:items-center mx-auto px-5 md:px-10 py-24 sm:py-44 lg:py-24 xl:py-32 space-y-12 lg:space-x-4">
        <div className="">
          <div className="text-4xl sm:text-7xl xl:text-8xl font-bold ">
            <p>
              I'm a <span className="text-blue-500">{text}</span>
              <span className="font-normal text-blue-500 z-0">
                <Cursor />
              </span>
            </p>
            <p>Developer</p>
          </div>
          <div className="my-5">
            <Social />
          </div>
          <div className="mt-3">
            <button className="">
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="group flex items-center text-white bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 my-2 rounded-md cursor-pointer"
              >
                Portfolio
                <span className="ml-1 group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight size={20} />
                </span>
              </Link>
            </button>
          </div>
        </div>
        <div className="mx-auto">
          <img src={HomeImage} alt="" width="350px" />
        </div>
      </div>
    </section>
  );
}
