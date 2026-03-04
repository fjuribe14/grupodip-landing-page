import { lazy } from "react";

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
      <AboutHeroSection />
      <AboutPillarsSection />
      <AboutValuesSection />
    </>
  );
}
