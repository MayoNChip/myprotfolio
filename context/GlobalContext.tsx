"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type Props = {
  children: ReactNode;
};

export type GlobalContextType = {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  activeSection: string;
  setActiveSection: Dispatch<SetStateAction<string>>;
};

// Keep InitialContext for backward compatibility during migration
export type InitialContext = GlobalContextType;

export const GlobalContext = createContext<GlobalContextType | null>(null);

const ThemeProvider = ({ children }: Props) => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>("hero");

  return (
    <GlobalContext.Provider
      value={{
        darkMode,
        setDarkMode,
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ThemeProvider;
