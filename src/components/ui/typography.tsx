import { cn } from "@/lib/utils";

type TypographyProps = {
  children?: React.ReactNode;
  className?: string;
  ref?: React.Ref<HTMLHeadingElement>;
} & React.HTMLAttributes<HTMLHeadingElement>;

export function TypographyH1({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-center text-2xl md:text-4xl font-extrabold tracking-tight text-balance",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <h2
      className={cn(
        "scroll-m-20 pb-2 text-2xl md:text-3xl font-semibold tracking-tight first:mt-0",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function TypographyH3({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-xl md:text-2xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function TypographyH4({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-lg md:text-xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    >
      {children}
    </h4>
  );
}

export function TypographyP({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <p className={cn("leading-7", className)} {...props}>
      {children}
    </p>
  );
}

export function TypographyLead({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <p
      className={cn("text-muted-foreground text-lg md:text-xl", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function TypographyLarge({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <div
      className={cn("text-base md:text-lg font-semibold", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function TypographySmall({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <small
      className={cn("text-xs md:text-sm font-medium leading-none", className)}
      {...props}
    >
      {children}
    </small>
  );
}

export function TypographyMuted({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <TypographyP className={cn("text-muted-foreground", className)} {...props}>
      {children}
    </TypographyP>
  );
}
