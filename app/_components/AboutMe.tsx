"use client";

import React, { useContext, useEffect, useRef } from "react";
import { useAnimate, useInView, usePresence } from "framer-motion";
import { GlobalContext, InitialContext } from "../../context/GlobalContext";
import AboutMeHero from "./AboutMeHero";
import AboutMeContent from "./AboutMeContent";

function AboutMe() {
  const { refs } = useContext(GlobalContext) as InitialContext;
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const parentRef = useRef(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const innerElement = heroRef.current;
    if (!innerElement) return;
    const handleScroll = (e: WheelEvent) => {
      const bottom = innerElement.scrollTop - innerElement.clientHeight === 0;

      if (bottom) {
        e.stopImmediatePropagation();
      } else {
        e.stopPropagation();
      }
    };

    innerElement.addEventListener("wheel", handleScroll, { passive: false });
    return () => {
      innerElement.removeEventListener("wheel", handleScroll);
    };
  }, []);

  useEffect(() => {
    const enterAnimations = async () => {
      if (isInView) {
        await animate(scope.current, {
          opacity: [0, 1],
        });
      }
    };

    enterAnimations();
  }, [refs[2], isInView, animate]);

  return (
    <div
      ref={parentRef}
      className="relative flex flex-col w-full h-full "
    >
      <AboutMeHero />
      <AboutMeContent />
    </div>
  );
}

export default AboutMe;
