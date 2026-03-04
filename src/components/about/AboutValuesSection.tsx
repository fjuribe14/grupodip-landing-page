import {
  BrickWallIcon,
  HeartHandshakeIcon,
  RocketIcon,
  ShapesIcon,
  ShieldCheck,
  StarIcon,
} from "lucide-react";
import { motion } from "motion/react";
import TextBadge from "@/components/TextBadge";
import useI18n from "@/hooks/useI18n";
import type { TAboutValuesCardProps } from "./AboutValuesCard";
import AboutValuesCard from "./AboutValuesCard";

export default function AboutValuesSection() {
  const { t } = useI18n();

  const values: TAboutValuesCardProps[] = [
    {
      title: t("about.values.items.0.title"),
      description: t("about.values.items.0.description"),
      Icon: HeartHandshakeIcon,
    },
    {
      title: t("about.values.items.1.title"),
      description: t("about.values.items.1.description"),
      Icon: ShieldCheck,
    },
    {
      title: t("about.values.items.2.title"),
      description: t("about.values.items.2.description"),
      Icon: StarIcon,
    },
    {
      title: t("about.values.items.3.title"),
      description: t("about.values.items.3.description"),
      Icon: ShapesIcon,
    },
    {
      title: t("about.values.items.4.title"),
      description: t("about.values.items.4.description"),
      Icon: RocketIcon,
    },
    {
      title: t("about.values.items.5.title"),
      description: t("about.values.items.5.description"),
      Icon: BrickWallIcon,
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4 px-4 sm:px-6 lg:px-8">
        <TextBadge className="font-bold uppercase tracking-widest mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          {t("about.values.badge")}
        </TextBadge>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((values, i) => (
            <motion.div
              key={values.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="h-full"
            >
              <AboutValuesCard {...values} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
