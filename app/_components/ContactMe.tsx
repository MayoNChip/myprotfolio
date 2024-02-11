"use client";

import React, { useContext, useState, useRef, useEffect } from "react";
import { z } from "zod";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { GlobalContext, InitialContext } from "../../context/GlobalContext";
import { cn } from "../../lib/utils";
import Inner from "./Layout/Inner";
import { sendEmail } from "../../actions/sendEmail";
import {
	useInView,
	useAnimate,
	motion,
	stagger,
	AnimatePresence,
} from "framer-motion";
import { useFormState, useFormStatus } from "react-dom";
import { BiMailSend } from "react-icons/bi";

export const FormValidation = z.object({
	email: z.string().email(),
	name: z.string().min(1),
	phone: z.string().min(1),
});

type EmailMessage = {
	email: string | undefined;
	name: string | undefined;
	phone: string | undefined;
	success: boolean | false;
};

function ContactMeForm() {
	// Framer motion hooks
	const [scope, animate] = useAnimate();
	const formTitle = useRef(null);
	const titleInView = useInView(formTitle);

	const [emailSent, setEmailSent] = useState(false);
	const [data, setData] = useState<EmailMessage>({
		email: undefined,
		name: undefined,
		phone: undefined,
		success: false,
	});
	const [state, formAction] = useFormState(sendEmail, data);
	const [emailError, setEmailError] = useState<string>();
	const { darkMode } = useContext(GlobalContext) as InitialContext;
	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setData((data) => {
			return { ...data, email: e.target.value };
		});
	};

	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setData((data) => {
			return { ...data, name: e.target.value };
		});
	};
	const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setData((data) => {
			return { ...data, phone: e.target.value };
		});
	};

	// useEffect(() => {
	// 	if (titleInView) {
	// 		animate(
	// 			"#title-line",
	// 			{ opacity: [0, 1], y: [200, 0] },
	// 			{
	// 				duration: 0.8,
	// 				delay: stagger(0.1, { ease: [0.24, 0.31, 0.6, 0.9] }),
	// 				type: "spring",
	// 			}
	// 		);
	// 	} else {
	// 		animate(
	// 			"#title-line",
	// 			{ opacity: [1, 0], y: [0, 200] },
	// 			{
	// 				duration: 0.5,
	// 				ease: [0.24, 0.31, 0.6, 0.9],
	// 			}
	// 		);
	// 	}
	// }, [titleInView]);

	return (
		<div
			ref={scope}
			className={cn(
				darkMode ? "bg-black-1" : "bg-light",
				"h-screen flex flex-col"
			)}
		>
			{state.success ? (
				<div className="h-full text-4xl text-accent">Email sent</div>
			) : null}
			<AnimatePresence mode="wait">
				{!state.success ? (
					<div className="flex flex-col items-center self-center justify-center w-1/2 h-full bg-text">
						<div className="flex items-center self-center">
							<div
								ref={formTitle}
								className={cn(
									darkMode ? "text-accent/80" : "text-secondary/70",
									"my-4 flex items-center flex-col leading-[3rem]"
								)}
							>
								<motion.h1
									initial={{ opacity: 0, y: 200 }}
									whileInView={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: 200 }}
									transition={{ duration: 0.5, type: "spring" }}
									className="font-semibold text-[5rem]"
								>
									Let's create
								</motion.h1>
								<motion.h1
									initial={{ opacity: 0, y: 200 }}
									whileInView={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: 200, rotate: "90deg" }}
									transition={{ duration: 0.5, type: "spring" }}
									className="self-center tracking-[0.4rem] text-[3rem] font-extralight pl-1"
								>
									something great
								</motion.h1>

								<motion.h1
									initial={{ opacity: 0, y: 200 }}
									whileInView={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: 200 }}
									transition={{ duration: 0.5, type: "spring" }}
									className="text-[6rem] font-semibold tracking-[0.4rem]"
								>
									together
								</motion.h1>
							</div>
							<form
								action={formAction}
								className="flex flex-col items-center justify-center p-6"
							>
								<div>
									<h2
										className={cn(
											darkMode ? "text-stone-500 " : " text-black-2",
											"font-extralight text-sm"
										)}
									>
										Name
									</h2>
									<input
										defaultValue={data.name}
										onChange={(e) => handleNameChange(e)}
										placeholder=""
										name="name"
										id="name"
										required
										className="px-2 outline-none rounded-xl bg-stone-800/80 active:bg-stone-800/80 text-light"
									/>
								</div>
								<div>
									<h2
										className={cn(
											darkMode ? "text-stone-500 " : " text-black-2",
											"font-extralight"
										)}
									>
										Email
									</h2>
									<input
										defaultValue={data.email}
										placeholder=""
										className="w-full px-2 outline-none rounded-xl bg-stone-800/80 active:bg-stone-800/80 text-light"
										name="email"
										id="email"
										type="email"
										required
										onChange={(e) => handleEmailChange(e)}
									></input>
									{emailError && <h1>{emailError}</h1>}
								</div>
								<div>
									<h2
										className={cn(
											darkMode ? "text-stone-500 " : " text-black-2",
											"font-extralight"
										)}
									>
										Phone number
									</h2>
									<input
										defaultValue={data.phone}
										onChange={(e) => handlePhoneChange(e)}
										placeholder=""
										name="phone"
										id="phone"
										required
										className="px-2 outline-none rounded-xl bg-stone-800/80 active:bg-stone-800/80 text-stone-400 "
									/>
								</div>
								<motion.button
									whileHover={{
										scale: FormValidation.safeParse(data).success ? 1.05 : 1,
									}}
									whileTap={{
										scale: FormValidation.safeParse(data).success ? 0.95 : 1,
									}}
									disabled={!FormValidation.safeParse(data).success}
									type="submit"
									className="self-end pr-4 my-4 rounded-full text-accent first-letter:text-sm font-extralight disabled:text-gray-500"
								>
									<BiMailSend className="w-5 h-5" />
								</motion.button>
							</form>
						</div>
						<div className="flex items-center self-center justify-center w-1/3 gap-4 my-4">
							<IoLogoWhatsapp
								fill="#25D366"
								opacity={0.7}
								className="w-8 h-8"
							/>
							<FaLinkedin fill="#0072AD" opacity={0.7} className="w-8 h-8" />
						</div>
					</div>
				) : null}
			</AnimatePresence>
		</div>
	);
}

export default ContactMeForm;
