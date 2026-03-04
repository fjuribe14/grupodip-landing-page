import { motion } from "motion/react";
import { YEARS_OF_EXPERIENCE } from "@/constants";
import useI18n from "@/hooks/useI18n";
import { cn } from "@/lib/utils";

export default function HomeShowcaseImages() {
  const images = [
    {
      src: "/showcase/1.webp",
      className: "h-64",
      alt: "Close up of steel beam connection",
    },
    {
      src: "/showcase/2.webp",
      className: "h-48",
      alt: "Engineer looking at blueprints on site",
    },
    {
      src: "/showcase/3.webp",
      className: "h-48",
      alt: "Large yellow excavator in action",
    },
    {
      src: "/showcase/4.webp",
      className: "h-64",
      alt: "Modern soccer stadium interior",
    },
  ];

  const { t } = useI18n();

  return (
    <div className="relative">
      <div className="columns-2">
        {images.map((image, i) => (
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            key={image.alt}
            className={cn(
              "rounded-xl overflow-hidden shadow-lg mb-4 break-inside-avoid",
              image.className,
            )}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        ))}
      </div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute -bottom-6 right-0 md:-right-6 bg-primary text-white p-8 rounded-2xl shadow-2xl flex flex-col items-center"
      >
        <span className="text-5xl font-black">{YEARS_OF_EXPERIENCE}</span>
        <span className="text-xs uppercase font-bold tracking-widest text-center mt-2">
          {t("home.showcase.experience")}
        </span>
      </motion.div>
    </div>
  );
}
