"use client";

import React, { createContext, ReactNode, useState } from "react";

export type ThemeContextType = "light" | "dark";

type Props = {
  children: ReactNode;
};

export type InitialContext = {
  theme: ThemeContextType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeContextType>>;
};

export const ThemeContext = createContext<InitialContext | null>(null);

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<ThemeContextType>("dark");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
