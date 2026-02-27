import { Button } from "@/components/ui/button";
import { TypographyH2, TypographyMuted } from "@/components/ui/typography";
import {
  customAnimation,
  heroButtonAnimation,
  heroContainerAnimation,
  heroTextAnimation,
} from "@/lib/animations";
import { createTimeline } from "animejs";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";

export default function HomeHero() {
  return (
    <section className="relative w-full min-h-[85vh] grid grid-cols-1 md:grid-cols-2 overflow-hidden">
      <img
        src="/hero.webp"
        alt="Grupo Dip - Construcción y Servicios"
        className="w-full object-cover max-h-[85vh] bg-linear-to-r from-navy/40 to-transparent hidden md:block"
      />
      <AnimatedSection />
    </section>
  );
}

function AnimatedSection() {
  const tl = createTimeline({
    autoplay: true,
    defaults: { ease: "inOut(2)" },
  });

  useEffect(() => {
    ["#hero-text-1", "#hero-text-2", "#hero-text-3"].map((target, index) =>
      tl.sync(
        customAnimation({
          target,
          params: heroTextAnimation.animate,
        }),
        1000 + index * 100,
      ),
    );

    tl.sync(
      customAnimation({
        target: "#hero-text",
        params: heroTextAnimation.initial,
      }),
      0,
    )
      .sync(
        customAnimation({
          target: "#hero-container",
          params: heroContainerAnimation.animate,
        }),
        100,
      )
      .sync(
        customAnimation({
          target: "#hero-button",
          params: heroButtonAnimation.animate,
        }),
        1000,
      );
  }, [tl]);

  return (
    <div
      id="hero-container"
      className="flex flex-col justify-center md:px-16 py-16 bg-background"
    >
      <div className="px-6 md:max-w-xl">
        <div
          id="hero-text-1"
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Ingeniería Venezolana
        </div>
        <TypographyH2
          id="hero-text-2"
          className="text-5xl md:text-6xl font-black text-navy dark:text-white leading-[1.1] mb-6"
        >
          Ingeniería de vanguardia para el{" "}
          <span className="text-primary">futuro</span> de Venezuela
        </TypographyH2>
        <TypographyMuted id="hero-text-3" className={"mb-10 leading-relaxed"}>
          Desde 2012, lideramos la transformación industrial con precisión
          técnica y excelencia en cada estructura. Especialistas en metalurgia,
          infraestructura deportiva y obras civiles de gran escala.
        </TypographyMuted>
        <div className="flex flex-wrap gap-4">
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
        </div>
      </div>
    </div>
  );
}
