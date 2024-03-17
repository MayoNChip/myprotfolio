"use server";

import { z } from "zod";
import { ErrorResponse, Resend } from "resend";
import { EmailTemplate } from "../app/emails/Email";
import { FormSchema } from "../lib/ContactMeFormSchema";

type FormDataType = z.infer<typeof FormSchema>;

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormDataType) {
  "use server";
  const result = FormSchema.safeParse(formData);
  console.log(result);

  if (result.success) {
    try {
      const { data, error } = await resend.emails.send({
        from: "newworklead@idocodev.com",
        to: "idocodev@gmail.com",
        subject: "New Job Lead",
        react: EmailTemplate(result.data),
        text: "hello",
      });

      console.log(data);

      return {
        success: true,
        data,
      };
    } catch (error) {
      console.log("send email error", error);
      const err = error as ErrorResponse;
      return { success: false, error: err.message };
    }
  }
  if (result.error) {
    return { success: false, error: result.error.format() };
  }
}
