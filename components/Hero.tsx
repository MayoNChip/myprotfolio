import Image from "next/image";
import React from "react";
import coverPicture from "../public/melogo.png";
import coverBG from "../public/cover_picture_bg.jpg";

// TODO:
// - add responsivness
// - edit the image to not have edges

interface Props {}

function Hero(props: Props) {
  const {} = props;

  return (
    <div className="relative flex justify-start w-full my-4 md:mt-10 overflow-hidden h-[300px] md:h-[600px] md:w-3/4">
      <Image
        className="absolute bottom-5 right-0 md:right-[400px] md:w-[450px] w-[200px]"
        src={coverPicture}
        alt="Profile Picture"
        width="450"
        height="200"
      />
      <div className="flex flex-col h-full w-full md:pb-12 leading-[100px] justify-end z-10 mx-4">
        <span className="text-3xl font-light md:text-6xl text-accent">
          Hi, my name is
        </span>
        <span className="md:text-[120px] font-bold text-6xl text-text">
          Ido Cohen.
        </span>
        <span className="text-3xl font-semibold md:text-6xl text-accent">
          I'm a fullstack developer.
        </span>
      </div>
    </div>
  );
}

export default Hero;
