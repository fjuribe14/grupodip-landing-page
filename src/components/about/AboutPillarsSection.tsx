import { EyeIcon, TargetIcon } from "lucide-react";
import { motion } from "motion/react";
import type { TAboutPillarsCardProps } from "@/components/about/AboutPillarsCard";
import AboutPillarsCard from "@/components/about/AboutPillarsCard";
import useI18n from "@/hooks/useI18n";

export default function AboutPillarsSection() {
  const { t } = useI18n();

  const pillars: TAboutPillarsCardProps[] = [
    {
      title: t("about.pillars.0.title"),
      description: t("about.pillars.0.description"),
      Icon: TargetIcon,
    },
    {
      title: t("about.pillars.1.title"),
      description: t("about.pillars.1.description"),
      Icon: EyeIcon,
    },
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="h-full"
            >
              <AboutPillarsCard {...pillar} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
