import { z } from "zod";

export const FormSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1, { message: "Name is required" }),
  phone: z.string().min(10).optional(),
});
