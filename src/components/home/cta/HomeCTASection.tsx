import { Button } from "@/components/ui/button";
import { TypographyH2, TypographyMuted } from "@/components/ui/typography";
import useI18n from "@/hooks/useI18n";

export default function HomeCTASection() {
  const { t } = useI18n();

  return (
    <section className="py-20 bg-neutral-100 dark:bg-neutral-900/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-navy rounded-3xl p-12 overflow-hidden flex flex-col items-center text-center">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-radial from-primary to-transparent"></div>
          <TypographyH2 className="text-3xl md:text-5xl font-black text-white mb-6 relative z-10 max-w-3xl leading-tight">
            {t("home.cta.title")}
          </TypographyH2>
          <TypographyMuted className="text-slate-400 text-lg mb-10 relative z-10 max-w-2xl">
            {t("home.cta.description")}
          </TypographyMuted>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <Button
              size={"lg"}
              className="bg-primary text-white px-10 py-4 rounded-lg font-bold hover:bg-blue-700 transition-all"
            >
              {t("home.cta.button1")}
            </Button>
            <Button
              size={"lg"}
              className="bg-white/10 text-white border border-white/20 px-10 py-4 rounded-lg font-bold hover:bg-white/20 transition-all"
            >
              {t("home.cta.button2")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
