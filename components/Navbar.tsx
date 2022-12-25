import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="flex h-5/6 w-full my-auto mx-auto py-4 px-4 shadow-middle justify-evenly items-center relative">
      <div className="flex items-center h-6 absolute left-6">
        <h1 className="text-main text-3xl font-semibold">LOGO</h1>
      </div>

      <Link className="text-main text-semibold" href="/about">
        About Me
      </Link>
      <Link className="text-main text-semibold" href="/projects">
        Projects
      </Link>
      <Link
        className="text-semibold text-dark bg-secondary px-4 py-2 absolute right-0 my-auto rounded-l-lg"
        href="/contact"
      >
        Contact
      </Link>
    </div>
  );
}

export default Navbar;
