import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { TContactUsFormSchema } from "@/components/contactUs/utils/contactUsForm.schema";
import { EMAIL, INSTAGRAM, WHATSAPP } from "@/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export class SocialLink {
  getWhatsappUrl(text: string, number: string = WHATSAPP) {
    const nomalizeWhatsapp = number.replace(/[-\s]/g, "");

    return `https://wa.me/${nomalizeWhatsapp}?text=${text}`;
  }

  getInstagramUrl() {
    return `https://www.instagram.com/${INSTAGRAM}`;
  }

  getMailUrl(data: TContactUsFormSchema) {
    const subject = `Contacto desde el sitio web - ${data.fullName}`;
    const body = `Buen día, mi nombre es ${data.fullName}, ${data.message}. Puedes contactarme al ${data.phone}`;
    return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }
}
