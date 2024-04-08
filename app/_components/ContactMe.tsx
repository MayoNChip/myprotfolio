"use client";

import React, { useContext, useState } from "react";
import { z } from "zod";
import { FaLinkedin } from "react-icons/fa";
import { IoGlassesOutline, IoLogoWhatsapp } from "react-icons/io5";
import { GlobalContext, InitialContext } from "../../context/GlobalContext";
import { cn } from "../../lib/utils";
import { sendEmail } from "../../actions/sendEmail";
import { motion, AnimatePresence } from "framer-motion";
import { BiMailSend } from "react-icons/bi";
import Link from "next/link";
import EmailSent from "./EmailSent";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema } from "../../lib/ContactMeFormSchema";
import { FaGithub } from "react-icons/fa";

type FormInputs = z.infer<typeof FormSchema>;

function ContactMeForm() {
  const [data, setData] = useState<FormInputs>({
    email: "",
    name: "",
    phone: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormInputs>({ resolver: zodResolver(FormSchema) });

  const [formSubmitted, setFormSubmitted] = useState<{
    success: boolean;
    error: string | null;
  }>({ success: false, error: null });

  //   const [state, formAction] = useFormState(sendEmail, data);

  const [formErrors, setFormErrors] = useState<{
    name: string | undefined;
    email: string | undefined;
    phone: string | undefined;
  }>({
    name: undefined,
    email: undefined,
    phone: undefined,
  });
  const processForm: SubmitHandler<FormInputs> = async (data) => {
    const res = await sendEmail(data);
    if (res?.success) {
      setFormSubmitted({ success: true, error: null });
    }
  };
  const { darkMode } = useContext(GlobalContext) as InitialContext;

  return (
    <div
      className={cn(
        darkMode ? "bg-light	" : "bg-light",
        "h-screen flex flex-col"
      )}
    >
      <AnimatePresence mode="wait">
        {formSubmitted.success && !formSubmitted.error ? (
          <EmailSent />
        ) : formSubmitted.error ? (
          <EmailSent error={formSubmitted.error} />
        ) : (
          <div className="relative flex flex-col items-center self-center justify-center w-1/2 h-full bg-text">
            <div className="flex items-center self-center flex-col md:flex-row">
              <div
                className={cn(
                  darkMode ? "text-accent" : "text-secondary",
                  "md:my-4 flex items-center flex-col leading-[3.5rem]"
                )}
              >
                <motion.h1
                  initial={{ opacity: 0, y: 200 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 200 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="font-semibold text-5xl md:text-[5rem] text-dark"
                >
                  Let&apos;s create
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, y: 200 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 200, rotate: "90deg" }}
                  transition={{ duration: 0.5, type: "spring", delay: 0.1 }}
                  className="self-center tracking-[0.3rem] md:tracking-[0.4rem] text-3xl md:text-[3rem] font-extralight pl-1 text-dark"
                >
                  something great
                </motion.h1>

                <motion.h1
                  initial={{ opacity: 0, y: 200 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 200 }}
                  transition={{ duration: 0.5, type: "spring", delay: 0.2 }}
                  className="text-6xl md:text-[6rem] font-semibold tracking-[0.4rem]"
                >
                  together
                </motion.h1>
              </div>
              <form
                // action={formAction}
                onSubmit={handleSubmit(processForm)}
                className="flex flex-col md:pt-16 ml-4 justify-evenly"
              >
                <div className="h-fit">
                  <label
                    htmlFor="name"
                    className={cn(
                      darkMode ? "text-stone-500 " : " text-black-2",
                      "font-thin text-sm"
                    )}
                  >
                    Name
                  </label>
                  <input
                    defaultValue={data.name}
                    // onChange={(e) => handleNameChange(e)}
                    {...register("name")}
                    // onKeyUp={(e) => validateField(e, "name")}
                    // onBlur={(e) => validateField(e, "name")}
                    placeholder="Your name"
                    id="name"
                    required
                    className="px-2 py-[2px] text-sm w-full placeholder:text-light/50 transition-colors rounded-full outline-none font-extralight focus:bg-accent/90 bg-dark/40 text-light"
                  />
                  <h1 className="text-xs text-accent">{formErrors.name}</h1>
                </div>
                <div className="h-fit">
                  <label
                    htmlFor="email"
                    className={cn(
                      darkMode ? "text-stone-500 " : " text-black-2",
                      "font-extralight"
                    )}
                  >
                    Email
                  </label>
                  <input
                    defaultValue={data.email}
                    placeholder="Your email"
                    className="px-2 py-[2px] text-sm w-full placeholder:text-light/50  transition-colors rounded-full outline-none font-extralight focus:bg-accent/90 bg-dark/40 text-light"
                    // onKeyUp={(e) => validateField(e, "email")}
                    // onBlur={(e) => validateField(e, "email")}
                    id="email"
                    type="email"
                    required
                    {...register("email")}
                    // onChange={(e) => handleEmailChange(e)}
                  ></input>
                  <h1 className="text-xs text-accent">{formErrors.email}</h1>
                </div>
                <div className="h-fit">
                  <label
                    htmlFor="phone"
                    className={cn(
                      darkMode ? "text-stone-500 " : " text-black-2",
                      "font-extralight"
                    )}
                  >
                    Phone number
                  </label>
                  <input
                    defaultValue={data.phone}
                    // onChange={(e) => handlePhoneChange(e)}
                    placeholder="Your phone number"
                    // onKeyUp={(e) => validateField(e, "phone")}
                    // onBlur={(e) => validateField(e, "phone")}
                    {...register("phone")}
                    name="phone"
                    id="phone"
                    type="number"
                    className="px-2 py-[2px] arrow-hide text-sm w-full transition-colors placeholder:text-light/50  rounded-full outline-none font-extralight focus:bg-accent/90 bg-dark/40 text-light"
                  />
                  <h1 className="text-xs text-accent">{formErrors.phone}</h1>
                </div>
                <motion.button
                  whileHover={{
                    scale: FormSchema.safeParse(data).success ? 1.05 : 1,
                  }}
                  whileTap={{
                    scale: FormSchema.safeParse(data).success ? 0.95 : 1,
                  }}
                  disabled={!isValid}
                  type="submit"
                  className="self-end pr-4 my-4 rounded-full text-accent first-letter:text-sm font-extralight disabled:text-gray-500 h-fit"
                >
                  <BiMailSend className="w-5 h-5" />
                </motion.button>
              </form>
            </div>
            <div className="absolute flex items-center self-center justify-around w-full md:w-1/4 gap-4 py-1 rounded-full bottom-8 bg-dark ">
              <Link
                href="https://api.whatsapp.com/send/?phone=972545649413&text&type=phone_number&app_absent=0"
                target="_blank"
              >
                <IoLogoWhatsapp
                  fill="#25D366"
                  opacity={0.7}
                  className="w-7 h-7"
                />
              </Link>
              <Link href="https://www.github.com/mayonchip" target="_blank">
                <FaGithub id="icon" className="w-6 h-6 text-light" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/idocohendev/"
                target="_blank"
              >
                <FaLinkedin fill="#0072AD" opacity={0.7} className="w-7 h-7" />
              </Link>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ContactMeForm;
