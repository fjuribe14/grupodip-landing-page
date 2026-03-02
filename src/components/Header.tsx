import { Link } from "react-router";
import Imagotype from "@/components/Imagotype";
import ToggleLanguage from "@/components/ToggleLanguage";
import ToggleTheme from "@/components/ToggleTheme";
import { Button } from "@/components/ui/button";
import useI18n from "@/hooks/useI18n";

export default function Header() {
  const { t } = useI18n();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between gap-5">
        <Imagotype size={"lg"} />
        <nav className="hidden md:flex items-center gap-10">
          <Link className="text-sm font-semibold" to="/servicios">
            {t("navbar.services")}
          </Link>
          <Link className="text-sm font-semibold" to="/proyectos">
            {t("navbar.projects")}
          </Link>
          <Link className="text-sm font-semibold" to="/nosotros">
            {t("navbar.about")}
          </Link>
          <Link className="text-sm font-semibold" to="/contacto">
            {t("navbar.contact")}
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button>{t("navbar.button")}</Button>
          <ToggleTheme className="hidden md:flex" />
          <ToggleLanguage className="hidden md:flex" />
        </div>
      </div>
    </header>
  );
}
