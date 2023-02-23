import React from "react";
import htmlImage from "../assets/skills/html.png";
import cssImage from "../assets/skills/css.png";
import javascriptImage from "../assets/skills/javascript.png";
import reactJsImage from "../assets/skills/react.png";
import nextJsImage from "../assets/skills/nextjs.png";
import nodeJsImage from "../assets/skills/node.png";
import tailwindImage from "../assets/skills/tailwind.png";
import graphqlImage from "../assets/skills/graphql.png";
import javaImage from "../assets/skills/java.png";
import mongoImage from "../assets/skills/mongo.png";

export default function Skills() {
  const skills = [
    { image: javaImage, title: "Java", style: "shadow-red-500" },
    { image: javascriptImage, title: "Javascript", style: "shadow-yellow-500" },
    { image: htmlImage, title: "HTML", style: "shadow-orange-500" },
    { image: cssImage, title: "CSS", style: "shadow-blue-500" },
    { image: reactJsImage, title: "React", style: "shadow-cyan-500" },
    { image: nextJsImage, title: "Next Js", style: "shadow-slate-400" },
    { image: nodeJsImage, title: "Node Js", style: "shadow-lime-600" },
    { image: mongoImage, title: "Mongo DB", style: "shadow-green-600" },
    { image: tailwindImage, title: "Tailwind CSS", style: "shadow-sky-400" },
    { image: graphqlImage, title: "Graphql", style: "shadow-pink-400" },
  ];
  return (
    <section name="skills" className="w-full">
      <div className="max-w-screen-xl mx-auto px-5 md:px-10 pt-24">
        <div>
          <h2 className="text-4xl pb-4 font-bold underline underline-offset-8 decoration-gray-600">
            Skills
          </h2>
          <p className="text-gray-500 pb-8">
            Here are the techonology i've worked with
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 text-center gap-8">
          {skills.map((skill, index) => {
            return (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-md p-4 ${skill.style}`}
              >
                <img
                  className="w-20 mx-auto hover:scale-105 duration-200"
                  src={skill.image}
                  alt=""
                />
                <p className="mt-4">{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
