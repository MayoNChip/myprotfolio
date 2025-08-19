"use client";
import { useInView } from "framer-motion";
import { RefObject, useRef, useEffect, useState, useMemo } from "react";

interface SectionRef {
  ref: RefObject<HTMLDivElement>;
  isInView: boolean;
  id: string;
  label: string;
}

interface UseSectionRefsReturn {
  sections: {
    hero: SectionRef;
    about: SectionRef;
    projects: SectionRef;
    contact: SectionRef;
  };
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  getSectionById: (sectionId: string) => SectionRef | undefined;
}

const TRANSITION_GAP = "-400px";

export function useSectionRefs(): UseSectionRefsReturn {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] = useState<string>("hero");

  // Use Framer Motion's useInView hook for each section
  const isHeroInView = useInView(heroRef, {
    margin: `0px 0px ${TRANSITION_GAP} 0px`,
  });
  const isAboutInView = useInView(aboutRef, {
    margin: `0px 0px ${TRANSITION_GAP} 0px`,
  });
  const isProjectsInView = useInView(projectsRef, {
    margin: `0px 0px ${TRANSITION_GAP} 0px`,
  });
  const isContactInView = useInView(contactRef, {
    margin: `0px 0px ${TRANSITION_GAP} 0px`,
  });

  // Create section objects with all necessary data
  const sections = useMemo(
    () => ({
      hero: {
        ref: heroRef,
        isInView: isHeroInView,
        id: "hero",
        label: "Home",
      },
      about: {
        ref: aboutRef,
        isInView: isAboutInView,
        id: "about",
        label: "About Me",
      },
      projects: {
        ref: projectsRef,
        isInView: isProjectsInView,
        id: "projects",
        label: "Projects",
      },
      contact: {
        ref: contactRef,
        isInView: isContactInView,
        id: "contact",
        label: "Contact",
      },
    }),
    [isHeroInView, isAboutInView, isProjectsInView, isContactInView]
  );

  // Update active section based on what's in view
  useEffect(() => {
    const sectionsArray = Object.values(sections);
    const inViewSection = sectionsArray.find((section) => section.isInView);

    if (inViewSection) {
      setActiveSection(inViewSection.id);
    }
  }, [isHeroInView, isAboutInView, isProjectsInView, isContactInView]);

  // Scroll to a specific section
  const scrollToSection = (sectionId: string) => {
    const section = Object.values(sections).find((s) => s.id === sectionId);

    // Try direct DOM query as fallback
    if (!section?.ref.current) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    if (section?.ref.current) {
      section.ref.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  // Get section by ID utility function
  const getSectionById = (sectionId: string): SectionRef | undefined => {
    return Object.values(sections).find((s) => s.id === sectionId);
  };

  return {
    sections,
    activeSection,
    scrollToSection,
    getSectionById,
  };
}
