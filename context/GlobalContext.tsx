"use client";
import { useInView } from "framer-motion";
import {
  createContext,
  Dispatch,
  ReactNode,
  RefObject,
  SetStateAction,
  useRef,
  useState,
} from "react";

type Props = {
  children: ReactNode;
};

export type InitialContext = {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  inViewComponentId: number;
  setInViewComponentId: Dispatch<SetStateAction<number>>;
  refs: { id: number; ref: RefObject<HTMLDivElement> }[];
  setRefs: Dispatch<SetStateAction<{ id: number; ref: any }[]>>;
  isHeroInView: boolean;
  isAboutMeInView: boolean;
  isProjectsInView: boolean;
  isContactMeInView: boolean;
};

export const GlobalContext = createContext<InitialContext | null>(null);

const ThemeProvider = ({ children }: Props) => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [inViewComponentId, setInViewComponentId] = useState<number>(1);
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactMeRef = useRef<HTMLDivElement>(null);

  const [refs, setRefs] = useState([
    { id: 1, ref: heroRef },
    { id: 2, ref: aboutMeRef },
    { id: 3, ref: projectsRef },
    { id: 4, ref: contactMeRef },
  ]);

  const transitionGap = "-400px";

  const isHeroInView = useInView(refs[0].ref, {
    margin: `0px 0px ${transitionGap} 0px`,
  });
  const isAboutMeInView = useInView(refs[1].ref, {
    margin: `0px 0px ${transitionGap} 0px`,
  });
  const isProjectsInView = useInView(refs[2].ref, {
    margin: `0px 0px ${transitionGap} 0px`,
  });
  const isContactMeInView = useInView(refs[3].ref, {
    margin: `0px 0px ${transitionGap} 0px`,
  });

  return (
    <GlobalContext.Provider
      value={{
        darkMode,
        setDarkMode,
        inViewComponentId,
        setInViewComponentId,
        refs,
        setRefs,
        isHeroInView,
        isAboutMeInView,
        isProjectsInView,
        isContactMeInView,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ThemeProvider;
