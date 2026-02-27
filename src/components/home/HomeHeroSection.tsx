import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { TypographyH2, TypographyMuted } from "@/components/ui/typography";

export default function HomeHeroSection() {
  return (
    <section className="relative w-full min-h-[85vh] grid grid-cols-1 md:grid-cols-2 overflow-hidden">
      <img
        src="/hero.webp"
        alt="Grupo Dip - Construcción y Servicios"
        className="w-full object-cover max-h-[85vh] bg-linear-to-r from-navy/40 to-transparent hidden md:block"
      />
      <motion.div
        animate={{ translateX: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        initial={{ translateX: "-90%" }}
        className="flex flex-col justify-center md:px-16 py-16 bg-background"
      >
        <div className="px-6 md:max-w-xl">
          <motion.div
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            initial={{ translateY: 100, opacity: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Ingeniería Venezolana
          </motion.div>
          <motion.div
            animate={{ translateY: 0, opacity: 1 }}
            initial={{ translateY: 100, opacity: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          >
            <TypographyH2 className="text-5xl md:text-6xl font-black text-navy dark:text-white leading-[1.1] mb-6">
              Ingeniería de vanguardia para el{" "}
              <span className="text-primary">futuro</span> de Venezuela
            </TypographyH2>
          </motion.div>
          <motion.div
            animate={{ translateY: 0, opacity: 1 }}
            initial={{ translateY: 100, opacity: 0 }}
            transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
          >
            <TypographyMuted
              id="hero-text-3"
              className={"mb-10 leading-relaxed"}
            >
              Desde 2012, lideramos la transformación industrial con precisión
              técnica y excelencia en cada estructura. Especialistas en
              metalurgia, infraestructura deportiva y obras civiles de gran
              escala.
            </TypographyMuted>
          </motion.div>
          <motion.div
            animate={{ translateY: 0, opacity: 1 }}
            initial={{ translateY: 100, opacity: 0 }}
            transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              id="hero-button"
              className="font-bold bg-navy hover:bg-navy/90"
            >
              Nuestros Servicios
              <ArrowRight className="size-4" />
            </Button>
            <Button
              size={"lg"}
              id="hero-button"
              variant="outline"
              className="text-navy dark:text-white font-bold"
            >
              Ver Portafolio
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
