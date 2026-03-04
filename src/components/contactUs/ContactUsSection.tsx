import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { motion } from "motion/react";
import ContactUsForm from "@/components/contactUs/ContactUsForm";
import TextBadge from "@/components/TextBadge";
import {
  TypographyH2,
  TypographyMuted,
  TypographyP,
} from "@/components/ui/typography";
import { ADDRESS, EMAIL, PHONE_NUMBER } from "@/constants";
import useI18n from "@/hooks/useI18n";

export default function ContactUsSection() {
  const { t } = useI18n();

  const contactInfo = [
    {
      icon: MapPinIcon,
      title: t("contact.address"),
      value: ADDRESS,
    },
    {
      icon: PhoneIcon,
      title: t("contact.phone"),
      value: PHONE_NUMBER,
    },
    {
      icon: MailIcon,
      title: t("contact.email"),
      value: EMAIL,
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <motion.div
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              initial={{ translateY: 50, opacity: 0 }}
            >
              <TextBadge className="font-bold uppercase tracking-widest mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                {t("contact.badge")}
              </TextBadge>
            </motion.div>
            <motion.div
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              initial={{ translateY: 50, opacity: 0 }}
            >
              <TypographyH2 className="text-5xl md:text-6xl font-black leading-[1.1] mb-6 max-w-4xl mx-auto">
                {t("contact.title")}
              </TypographyH2>
            </motion.div>
            <motion.div
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              initial={{ translateY: 50, opacity: 0 }}
            >
              <TypographyMuted className="max-w-2xl mx-auto mb-10 leading-relaxed">
                <span
                  dangerouslySetInnerHTML={{ __html: t("contact.description") }}
                />
              </TypographyMuted>
            </motion.div>
            <div className="space-y-8">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={contact.title}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.5 + index * 0.1,
                    ease: "easeOut",
                  }}
                  initial={{ translateY: 50, opacity: 0 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 bg-blue-50 dark:bg-slate-800 rounded-xl flex items-center justify-center">
                      <contact.icon className="text-primary" />
                    </div>
                    <div>
                      <TypographyP className="font-bold">
                        {contact.title}
                      </TypographyP>
                      <TypographyMuted>{contact.value}</TypographyMuted>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            initial={{ translateY: 50, opacity: 0 }}
          >
            <ContactUsForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
