import React from "react";
import { z } from "zod";

function page() {
  const validation = z.object({
    title: z.string().min(1),
    from: z.string().email().min(5),
    description: z.string().min(8, "Minimun 8 characters"),
  });

  return (
    <>
      <div className="flex flex-col w-11/12 my-10">
        <h1 className="my-4 text-4xl  text-text">Get in touch with me!</h1>

        <div>
          <div className="w-1/6">
            <h2 className="text-text">Email</h2>
            <input
              placeholder=""
              className="px-2 outline-none rounded-xl"
            ></input>
          </div>
          <div className="w-1/6">
            <h2 className="text-text">Email</h2>
            <input
              placeholder=""
              className="px-2 outline-none rounded-xl"
            ></input>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
