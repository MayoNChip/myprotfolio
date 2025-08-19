"use client";
import { useContext, useEffect, useState } from "react";
import { GlobalContext, GlobalContextType } from "../context/GlobalContext";
import { useSectionRefs } from "./useSectionRefs";

function useNav() {
  const { activeSection } = useContext(GlobalContext) as GlobalContextType;
  const { sections, scrollToSection } = useSectionRefs();
  const [navbarVisable, setNavbarVisable] = useState(true);
  const [lastYPos, setLastYPos] = useState(0);
  const [routeByClick, setRouteByClick] = useState(false);

  // Convert sections to routes format for navbar
  const routes = Object.values(sections).map((section, index) => ({
    id: index + 1,
    sectionId: section.id,
    title: section.label,
    isInView: section.isInView,
  }));

  useEffect(() => {
    const handleScroll = () => {
      if (routeByClick) {
        window.removeEventListener("scroll", handleScroll, false);
        setRouteByClick(false);
        return;
      }
      const yPos = window.scrollY;
      const isScrollingUp = yPos < lastYPos;

      setNavbarVisable(isScrollingUp);
      setLastYPos(yPos);
    };

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos, routeByClick]);

  const handleRouteClick = (sectionId: string) => {
    setRouteByClick(true);
    scrollToSection(sectionId);
  };

  // Map activeSection to numeric ID for backward compatibility
  const getInViewComponentId = () => {
    const sectionMap: { [key: string]: number } = {
      hero: 1,
      about: 2,
      projects: 3,
      contact: 4,
    };
    return sectionMap[activeSection] || 1;
  };

  return {
    routes,
    activeSection,
    navbarVisable,
    handleRouteClick,
    inViewComponentId: getInViewComponentId(),
  };
}

export default useNav;
