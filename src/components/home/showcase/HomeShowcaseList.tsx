import { CheckIcon } from "lucide-react";
import { TypographyLarge, TypographyMuted } from "@/components/ui/typography";
import useI18n from "@/hooks/useI18n";

export default function HomeShowcaseList() {
  const { t } = useI18n();

  return (
    <ul className="space-y-6">
      {Array.from({ length: 3 }).map((_, i) => {
        const title = t(`home.showcase.list.${i}.title`);
        const description = t(`home.showcase.list.${i}.description`);
        const key = title.toLowerCase().replace(" ", "-");

        return (
          <li key={key} className="flex gap-4">
            <div className="shrink-0 w-8 h-8 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center">
              <CheckIcon className="size-3" />
            </div>
            <div className="flex flex-col">
              <TypographyLarge className="font-bold text-navy dark:text-white mb-1">
                {title}
              </TypographyLarge>
              <TypographyMuted className="text-sm">
                {description}
              </TypographyMuted>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
