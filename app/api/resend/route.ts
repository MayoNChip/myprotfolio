import { z } from "zod";
import { Resend } from "resend";
import { NextResponse } from "next/server";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET(req: Request) {
	console.log("req", req.body);
	const body = await req.json();
	return NextResponse.json("thanks");
	// const emailSchema = z.object({
	// 	email: z.string().email(),
	// 	name: z.string().min(1),
	// 	phone: z.string().min(1),
	// });

	// const validatedData = emailSchema.parse(body);

	// const response = await resend.emails.send({
	// 	from: "onboarding@resend.dev",
	// 	to: "idoic44@gmail.com",
	// 	subject: "New Job Lead",
	// 	react: Email(validatedData),
	// });

	// return NextResponse.json(response);
}
