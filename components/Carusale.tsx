"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState, useEffect, useContext } from "react";
import { InitialContext, ThemeContext } from "../context/GlobalContext";
import { logos } from "../lib/logos";

// TODO:
// 1. make carisale endlessly spin - Done
// 2. add all other logos
// 3. pasue scroll on hover - Done
// 4. add tooltips on each logo?

interface CarouselProps {
  logos: string[];
  duration?: number;
}

interface Logos {
  name: string;
  src: string;
}

const Carousel: React.FC = () => {
  const [logosArr, setLogosArr] = useState([...logos]);
  const { theme } = useContext(ThemeContext) as InitialContext;

  return (
    <>
      <div
        className={`relative flex items-center justify-center  h-auto py-4 my-4 overflow-hidden  ${
          theme === "light" ? "rounded-none w-full" : "rounded-full w-11/12"
        } shadow-2xl shadow-dark-2 bg-light`}
      >
        <div className="flex w-full justify-evenly pause-animations">
          <div className="relative flex items-center w-full justify-evenly animate-marquee whitespace-nowrap">
            {logosArr &&
              logosArr.map((logo) => {
                return (
                  <div key={logo.name} className="w-[80px] h-auto">
                    <Image
                      width="100"
                      height="50"
                      src={logo?.src}
                      alt={logo.name}
                    />
                  </div>
                );
              })}
          </div>
          <div className="absolute flex items-center w-full justify-evenly animate-marquee2 whitespace-nowrap">
            {logosArr &&
              logosArr.map((logo) => {
                return (
                  <div key={logo.name} className="w-[80px] h-auto">
                    <Image
                      key={logo.name}
                      width="100"
                      height="50"
                      src={logo?.src}
                      alt={logo.name}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
