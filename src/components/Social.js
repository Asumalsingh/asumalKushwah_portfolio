import React from "react";
import Insta from "../assets/Social/insta.png";
import Facebook from "../assets/Social/fb.png";
import LinkedIn from "../assets/Social/linkedIn.png";
import Mail from "../assets/Social/mail.png";

export default function Social() {
  const data = [
    { logo: Insta, url: "https://www.instagram.com/asumal_singh/" },
    { logo: Facebook, url: "https://www.facebook.com/asumal.kushwah.5/" },
    {
      logo: LinkedIn,
      url: "https://www.linkedin.com/in/asumal-singh-035397240/",
    },
  ];
  return (
    <div className="flex items-center space-x-4">
      {data.map((d, index) => {
        return (
          <a
            key={index}
            className="hover:scale-110 duration-100"
            href={d.url}
            target="_blank"
            rel="noreferrer"
          >
            <img className="w-10" src={d.logo} alt="" />
          </a>
        );
      })}
      <a
        className="hover:scale-110 duration-100"
        href="mailto: codewithasu@gmail.com"
      >
        <img className="w-12" src={Mail} alt="" />
      </a>
    </div>
  );
}
