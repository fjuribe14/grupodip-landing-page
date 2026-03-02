import HomeShowcaseImages from "@/components/home/showcase/HomeShowcaseImages";
import TextBadge from "@/components/TextBadge";
import { Button } from "@/components/ui/button";
import { TypographyH2 } from "@/components/ui/typography";
import useI18n from "@/hooks/useI18n";
import HomeShowcaseList from "./HomeShowcaseList";

export default function HomeShowcaseSection() {
  const { t } = useI18n();

  return (
    <section className="py-24 bg-white dark:bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <HomeShowcaseImages />
          <div>
            <TextBadge className="font-bold uppercase tracking-widest mb-6">
              {t("home.showcase.badge")}
            </TextBadge>
            <TypographyH2 className="text-4xl font-black text-navy dark:text-white mb-8">
              {t("home.showcase.title")}
            </TypographyH2>
            <HomeShowcaseList />
            <Button size={"lg"} className="mt-12">
              {t("home.showcase.button")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
