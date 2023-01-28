import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/logoFinal.png";
// TODO:
// 1. Responsivness

function Navbar() {
  return (
    <div className="relative flex items-center w-full px-4 py-4 mx-auto my-auto h-5/6 shadow-middle justify-evenly bg-black-2">
      <div className="absolute flex items-center h-6 left-6">
        <Link
          className="text-text text-semibold hover:text-accent active:text-secondary"
          href="/"
        >
          <div className="w-10">
            <Image src={logo} alt="logo"></Image>
          </div>
        </Link>
      </div>

      <Link
        className="text-text text-semibold hover:text-accent active:text-secondary"
        href="/about"
      >
        About Me
      </Link>
      <Link className="text-text text-semibold" href="/projects">
        Projects
      </Link>
      <Link
        className="absolute right-0 px-4 py-2 my-auto rounded-l-lg text-semibold hover:bg-main bg-main-dark hover:text-white text-accent"
        href="/contactme"
      >
        Contact
      </Link>
    </div>
  );
}

export default Navbar;
