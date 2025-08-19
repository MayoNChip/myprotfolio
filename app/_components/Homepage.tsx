"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useContext, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GlobalContext, GlobalContextType } from "../../context/GlobalContext";
import { useSectionRefs } from "../../hooks/useSectionRefs";
import AboutMe from "./AboutMe";
import Carousel from "./Carusale";
import ContactMeForm from "./ContactMe";
import Footer from "./Footer";
import Hero from "./Hero";
import ProjectsNew from "./ProjectsNew";
import { SectionWrapper } from "./SectionWrapper";

export default function Home() {
  const { sections, activeSection } = useSectionRefs();
  const { setActiveSection } = useContext(GlobalContext) as GlobalContextType;
  const { scrollY } = useScroll();
  const scrolled = useTransform(scrollY, [0, 200], [1, 0]);

  // Sync active section with global context
  useEffect(() => {
    setActiveSection(activeSection);
  }, [activeSection, setActiveSection]);

  return (
    <div className="relative flex flex-col w-full h-screen bg-dark">
      <div className="flex items-center self-center justify-center w-1/2 h-full text-white"></div>

      <SectionWrapper sectionId="hero" sectionRef={sections.hero.ref}>
        <Hero />
      </SectionWrapper>

      <SectionWrapper
        sectionId="about"
        sectionRef={sections.about.ref}
        className="flex flex-col"
      >
        <AboutMe />
        <Carousel />
      </SectionWrapper>

      <SectionWrapper sectionId="projects" sectionRef={sections.projects.ref}>
        <ProjectsNew />
      </SectionWrapper>

      <SectionWrapper sectionId="contact" sectionRef={sections.contact.ref}>
        <ContactMeForm />
      </SectionWrapper>

      <div className="h-screen">
        <Footer />
      </div>

      <motion.div
        className="sticky self-center"
        initial={{
          bottom: 0,
        }}
        animate={{
          bottom: [5, 0, 5],
        }}
        transition={{
          duration: 0.7,
          repeat: Infinity,
        }}
        style={{
          opacity: scrolled,
        }}
      >
        <MdKeyboardArrowDown className="z-10 w-8 h-8 text-dark" />
      </motion.div>
    </div>
  );
}
