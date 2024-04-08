"use client";
import React from "react";
import ThemeProvider from "../context/GlobalContext";
import "../styles/globals.css";
import { Navbar } from "./_components/Navbar";
import { Josefin_Sans } from "next/font/google";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
  display: "swap",
});

interface Props {
  children: React.ReactNode;
}

function layout({ children }: Props) {
  return (
    <html lang="en" className={josefinSans.className}>
      <body className="relative flex flex-col items-center w-screen h-screen overflow-x-hidden font-josefin scroll-smooth bg-dark ">
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

export default layout;
