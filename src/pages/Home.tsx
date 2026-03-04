import { lazy, Suspense } from "react";
import { SEO } from "@/components/SEO";

const HomeHeroSection = lazy(
  () => import("@/components/home/hero/HomeHeroSection"),
);
const HomeStatsSection = lazy(
  () => import("@/components/home/stats/HomeStatsSection"),
);
const HomeSponsorsSection = lazy(
  () => import("@/components/home/sponsors/HomeSponsorsSection"),
);
const HomeServicesSection = lazy(
  () => import("@/components/home/services/HomeServicesSection"),
);
const HomeShowcaseSection = lazy(
  () => import("@/components/home/showcase/HomeShowcaseSection"),
);
const HomeCTASection = lazy(
  () => import("@/components/home/cta/HomeCTASection"),
);

export default function Home() {
  return (
    <>
      <SEO
        title="Grupo Dip | Empresa de Construcción e Ingeniería en Venezuela"
        description="Grupo Dip C.A. — Especialistas en metalurgia, obras civiles, infraestructura deportiva y maquinaria pesada en Venezuela. Más de 13 años de trayectoria y 150+ proyectos completados."
        keywords="empresa de construcción Venezuela, obras civiles Venezuela, metalurgia Venezuela, constructora Caracas, infraestructura deportiva Venezuela, maquinaria pesada Venezuela, estructuras metálicas Venezuela, Grupo Dip"
        canonicalPath="/"
      />
      <HomeHeroSection />
      <Suspense fallback={<div className="min-h-screen" />}>
        <HomeStatsSection />
        <HomeSponsorsSection />
        <HomeServicesSection />
        <HomeShowcaseSection />
        <HomeCTASection />
      </Suspense>
    </>
  );
}
