import Image from "next/image";
import React from "react";
import bioImage from "../public/pclogo.png";

//TODO:
// 1. Better accessibility, make text nicer on the light background and easier to read
// 2. Add another section about me and what I like to do
// 3. responsiveness

function Bio() {
  return (
    <div className="flex flex-col items-center justify-evenly md:w-full my-4">
      <div className="relative flex items-center justify-start p-12 overflow-hidden shadow-inner md:h-full md:w-full bg-light/70">
        <div className="z-10 mx-2 md:p-6 md:w-7/12 md:h-full text-black-2 md:ml-24">
          <h1 className="text-xl font-semibold md:p-4 md:text-2xl">
            Aspiring web developer with a strong passion for creating intuitive
            and user-friendly websites. I have gained a solid foundation in
            HTML, CSS, and JavaScript including TypeScript through various
            online courses and personal projects, including a comprehensive
            course at ITC.
          </h1>
          <h1 className="hidden p-4 text-xl md:text-2xl text-light md:text-black-2 md:inline-block">
            I am constantly learning and improving my skills, and am excited to
            apply my knowledge to real-world projects as I begin my career in
            web development. I am confident that my enthusiasm and dedication,
            combined with the skills and knowledge I have gained from ITC, will
            make me a valuable asset to any team.
          </h1>
        </div>
        <div className="absolute md:left-[800px] p-4 md:w-5/12 rounded-2xl opacity-[15%]  ">
          <Image
            src={bioImage}
            alt="bio image"
            width="1000"
            className="rounded-2xl"
          />
        </div>
      </div>
      <div className="relative flex w-full h-full overflow-hidden md:hidden ">
        <h1 className="h-full p-4 text-xl md:text-2xl text-light md:hidden">
          I am constantly learning and improving my skills, and am excited to
          apply my knowledge to real-world projects as I begin my career in web
          development. I am confident that my enthusiasm and dedication,
          combined with the skills and knowledge I have gained from ITC, will
          make me a valuable asset to any team.
        </h1>
        <div className="absolute md:left-[800px] hidden bottom-0 p-4 md:w-5/12 rounded-2xl opacity-[15%]  ">
          <Image
            src={bioImage}
            alt="bio image"
            width="1000"
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Bio;
