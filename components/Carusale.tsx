"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState, useEffect } from "react";
import reactLogo from "../public/reactlogo.png";
import jsLogo from "../public/jslogo.png";
import cssLogo from "../public/csslogo.png";
import nextLogo from "../public/next.svg";

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
    name: "Next Logo",
    src: nextLogo,
  },
  {
    name: "React Logo",
    src: reactLogo,
  },
  {
    name: "CSS Logo",
    src: cssLogo,
  },
  {
    name: "Js Logo",
    src: jsLogo,
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
    <div className="flex items-center justify-center w-11/12 h-auto gap-10 py-4 overflow-hidden rounded-full shadow-2xl shadow-dark-2 bg-text">
      {logosArr &&
        logosArr.map((logo) => {
          // if (logos[logos.length - 1]) {
          //   const newArr = logosArr.map((logo, idx, list) => list[list.length-1-i] - 1);
          //   // const first = logosArr.shift();

          //   setLogosArr(newArr);

          //   return <h1>LAST</h1>;
          // } else {
          return (
            <div
              key={logo.name}
              className="h-auto transition-all animate-left-to-right"
            >
              <Image width={60} height={50} src={logo?.src} alt={logo.name} />
            </div>
          );
          // }
        })}
    </div>
  );
};

export default Carousel;
