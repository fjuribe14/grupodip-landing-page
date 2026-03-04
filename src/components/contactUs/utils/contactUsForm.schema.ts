import { z } from "zod/v3";

export const contactUsFormSchema = z.object({
  fullName: z.string().min(1, "El nombre es requerido"),
  phone: z.string().min(1, "El teléfono es requerido"),
  message: z.string().min(1, "El mensaje es requerido"),
});

export type TContactUsFormSchema = z.infer<typeof contactUsFormSchema>;
