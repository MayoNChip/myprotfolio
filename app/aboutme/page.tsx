"use client";

import Image from "next/image";
import React, { useContext } from "react";
import AboutMe from "../../components/AboutMe";
import { GlobalContext, InitialContext } from "../../context/GlobalContext";

function page() {
  return <AboutMe />;
}

export default page;
