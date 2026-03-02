import type { TCounterAnimationProps } from "@/components/CounterAnimation";
import CounterAnimation from "@/components/CounterAnimation";
import { TypographyH2, TypographyMuted } from "@/components/ui/typography";

export type TStatsItemProps = Omit<TCounterAnimationProps, "value"> & {
  label: string;
  value: number | string;
};

export default function HomeStatsItem(props: TStatsItemProps) {
  const textPrimaryClass = "text-4xl md:text-5xl font-black text-primary";
  const textMutedClass =
    "text-sm font-semibold uppercase text-primary-foreground/70";

  const { label, value, suffix, delay, type } = props;

  return (
    <div
      key={label}
      className="flex flex-col items-center md:items-start border-b md:border-l md:border-b-0 border-primary/30 pb-6 md:pl-6 md:pb-0"
    >
      <TypographyH2 className={textPrimaryClass}>
        {typeof value === "number" ? (
          <CounterAnimation
            suffix={suffix}
            value={value}
            delay={delay}
            type={type}
          />
        ) : (
          value
        )}
      </TypographyH2>
      <TypographyMuted className={textMutedClass}>{label}</TypographyMuted>
    </div>
  );
}
