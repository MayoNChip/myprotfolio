"use server";

import { z } from "zod";
import { ErrorResponse, Resend } from "resend";
import { Email } from "../app/emails/Email";
import { FormSchema } from "../lib/ContactMeFormSchema";

type FormDataType = z.infer<typeof FormSchema>;

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormDataType) {
  "use server";
  const result = FormSchema.safeParse(formData);

  if (result.success) {
    try {
      const { data, error } = await resend.emails.send({
        from: "newworklead@idocodev.com",
        to: "idocodev@gmail.com",
        subject: "New Job Lead",
        react: Email(result.data),
        text: "hello",
      });

      return {
        success: true,
        data,
      };
    } catch (error) {
      const err = error as ErrorResponse;
      return { success: false, error: err.message };
    }
  }
  if (result.error) {
    return { success: false, error: result.error.format() };
  }
}
