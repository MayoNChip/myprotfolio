import React from "react";
import Bio from "../components/Bio";
import Carousel from "../components/Carusale";
import Divider from "../components/Divider";
import Hero from "../components/Hero";
import reactLogo from "../public/reactlogo.png";
import jsLogo from "../public/jslogo.png";

function page() {
  return (
    <div className="flex flex-col items-center w-full">
      <Hero />
      <div className="flex h-[1px] w-2/12 bg-accent md:my-10 my-5"></div>
      <Bio />
      <div className="flex h-[1px] w-2/12 bg-dark my-5"></div>
      <Carousel />
    </div>
  );
}

export default page;
