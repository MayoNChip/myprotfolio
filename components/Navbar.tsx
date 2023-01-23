import Link from "next/link";
import React from "react";

// TODO:
// 1. Responsivness

function Navbar() {
  return (
    <div className="relative flex items-center w-full px-4 py-4 mx-auto my-auto h-5/6 shadow-middle justify-evenly bg-black-2">
      <div className="absolute flex items-center h-6 left-6">
        <h1 className="text-3xl font-semibold text-text">LOGO</h1>
      </div>

      <Link
        className="text-text text-semibold hidden md:inline-block hover:text-accent active:text-secondary"
        href="/about"
      >
        About Me
      </Link>
      <Link
        className="text-text text-semibold hidden md:inline-block"
        href="/projects"
      >
        Projects
      </Link>
      <Link
        className="absolute right-0 px-4 py-2 my-auto rounded-l-lg hidden md:inline-block text-semibold hover:bg-main bg-main-dark hover:text-white text-accent"
        href="/contact"
      >
        Contact
      </Link>
    </div>
  );
}

export default Navbar;
