import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export type TI18nLanguage = "en" | "es";

export default function useI18n() {
  const { t, i18n } = useTranslation();

  const currentLanguage = useMemo(() => i18n.language, [i18n.language]);

  const changeLanguage = (lng: TI18nLanguage) => {
    i18n.changeLanguage(lng);
  };

  return { t, changeLanguage, currentLanguage };
}
