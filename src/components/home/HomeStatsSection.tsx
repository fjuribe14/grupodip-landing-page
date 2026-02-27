import CounterAnimation from "@/components/CounterAnimation";
import { TypographyH2, TypographyMuted } from "@/components/ui/typography";

export default function HomeStatsSection() {
  const textPrimaryClass = "text-4xl md:text-5xl font-black text-primary";
  const textMutedClass =
    "text-sm font-semibold uppercase text-primary-foreground/70";

  return (
    <section className="py-12 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start border-b md:border-l md:border-b-0 border-primary/30 pb-6 md:pl-6 md:pb-0">
            <TypographyH2 className={textPrimaryClass}>
              <CounterAnimation suffix="+" value={12} delay={0.5} />
            </TypographyH2>
            <TypographyMuted className={textMutedClass}>
              Años de Trayectoria
            </TypographyMuted>
          </div>
          <div className="flex flex-col items-center md:items-start border-b md:border-l md:border-b-0 border-primary/30 pb-6 md:pl-6 md:pb-0">
            <TypographyH2 className={textPrimaryClass}>
              <CounterAnimation suffix="+" value={150} delay={0.75} />
            </TypographyH2>
            <TypographyMuted className={textMutedClass}>
              Proyectos Exitosos
            </TypographyMuted>
          </div>
          <div className="flex flex-col items-center md:items-start border-b md:border-l md:border-b-0 border-primary/30 pb-6 md:pl-6 md:pb-0">
            <TypographyH2 className={textPrimaryClass}>
              <CounterAnimation
                suffix="k"
                value={3.5}
                duration={3}
                type="double"
                delay={1}
              />
            </TypographyH2>
            <TypographyMuted className={textMutedClass}>
              Toneladas de Acero
            </TypographyMuted>
          </div>
          <div className="flex flex-col items-center md:items-start border-b md:border-l md:border-b-0 border-primary/30 pb-6 md:pl-6 md:pb-0">
            <TypographyH2 className={textPrimaryClass}>24/7</TypographyH2>
            <TypographyMuted className={textMutedClass}>
              Soporte Técnico
            </TypographyMuted>
          </div>
        </div>
      </div>
    </section>
  );
}
