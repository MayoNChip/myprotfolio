import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { InitialContext, ThemeContext } from "../context/GlobalContext";
import logo from "../public/logoFinal.png";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

// TODO:
// 1. Responsivness

function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext) as InitialContext;

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`relative flex items-center w-full px-4 py-4 mx-auto my-auto h-5/6 shadow-middle justify-between ${
        theme === "dark" ? " bg-black-2" : "bg-light"
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

      <Link
        className="hidden text-light text-semibold md:inline-block hover:text-accent active:text-secondary"
        href="/about"
      >
        About Me
      </Link>
      <Link
        className="hidden text-light text-semibold md:inline-block"
        href="/projects"
      >
        Projects
      </Link>
      <div className="flex w-1/12 gap-6 px-4 ">
        <button className="text-white" onClick={handleThemeChange}>
          {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
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

export default Navbar;
