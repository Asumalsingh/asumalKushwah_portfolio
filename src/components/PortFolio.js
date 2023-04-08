import React from "react";

import projects from "../projectsData";

export default function PortFolio() {
  // console.log(projects[1].demo === "");
  return (
    <section name="portfolio" className="w-full ">
      <div className="max-w-screen-xl py-24 mx-auto px-5 md:px-10">
        <h2 className="text-4xl font-bold pb-4 underline underline-offset-8 decoration-gray-600">
          Portfolio
        </h2>
        <p className="text-gray-500 pb-8">Here is my some awesome work</p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className="rounded-lg shadow-lg bg-white flex flex-col justify-between"
              >
                <div>
                  <iframe
                    className="w-full aspect-video rounded-t-lg"
                    src={`https://www.youtube.com/embed/${project.videoId}`}
                    title="Todo List"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen={true}
                  ></iframe>

                  <h2 className="mt-6 px-4 mb-1 text-lg font-medium">
                    {project.title}
                  </h2>
                  <ul className="list-disc ml-4 px-4 text-sm">
                    {project.description.map((bullet, idx) => {
                      return <li key={idx}>{bullet}</li>;
                    })}
                  </ul>
                </div>
                <div className="flex p-5 justify-between items-center">
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                      project.code === "" ? "hidden" : ""
                    } pl-3 hover:scale-110 text-blue-500 duration-100`}
                  >
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                      project.demo === "" ? "hidden" : ""
                    } pl-3 hover:scale-110 text-blue-500 duration-100`}
                  >
                    Demo
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
