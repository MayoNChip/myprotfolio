"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { InitialContext, GlobalContext } from "../context/GlobalContext";
import logo from "../public/logoFinal.png";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

// TODO:
// 1. Responsivness

function NavbarSinglePage() {
  const { darkMode, setDarkMode } = useContext(GlobalContext) as InitialContext;

  const handleThemeChange = () => {
    setDarkMode(darkMode ? false : true);
  };

  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      const target = e.currentTarget.getAttribute("href")!.slice(1);
      const targetComponent = document.getElementById(target)!;
      console.log(targetComponent);
      targetComponent.scrollIntoView({ behavior: "smooth" });
    },
    []
  );

  return (
    <div
      className={`relative flex items-center w-full px-4 py-4 mx-auto my-auto h-5/6 shadow-middle justify-between ${
        darkMode ? " bg-black-2" : "bg-light"
      }`}
    >
      <div className="flex items-center h-6">
        <Link
          className="text-light text-semibold hover:text-accent active:text-secondary"
          href="/"
        >
          <div className="w-10">
            <Image src={logo} alt="logo"></Image>
          </div>
        </Link>
      </div>

      <div className="flex items-center gap-6 px-4 w-fit ">
        <button className="text-white" onClick={handleThemeChange}>
          {!darkMode ? <MdDarkMode className="text-black" /> : <MdLightMode />}
        </button>
        <button
          className={`hidden text-semibold md:inline-block ${
            !darkMode
              ? "text-black-1  hover:text-secondary active:text-main-dark"
              : "text-light  hover:text-semi-light active:text-main-dark"
          } `}
        >
          <a href="#aboutme" onClick={handleClick}>
            About Me
          </a>
        </button>
        <button
          className={`hidden text-semibold md:inline-block ${
            !darkMode
              ? "text-black-1  hover:text-secondary active:text-main-dark"
              : "text-light  hover:text-semi-light active:text-main-dark"
          } `}
        >
          <a href="#projects" onClick={handleClick}>
            Projects
          </a>
        </button>

        <Link
          className="hidden px-4 py-2 my-auto rounded-lg md:inline-block text-semibold hover:bg-main bg-main-dark hover:text-white text-accent"
          href="/contactme"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default NavbarSinglePage;
