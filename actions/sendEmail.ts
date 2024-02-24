"use server";

import { z } from "zod";
import { ErrorResponse, Resend } from "resend";
import { Email } from "../app/emails/Email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(prevState: any, formData: FormData) {
	"use server";

	try {
		const name = formData.get("name");
		const email = formData.get("email");
		const phone = formData.get("phone");

		const contactData = {
			name,
			email,
			phone,
		};

		const contactDataSchema = z.object({
			email: z.string().email(),
			name: z.string().min(1),
			phone: z.string(),
		});

		const validatedData = contactDataSchema.parse(contactData);

		const data = await resend.emails.send({
			from: "newworklead@idocodev.com",
			to: "idoic44@gmail.com",
			subject: "New Job Lead",
			react: Email({
				firstName: "ido",
			}),
		});

		console.log(data);

		if (data.error) {
			return { success: false, message: data.error };
		}
		return {
			success: true,
		};
	} catch (error) {
		console.log("send email error", error);
		const err = error as ErrorResponse;
		return { success: false };
	}
}
