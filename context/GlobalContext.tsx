"use client";

import React, { createContext, ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};

export type InitialContext = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export const GlobalContext = createContext<InitialContext | null>(null);

const ThemeProvider = ({ children }: Props) => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  return (
    <GlobalContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default ThemeProvider;
