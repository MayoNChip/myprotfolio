import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { ThemeContext } from "../context/GlobalContext";
import logo from "../public/logoFinal.png";
// TODO:
// 1. Responsivness

function Navbar() {
  const themeContext = useContext(ThemeContext);

  const handleThemeChange = () => {
    themeContext?.setTheme(themeContext.theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`relative flex items-center w-full px-4 py-4 mx-auto my-auto h-5/6 shadow-middle justify-evenly ${
        themeContext?.theme === "dark" ? " bg-black-2" : "bg-secondary"
      }`}
    >
      <div className="absolute flex items-center h-6 left-6">
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
        className="  text-light text-semibold hidden md:inline-block hover:text-accent active:text-secondary"
        href="/about"
      >
        About Me
      </Link>
      <Link
        className="text-light text-semibold hidden md:inline-block"
        href="/projects"
      >
        Projects
      </Link>
      <button className="text-white" onClick={handleThemeChange}>
        {themeContext?.theme}
      </button>
      <Link
        className="absolute right-0 px-4 py-2 my-auto rounded-l-lg hidden md:inline-block text-semibold hover:bg-main bg-main-dark hover:text-white text-accent"
        href="/contactme"
      >
        Contact
      </Link>
    </div>
  );
}

export default Navbar;
