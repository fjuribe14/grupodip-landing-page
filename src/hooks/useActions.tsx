import type { TContactUsFormSchema } from "@/components/contactUs/utils/contactUsForm.schema";
import { SocialLink } from "@/lib/utils";

const { getWhatsappUrl, getInstagramUrl, getMailUrl } = new SocialLink();

export default function useActions() {
  const goToWhatsapp = (text: string, number?: string) => {
    window.open(getWhatsappUrl(text, number), "_blank");
  };

  const goToInstagram = () => {
    window.open(getInstagramUrl(), "_blank");
  };

  const goToMail = (data: TContactUsFormSchema) => {
    window.open(getMailUrl(data), "_blank");
  };

  return { goToWhatsapp, goToInstagram, goToMail };
}
