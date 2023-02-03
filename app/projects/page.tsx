import Image from "next/image";
import Link from "next/link";
import React from "react";
import guruImage from "../../public/guru.png";
import { projects } from "../../lib/projects";

//TODO:
// - Tags

function page() {
  return (
    <div className="flex flex-col self-center w-11/12 my-10">
      {projects.map((project) => {
        return (
          <div className="flex self-center w-2/3 h-full my-6 transition-transform duration-500 bg-orange-100 rounded-md shadow-md hover:scale-105">
            <div className="flex items-center justify-between w-full px-4 py-4 h-11/12">
              <div className="flex flex-col w-full h-full">
                <h1 className="text-2xl font-black text-black-2">
                  {project.title}
                </h1>
                <div className="flex justify-between w-full h-full px-4 py-4">
                  <h1 className="text-xl font-light text-black-2">
                    {project.description}
                  </h1>
                  <Link
                    href={project.url}
                    className="self-end font-medium text-md text-secondary hover:text-accent"
                  >
                    To Project
                  </Link>
                </div>
              </div>
              <div className="flex w-[500px] h-fit my-5">
                <Image src={project.image} alt="guru Supermarket Image" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default page;
