import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary",
  {
    variants: {
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  },
);

type TextBadgeProps = {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
};

export default function TextBadge({
  children,
  className,
  size,
}: TextBadgeProps) {
  return (
    <span className={cn(badgeVariants({ size }), className)}>{children}</span>
  );
}
