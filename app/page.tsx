import Image from "next/image";
import Link from "next/link";
import React from "react";
import coverPicture from "../public/main_cover.png";

function page() {
  return (
    <>
      <div className="flex w-1/2 h-full items-center my-10 space-x-14">
        <div className="flex flex-col items-center">
          <Image
            className="rounded-full"
            // src="https://avatars.githubusercontent.com/u/94110636?s=400&u=66151f36a76602b53d888f41d5a8c311c8da4623&v=4"
            src={coverPicture}
            alt="Profile Picture"
            width={350}
            height={350}
          />
          <h1 className="text-6xl font-light text-secondary text-left">
            Hi. I'm Ido.
            <br /> A Developer.
          </h1>
        </div>
        <div className="w-1/2 h-full flex flex-coll items-center">
          <h2 className="text-8xl text-secondary">
            Code is art, craft, science.
          </h2>
        </div>
      </div>
    </>
  );
}

export default page;
