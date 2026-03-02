import { Settings2Icon } from "lucide-react";
import { motion } from "motion/react";
import { useMemo } from "react";
import type { THomeServicesCardProps } from "@/components/home/services/HomeServicesCard";
import HomeServicesCard from "@/components/home/services/HomeServicesCard";
import TextBadge from "@/components/TextBadge";
import { TypographyH2 } from "@/components/ui/typography";
import useI18n from "@/hooks/useI18n";

export default function HomeServicesSection() {
  const { t } = useI18n();

  const services: THomeServicesCardProps[] = useMemo(
    () => [
      {
        icon: Settings2Icon,
        title: t("home.services.cards.0.title"),
        description: t("home.services.cards.0.description"),
      },
      {
        icon: Settings2Icon,
        title: t("home.services.cards.1.title"),
        description: t("home.services.cards.1.description"),
      },
      {
        icon: Settings2Icon,
        title: t("home.services.cards.2.title"),
        description: t("home.services.cards.2.description"),
      },
    ],
    [t],
  );

  if (!services) return null;

  return (
    <section className="py-24 bg-neutral-100 dark:bg-neutral-900/20">
      <div className="max-w-7xl mx-auto px-6 mb-6 md:mb-12 flex justify-between items-end">
        <div className="max-w-2xl">
          <TextBadge className="font-bold uppercase tracking-widest mb-6">
            {t("home.services.badge")}
          </TextBadge>
          <TypographyH2 className="font-black text-navy dark:text-white">
            {t("home.services.title")}
          </TypographyH2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto pb-8">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <HomeServicesCard {...service} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
