import { lazy } from "react";
import { SEO } from "@/components/SEO";

const AboutHeroSection = lazy(
  () => import("@/components/about/AboutHeroSection"),
);
const AboutPillarsSection = lazy(
  () => import("@/components/about/AboutPillarsSection"),
);
const AboutValuesSection = lazy(
  () => import("@/components/about/AboutValuesSection"),
);

export default function About() {
  return (
    <>
      <SEO
        title="Nosotros | Grupo Dip C.A. — Empresa de Construcción en Venezuela"
        description="Conoce la historia de Grupo Dip C.A., empresa venezolana fundada en 2012 especializada en ingeniería civil, metalurgia y obras de gran escala. Misión, visión y valores."
        keywords="Grupo Dip historia, empresa constructora Venezuela, ingeniería civil venezolana, empresa construcción Caracas, constructora venezolana fundada 2012"
        canonicalPath="/about"
      />
      <AboutHeroSection />
      <AboutPillarsSection />
      <AboutValuesSection />
    </>
  );
}
