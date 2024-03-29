import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const links = ["home", "about", "skills", "portfolio"];
  return (
    <nav className="flex justify-between items-center w-full h-16 px-5 md:px-10 backdrop-blur-xl fixed">
      <h1 className="text-4xl z-20 font-semibold font-signature cursor-pointer">
        Asumal
      </h1>
      <ul className="hidden lg:flex">
        {links.map((link, index) => {
          return (
            <li
              key={index}
              className="px-4 capitalize cursor-pointer text-gray-500 font-medium hover:text-blue-500 hover:scale-105 duration-100"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          );
        })}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-20 text-gray-500 lg:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="z-10 flex lg:hidden flex-col items-center w-full  py-24 absolute top-0 left-0 bg-slate-50 h-screen">
          {links.map((link, index) => {
            return (
              <li
                key={index}
                className="py-3 px-4 capitalize cursor-pointer text-gray-500 font-medium hover:scale-105 duration-100 "
              >
                <Link
                  to={link}
                  smooth
                  duration={500}
                  onClick={() => {
                    setNav(false);
                  }}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}
