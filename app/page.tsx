"use client";

import React, { useContext } from "react";
import Bio from "../components/Bio";
import Carousel from "../components/Carusale";
import Divider from "../components/Divider";
import Hero from "../components/Hero";
import { GlobalContext, InitialContext } from "../context/GlobalContext";

function page() {
  const { darkMode } = useContext(GlobalContext) as InitialContext;
  return (
    <div
      className={`${
        darkMode ? "bg-black-1" : "bg-light"
      } flex flex-col items-center w-full`}
    >
      <Hero />
      <Divider schema={darkMode ? "dark" : "light"} />
      <Bio />
      <Divider schema={darkMode ? "dark" : "light"} />
      <Carousel />
    </div>
  );
}

export default page;
