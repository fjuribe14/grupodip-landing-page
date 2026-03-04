import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { INSTAGRAM, WHATSAPP } from "@/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export class SocialLink {
  getWhatsappUrl(text: string) {
    const nomalizeWhatsapp = WHATSAPP.replace(/[-\s]/g, "");

    return `https://wa.me/${nomalizeWhatsapp}?text=${text}`;
  }

  getInstagramUrl() {
    return `https://www.instagram.com/${INSTAGRAM}`;
  }
}
