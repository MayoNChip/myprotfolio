import React from "react";

interface Props {
  schema: string;
}

function Divider({ schema }: Props) {
  return (
    <div
      className={`flex h-[1px] w-2/12 ${
        schema === "dark" ? "bg-accent" : "bg-main-dark"
      } my-5 `}
    />
  );
}

export default Divider;
