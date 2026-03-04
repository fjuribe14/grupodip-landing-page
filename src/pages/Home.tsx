import { lazy, Suspense } from "react";

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
