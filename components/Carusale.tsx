"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState, useEffect } from "react";
import reactLogo from "../public/reactlogo.png";
import jsLogo from "../public/jslogo.png";
import cssLogo from "../public/csslogo.png";
import nextLogo from "../public/next.svg";
import nodeJsLogo from "../public/nodejslogo.png";
import tailwindLogo from "../public/tailwindlogo.png";
import tsLogo from "../public/Typescript_logo_2020.svg";
import expressLogo from "../public/Expressjs.png";

// TODO:
// 1. make carisale endlessly spin
// 2. add all other logos
// 3. pasue scroll on hover
// 4. add tooltips on each logo?

interface CarouselProps {
  logos: string[];
  duration?: number;
}

interface Logos {
  name: string;
  src: string;
}

const logos = [
  {
    name: "Next",
    src: nextLogo,
  },
  {
    name: "React",
    src: reactLogo,
  },
  {
    name: "CSS",
    src: cssLogo,
  },
  {
    name: "Js",
    src: jsLogo,
  },
  {
    name: "Node",
    src: nodeJsLogo,
  },
  {
    name: "tailwind",
    src: tailwindLogo,
  },
  {
    name: "TS",
    src: tsLogo,
  },
  {
    name: "express",
    src: expressLogo,
  },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [logosArr, setLogosArr] = useState([...logos]);

  const handleMouseEnter = () => {
    setPaused(true);
  };

  const handleMouseLeave = () => {
    setPaused(false);
  };

  return (
    <>
      <div className="relative flex items-center justify-center w-11/12 h-auto py-4 overflow-hidden rounded-full shadow-2xl shadow-dark-2 bg-text">
        <div className="flex w-full justify-evenly">
          <div className="flex items-center w-full animate-marquee whitespace-nowrap">
            {logosArr &&
              logosArr.map((logo) => {
                return (
                  <div key={logo.name} className="w-[80px] h-auto mx-10">
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
          <div className="absolute flex items-center w-full animate-marquee2 whitespace-nowrap">
            {logosArr &&
              logosArr.map((logo) => {
                return (
                  <div key={logo.name} className="w-[80px] h-auto mx-10">
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
