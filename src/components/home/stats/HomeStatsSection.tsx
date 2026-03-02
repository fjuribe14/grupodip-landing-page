import { useMemo } from "react";
import {
  PROJECTS_COMPLETED,
  TONS_OF_STEEL,
  YEARS_OF_EXPERIENCE,
} from "@/constants";
import useI18n from "@/hooks/useI18n";
import HomeStatsItem, { type TStatsItemProps } from "./HomeStatsItem";

export default function HomeStatsSection() {
  const { t } = useI18n();

  const statsItems: TStatsItemProps[] = useMemo(
    () => [
      {
        value: YEARS_OF_EXPERIENCE,
        suffix: "+",
        delay: 0.5,
        type: "double",
        label: t("home.stats.section1"),
      },
      {
        value: PROJECTS_COMPLETED,
        suffix: "+",
        delay: 0.75,
        label: t("home.stats.section2"),
      },
      {
        value: TONS_OF_STEEL,
        suffix: "k",
        delay: 1,
        type: "double",
        label: t("home.stats.section3"),
      },
      {
        value: "24/7",
        suffix: "",
        delay: 1.25,
        label: t("home.stats.section4"),
      },
    ],
    [t],
  );

  if (!statsItems) return null;

  return (
    <section className="py-12 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsItems.map((stat) => (
            <HomeStatsItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
