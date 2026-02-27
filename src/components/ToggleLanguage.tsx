import { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import useI18n from "@/hooks/useI18n";
import { cn } from "@/lib/utils";

export default function ToggleLanguage({ className }: { className?: string }) {
  const buttonClass = "border font-bold text-xs";
  const { changeLanguage, currentLanguage } = useI18n();

  const isSelected = useCallback(
    (lng: "es" | "en") => currentLanguage === lng,
    [currentLanguage],
  );

  return (
    <ButtonGroup className={className}>
      <Button
        size="icon"
        onClick={() => changeLanguage("es")}
        variant={"ghost"}
        className={cn(buttonClass, isSelected("es") && "bg-accent")}
      >
        ES
      </Button>
      <Button
        size="icon"
        onClick={() => changeLanguage("en")}
        variant={"ghost"}
        className={cn(buttonClass, isSelected("en") && "bg-accent")}
      >
        EN
      </Button>
    </ButtonGroup>
  );
}
