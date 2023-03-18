import React from "react";
import Insta from "../assets/Social/insta.png";
import Facebook from "../assets/Social/fb_circle.png";
import LinkedIn from "../assets/Social/linkedIn_Circle.png";
import Mail from "../assets/Social/mail.png";
import Git from "../assets/Social/git.png";

export default function Social() {
  const data = [
    {
      logo: LinkedIn,
      url: "https://www.linkedin.com/in/asumal-kushwah/",
    },
    {
      logo: Git,
      url: "https://github.com/Asumalsingh",
    },
    { logo: Insta, url: "https://www.instagram.com/asumal_singh/" },
    { logo: Facebook, url: "https://www.facebook.com/asumal.kushwah.5/" },
  ];
  return (
    <div className="flex items-center space-x-2 sm:space-x-3">
      {data.map((d, index) => {
        return (
          <a
            key={index}
            className="hover:scale-110 duration-100 bg-white flex justify-center items-center w-8 h-8 sm:w-14 sm:h-14 shadow-xl rounded-full"
            href={d.url}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={`${d.logo === Insta ? "w-5 sm:w-10" : "w-6 sm:w-12"}`}
              src={d.logo}
              alt=""
            />
          </a>
        );
      })}
      <a
        className="hover:scale-110 duration-100 bg-white flex justify-center items-center w-8 h-8 sm:w-14 sm:h-14 shadow-xl rounded-full"
        href="mailto: codewithasu@gmail.com"
      >
        <img className="w-5 sm:w-10" src={Mail} alt="" />
      </a>
    </div>
  );
}
