"use client";

import React, { useContext } from "react";
import Bio from "../components/Bio";
import Carousel from "../components/Carusale";
import Divider from "../components/Divider";
import Hero from "../components/Hero";
import { ThemeContext } from "../context/GlobalContext";

function page() {
  const themeContext = useContext(ThemeContext);
  return (
    <div
      className={`${
        themeContext?.theme === "dark" ? "bg-black-1" : "bg-light"
      } flex flex-col items-center w-full`}
    >
      <Hero />
      <Divider schema="dark" />
      <Bio />
      <Divider schema="light" />
      <Carousel />
    </div>
  );
}

export default page;
