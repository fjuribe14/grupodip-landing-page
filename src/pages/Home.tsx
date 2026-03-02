import { lazy, Suspense } from "react";

const HomeHeroSection = lazy(
  () => import("@/components/home/hero/HomeHeroSection"),
);
const HomeServicesSection = lazy(
  () => import("@/components/home/services/HomeServicesSection"),
);
const HomeShowcaseSection = lazy(
  () => import("@/components/home/showcase/HomeShowcaseSection"),
);
const HomeStatsSection = lazy(
  () => import("@/components/home/stats/HomeStatsSection"),
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
        <HomeServicesSection />
        <HomeShowcaseSection />
        <HomeCTASection />
      </Suspense>
    </>
  );
}
