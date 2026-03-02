import HomeHeroSection from "@/components/home/hero/HomeHeroSection";
import HomeServicesSection from "@/components/home/services/HomeServicesSection";
import HomeShowcaseSection from "@/components/home/showcase/HomeShowcaseSection";
import HomeStatsSection from "@/components/home/stats/HomeStatsSection";

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <HomeStatsSection />
      <HomeServicesSection />
      <HomeShowcaseSection />
    </>
  );
}
