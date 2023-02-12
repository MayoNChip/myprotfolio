"use client";

import React, { useContext } from "react";
import About from "../components/About";
import Bio from "../components/Bio";
import Carousel from "../components/Carusale";
import Divider from "../components/Divider";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
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
      <Divider schema={darkMode ? "dark" : "light"} />
      <About id={"aboutme"} />
      <Divider schema={darkMode ? "dark" : "light"} />
      <Projects id={"projects"} />
    </div>
  );
}

export default page;
