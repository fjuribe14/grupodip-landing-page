import { motion } from "motion/react";

export default function HomeSponsorsSection() {
  const images = [
    { src: "/sponsors/1.webp", alt: "corpoelect" },
    { src: "/sponsors/2.webp", alt: "pdvsa" },
    { src: "/sponsors/3.webp", alt: "ministerio-poder-popular-cultura" },
    { src: "/sponsors/4.webp", alt: "corpoez" },
    { src: "/sponsors/5.webp", alt: "fondo-capital-alba" },
  ];

  const halfImages = [...images, ...images, ...images, ...images];
  const duplicatedImages = [...halfImages, ...halfImages];

  return (
    <div className="w-full bg-white overflow-hidden">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        className="flex gap-12 md:gap-24 pr-12 md:pr-24 items-center w-max"
        transition={{
          ease: "linear",
          duration: 80,
          repeat: Infinity,
        }}
      >
        {duplicatedImages.map((image, i) => (
          <img
            key={`${image.alt}-${i}`}
            src={image.src}
            alt={image.alt}
            loading="lazy"
            decoding="async"
            className="aspect-square object-contain shrink-0"
          />
        ))}
      </motion.div>
    </div>
  );
}
