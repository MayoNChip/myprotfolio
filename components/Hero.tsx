import Image from "next/image";
import React from "react";
import coverPicture from "../public/main_cover.png";
import coverBG from "../public/cover_picture_bg.jpg";

interface Props {}

function Hero(props: Props) {
  const {} = props;

  return (
    <div className="flex w-1/2 h-full items-center my-10 space-x-14">
      <div className="flex flex-col items-center">
        <div className="w-[350px] relative h-[700px] rounded-full">
          <Image
            className="absolute bottom-0 w-[350px] h-[350px] z-[2] hover:-translate-y-1"
            // src="https://avatars.githubusercontent.com/u/94110636?s=400&u=66151f36a76602b53d888f41d5a8c311c8da4623&v=4"
            src={coverPicture}
            alt="Profile Picture"
            width="0"
            height="0"
          />
          <Image
            className="absolute bottom-0 rounded-full w-[350px] h-[350px] "
            // src="https://avatars.githubusercontent.com/u/94110636?s=400&u=66151f36a76602b53d888f41d5a8c311c8da4623&v=4"
            src={coverBG}
            alt="Profile Picture"
            width="0"
            height="0"
          />
        </div>
        <div className="flex flex-col w-[400px]">
          <span className="text-6xl font-light text-main">Hi, my name is</span>
          <span className="text-6xl text-secondary font-black">Ido Cohen.</span>
          <span className="text-2xl font-light text-main text-left ">
            I'm a fullstack developer.
          </span>
        </div>
      </div>
      <div className="w-[340px] md:h-[300px] flex flex-col items-left text-left justify-between">
        <h2 className="text-[5rem] text-secondary ">
          {/* Transforming ideas into reality. */}
          Crafting
        </h2>
        <div className="flex justify-between px-2">
          <h3 className="text-4xl text-main">unique</h3>
          <h3 className="text-4xl text-main">user</h3>
        </div>
        <h2 className="text-6xl text-secondary text-left">
          {/* Transforming ideas into reality. */}
          experiences.
        </h2>
      </div>
    </div>
  );
}

export default Hero;
