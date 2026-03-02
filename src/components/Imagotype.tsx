import { cva } from "class-variance-authority";
import { CompassIcon } from "lucide-react";
import { TypographyH1 } from "@/components/ui/typography";
import { COMPANY_NAME } from "@/constants";
import { cn } from "@/lib/utils";

const imagotypeFontVariants = cva("", {
  variants: {
    size: {
      sm: "text-sm md:text-md",
      md: "text-md md:text-lg",
      lg: "text-lg md:text-xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const imagotypeIconVariants = cva("", {
  variants: {
    size: {
      sm: "size-4 md:size-5",
      md: "size-5 md:size-6",
      lg: "size-6 md:size-7",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type TImagotypeProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

export default function Imagotype({ className, size }: TImagotypeProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <CompassIcon className={imagotypeIconVariants({ size })} />
      <TypographyH1
        className={cn("uppercase", imagotypeFontVariants({ size }))}
      >
        {COMPANY_NAME}
      </TypographyH1>
    </div>
  );
}
