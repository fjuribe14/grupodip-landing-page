import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useEffect, useRef } from "react";

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
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest: number) => {
    if (type === "double") {
      return Math.round(latest * 100) / 100;
    }

    return Math.round(latest);
  });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, value, {
      delay,
      duration,
      ease: "easeInOut",
    });
    return controls.stop;
  }, [isInView, value, count, duration, delay]);

  return (
    <div ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix ?? null}
    </div>
  );
}
