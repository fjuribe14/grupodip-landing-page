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

export default function Home() {
  return (
    <>
      {/* Hero has its own Suspense so it renders independently — no fallback needed */}
      <Suspense>
        <HomeHeroSection />
      </Suspense>
      {/* Below-fold sections share a boundary with a minimal height placeholder */}
      <Suspense fallback={<div className="min-h-screen" />}>
        <HomeStatsSection />
        <HomeServicesSection />
        <HomeShowcaseSection />
      </Suspense>
    </>
  );
}
