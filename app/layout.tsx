"use client";
import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import NavbarSinglePage from "../components/NavbarSinglePage";
import ThemeProvider, {
  GlobalContext,
  InitialContext,
} from "../context/GlobalContext";
import "../styles/globals.css";

interface Props {
  children: React.ReactNode;
}

function layout({ children }: Props) {
  return (
    <html lang="en">
      <head />
      <body>
        <ThemeProvider>
          <div className="flex flex-col w-full">
            <NavbarSinglePage />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default layout;
