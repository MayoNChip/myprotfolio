"use server";

import { createTransport } from "nodemailer";
import { z, ZodError } from "zod";

const FormValidation = z.object({
	from: z.string().email(),
	message: z.string().min(8, "Minimun 8 characters"),
});

export async function sendEmail(prevState: any, formData: FormData) {
	console.log(formData.get("from"));
	const transporter = createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			user: "idocodev@gmail.com",
			pass: process.env.GOOGLE_APP_PASSWORD,
		},
	});
	try {
		const data = FormValidation.parse({
			from: formData.get("from"),
			message: formData.get("message"),
		});
		const emailOptions = {
			from: data.from,
			to: "idocodev@gmail.com",
			subject: "New Potential Empoloyer!",
			text: data.message,
		};

		transporter.sendMail(emailOptions);
		return { message: "message sent" };
	} catch (error) {
		return { message: "message failed to send" };
	}
}
