"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import { z, ZodError } from "zod";
import { GlobalContext, InitialContext } from "../../context/GlobalContext";
import { cn } from "../../lib/utils";
import { sendEmail } from "./nodeMailer";
import { useFormState, useFormStatus } from "react-dom";
import { redirect } from "next/navigation";

export const FormValidation = z.object({
	from: z.string().email(),
	message: z.string().min(8, "Minimun 8 characters"),
});

type EmailMessage = {
	from: string | undefined;
	message: string | undefined;
};

const initialState = {
	message: "",
};

function ContactMeForm() {
	const [state, formAction] = useFormState(sendEmail, initialState);
	const [data, setData] = useState<EmailMessage>({
		from: undefined,
		message: undefined,
	});
	const [emailError, setEmailError] = useState<string>();
	const { darkMode } = useContext(GlobalContext) as InitialContext;

	useEffect(() => {
		switch (state.message) {
			case "message sent":
				redirect("/thankyou");
			case "message failed to send":
				FormValidation.safeParse(data);
		}
	}, [state.message]);

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setData((data) => {
			return { ...data, from: e.target.value };
		});
	};

	const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setData((data) => {
			return { ...data, message: e.target.value };
		});
	};

	return (
		<div
			className={cn(darkMode ? "bg-black-1" : "bg-light", "h-screen w-full")}
		>
			<div className="flex flex-col w-full my-10 bg-text">
				<div className="flex flex-col self-center">
					<h1
						className={cn(
							darkMode ? "text-accent" : "text-secondary/70",
							"my-4 text-4xl font-bold"
						)}
					>
						Get in touch with me!
					</h1>
					<form
						action={formAction}
						className="flex flex-col items-start w-full space-y-4"
					>
						<div className="w-full space-y-2">
							<h2
								className={cn(
									darkMode ? "text-accent/70 " : " text-black-2",
									"font-extralight"
								)}
							>
								Email
							</h2>
							<input
								defaultValue={data.from}
								placeholder=""
								className="w-full px-2 outline-none rounded-xl text-black-2"
								name="from"
								id="from"
								type="email"
								required
								onChange={(e) => handleEmailChange(e)}
							></input>
							{emailError && <h1>{emailError}</h1>}
						</div>
						<div className="w-full space-y-2 ">
							<h2
								className={cn(
									darkMode ? "text-accent/70 " : " text-black-2",
									"font-extralight"
								)}
							>
								Message
							</h2>
							<textarea
								defaultValue={data.message}
								onChange={(e) => handleMessageChange(e)}
								placeholder=""
								name="message"
								id="message"
								required
								className="px-2 outline-none resize-none rounded-xl text-black-2 md:w-[400px] md:h-[250px]"
							></textarea>
						</div>
						<button
							disabled={!FormValidation.safeParse(data).success}
							type="submit"
							className="self-end px-4 py-2 mx-2 my-4 rounded-md text-black/50 bg-secondary hover:bg-accent hover:text-black/50 active:bg-cyan-900 active:text-text disabled:bg-gray-500"
						>
							Submit
						</button>
					</form>
					<h1>{state.message}</h1>
				</div>
			</div>
		</div>
	);
}

export default ContactMeForm;
