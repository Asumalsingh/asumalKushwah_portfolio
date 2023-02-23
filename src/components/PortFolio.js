import React from "react";
import INotebook from "../assets/portfolio/inotebook.png";
import TodoList from "../assets/portfolio/todo-list.png";

export default function PortFolio() {
  const projects = [
    {
      image: INotebook,
      title: "Note taking web app",
      demo: "https://statuesque-taiyaki-d42f3d.netlify.app/",
      code: "https://github.com/Asumalsingh/i-notebook-frontend",
    },
    {
      image: TodoList,
      title: "Todo list using pure javascript",
      demo: "",
      code: "https://github.com/Asumalsingh/todo-lsit",
    },
  ];

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
                className="rounded-lg shadow-md bg-white p-4 shadow-gray-500"
              >
                <img
                  className="rounded-t-lg"
                  src={project.image}
                  alt="i-notebook"
                />
                <p className="my-6 text-xl">{project.title}</p>
                <div className="flex justify-between items-center">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`pl-3 hover:scale-105 text-blue-500 duration-100`}
                  >
                    Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`pr-3 hover:scale-105 text-blue-500 duration-100`}
                  >
                    Code
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
