import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

export type TCounterAnimationType = "double" | "number";

export type TCounterAnimationProps = {
  value: number;
  suffix?: string;
  delay?: number;
  duration?: number;
  className?: string;
  type?: TCounterAnimationType;
};

export default function CounterAnimation({
  value,
  suffix,
  className,
  delay = 0,
  duration = 1.5,
  type = "number",
}: TCounterAnimationProps) {
  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest: number) => {
    if (type === "double") {
      return Math.round(latest * 100) / 100;
    }

    return Math.round(latest);
  });

  useEffect(() => {
    const controls = animate(count, value, {
      delay,
      duration,
      ease: "easeInOut",
    });
    return controls.stop;
  }, [value, count, duration, delay]);

  return (
    <div className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix ?? null}
    </div>
  );
}
