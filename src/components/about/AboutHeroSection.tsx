import { motion } from "motion/react";
import TextBadge from "@/components/TextBadge";
import { TypographyH2, TypographyMuted } from "@/components/ui/typography";
import useI18n from "@/hooks/useI18n";

export default function AboutHeroSection() {
  const { t } = useI18n();

  const descriptions = (t("about.hero.descriptions", { returnObjects: true }) ||
    []) as string[];

  return (
    <section className="relative pt-16 pb-24 overflow-hidden hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            {t("about.hero.badge")}
          </TextBadge>
        </motion.div>
        <motion.div
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          initial={{ translateY: 50, opacity: 0 }}
        >
          <TypographyH2 className="text-5xl md:text-6xl font-black leading-[1.1] mb-6 max-w-4xl mx-auto">
            {t("about.hero.title")}
          </TypographyH2>
        </motion.div>
        <motion.div
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          initial={{ translateY: 50, opacity: 0 }}
        >
          <TypographyMuted className="max-w-2xl mx-auto mb-10 leading-relaxed">
            <span
              dangerouslySetInnerHTML={{ __html: t("about.hero.description") }}
            />
          </TypographyMuted>
        </motion.div>

        <motion.div
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          initial={{ translateY: 50, opacity: 0 }}
          className="relative max-w-6xl mx-auto mb-24"
        >
          <div className="absolute -inset-1 bg-linear-to-r from-primary/20 to-blue-400/20 blur-2xl opacity-50"></div>
          <img
            alt="about-us"
            loading="eager"
            decoding="sync"
            src="/aboutUs/1.webp"
            className="relative rounded-2xl md:rounded-3xl shadow-2xl border object-cover w-full h-[400px] md:h-[600px]"
          />
        </motion.div>
        <div className="text-start max-w-6xl mx-auto columns-1 md:columns-2 gap-8">
          {descriptions?.map((description) => (
            <TypographyMuted
              key={description}
              className="break-inside-avoid-page mb-4"
            >
              <span dangerouslySetInnerHTML={{ __html: description }} />
            </TypographyMuted>
          ))}
        </div>
      </div>
    </section>
  );
}
