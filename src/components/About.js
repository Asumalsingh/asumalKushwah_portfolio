import React from "react";
import MyImage from "../assets/myImage.jpeg";

export default function About() {
  const aboutData = [
    { time: "1", title: "years experience" },
    { time: "4", title: "Completed Projects" },
  ];
  return (
    <section name="about" className="w-full">
      <div className="max-w-screen-xl pt-24 px-5 md:px-10 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="lg:block hidden text-center">
            <span>
              <img src={MyImage} alt="" className="rounded-full w-60" />
            </span>
            <h3 className="text-black font-semibold underline underline-offset-8 decoration-gray-600 text-2xl mt-4">
              Asumal Kushwah
            </h3>
          </div>
          <div className="lg:w-3/4">
            <h2 className="text-4xl font-bold pb-8 underline underline-offset-8 decoration-gray-500">
              About
            </h2>
            <div className="text-gray-500 mb-3">
              <p>Hello!</p>
              <p>I'm Asumal Kushwah</p>
              <p>
                I am a software engineer with a passion for designing and
                developing high-quality software solutions. Experienced with
                <span className="text-black font-medium">
                  {" "}
                  Data structures & algorithms{" "}
                </span>
                and have good problem solving skills, I am always seeking new
                challenges to help me grow as a professional.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 text-center">
              {aboutData.map((data, index) => {
                return (
                  <div key={index}>
                    <p className="text-4xl font-semibold mt-8 tracking-tighter">
                      {data.time} <span className="text-blue-500">+</span>
                    </p>
                    <p className="text-sm md:text-base text-gray-500 capitalize">
                      {data.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex mt-14">
          <div className="lg:hidden  block text-center mx-auto mb-20">
            <span>
              <img src={MyImage} alt="" className="rounded-full w-60" />
            </span>
            <h3 className="text-black font-semibold underline underline-offset-8 decoration-gray-600 text-2xl  mt-4">
              Asumal Kushwah
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
