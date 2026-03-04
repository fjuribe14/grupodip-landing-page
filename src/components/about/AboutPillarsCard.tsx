import { TypographyH3, TypographyMuted } from "@/components/ui/typography";

export type TAboutPillarsCardProps = {
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
};

export default function AboutPillarsCard({
  title,
  description,
  Icon,
}: TAboutPillarsCardProps) {
  return (
    <div className="group min-w-[320px] md:min-w-[380px] bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-silver dark:border-slate-700 hover:border-primary transition-all hover:shadow-xl hover:-translate-y-2 h-full">
      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
        <Icon className="text-3xl text-primary group-hover:text-white" />
      </div>
      <TypographyH3 className="text-xl font-bold text-navy dark:text-white mb-4">
        {title}
      </TypographyH3>
      <TypographyMuted className="mb-6 leading-relaxed">
        {description}
      </TypographyMuted>
    </div>
  );
}
