import React from "react";

interface Props {
  width: number | string;
  color: "dark" | "secondary";
}

function Divider({ width, color }: Props) {
  if (width === 0) {
    return <div className={`flex h-[1px] w-72 bg-${color}`}></div>;
  }
  //   return <div className={`flex h-[1px] w-[${width}px] bg-${color}`}></div>;
  return <div className={`flex h-[1px] w-[580px] bg-${color}`}></div>;
}

export default Divider;
