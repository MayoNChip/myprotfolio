import Image from "next/image";
import Link from "next/link";
import React from "react";
import coverPicture from "../public/main_cover.png";
import Hero from "../components/Hero";

function page() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Hero />
    </div>
  );
}

export default page;
