import { Settings2Icon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import type { THomeServicesCardProps } from "@/components/home/services/HomeServicesCard";
import HomeServicesCard from "@/components/home/services/HomeServicesCard";
import { TypographyH2 } from "@/components/ui/typography";
import useI18n from "@/hooks/useI18n";

export default function HomeServicesSection() {
  const { t } = useI18n();

  const services: THomeServicesCardProps[] = [
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
  ];

  return (
    <section className="py-24 bg-silver/30 dark:bg-background-dark/50">
      <div className="max-w-7xl mx-auto px-6 mb-6 md:mb-12 flex justify-between items-end">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            {t("home.services.badge")}
          </div>
          <TypographyH2 className="font-black text-navy dark:text-white">
            {t("home.services.title")}
          </TypographyH2>
        </div>
      </div>
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto pb-8">
        <AnimatePresence>
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              <HomeServicesCard {...service} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
