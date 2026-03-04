import { motion } from "motion/react";

export default function HomeSponsorsSection() {
  const images = [
    {
      src: "/sponsors/1.webp",
      alt: "corpoelect",
    },
    {
      src: "/sponsors/2.webp",
      alt: "pdvsa",
    },
    {
      src: "/sponsors/3.webp",
      alt: "ministerio-poder-popular-cultura",
    },
    {
      src: "/sponsors/4.webp",
      alt: "corpoez",
    },
    {
      src: "/sponsors/5.webp",
      alt: "fondo-capital-alba",
    },
  ];

  return (
    <div className="bg-white flex items-center justify-center gap-24 overflow-hidden px-6">
      {images.map((image, i) => (
        <motion.img
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          key={image.alt}
          src={image.src}
          alt={image.alt}
          loading="lazy"
          decoding="async"
          className="aspect-square object-contain"
        />
      ))}
    </div>
  );
}
