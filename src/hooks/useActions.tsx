import { SocialLink } from "@/lib/utils";

const { getWhatsappUrl, getInstagramUrl } = new SocialLink();

export default function useActions() {
  const goToWhatsapp = (text: string) => {
    window.open(getWhatsappUrl(text), "_blank");
  };

  const goToInstagram = () => {
    window.open(getInstagramUrl(), "_blank");
  };

  return { goToWhatsapp, goToInstagram };
}
