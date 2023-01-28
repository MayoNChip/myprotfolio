"use client";

import React, { useState } from "react";
import { z, ZodError } from "zod";

const FormValidation = z.object({
  email: z.string().email().min(1),
  message: z.string().min(8, "Minimun 8 characters"),
});

type ContactMeForm = z.infer<typeof FormValidation>;

function page() {
  const [data, setData] = useState<ContactMeForm>({
    email: "",
    message: "",
  });
  const [emailError, setEmailError] = useState<string>();

  console.log(emailError);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((data) => {
      return { ...data, email: e.target.value };
    });
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData((data) => {
      return { ...data, message: e.target.value };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      FormValidation.parse(data);
      //continue to send email
    } catch (error) {
      if (error instanceof z.ZodError) {
        if ((error.errors[0].path = ["email"])) {
          setEmailError(error.errors[0].message);
        }
      }
    }
  };

  return (
    <>
      <div className="flex flex-col w-full my-10 bg-text">
        <div className="flex flex-col self-center">
          <h1 className="my-4 text-4xl text-black-2">Get in touch with me!</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start w-full"
          >
            <div className="w-1/6">
              <h2 className=" text-black-2">Email</h2>
              <input
                defaultValue={data.email}
                placeholder=""
                className="px-2 outline-none rounded-xl text-black-2"
                onChange={(e) => handleEmailChange(e)}
              ></input>
              {emailError && <h1>{emailError}s</h1>}
            </div>
            <div className="w-1/6 ">
              <h2 className=" text-black-2">Message</h2>
              <textarea
                defaultValue={data.message}
                onChange={(e) => handleMessageChange(e)}
                placeholder=""
                className="px-2 outline-none resize-none rounded-xl text-black-2 md:w-[400px] md:h-[250px]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="self-end px-4 py-2 mx-2 my-4 rounded-md bg-cyan-700 text-text hover:bg-cyan-600 hover:text-gray-100 active:bg-cyan-900 active:text-text"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default page;
