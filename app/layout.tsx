import React from "react";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

interface Props {
  children: React.ReactNode;
}

function layout({ children }: Props) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="flex flex-col w-full">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}

export default layout;
