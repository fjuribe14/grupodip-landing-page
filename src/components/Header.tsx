import { Link, useNavigate } from "react-router";
import Imagotype from "@/components/Imagotype";
import ToggleLanguage from "@/components/ToggleLanguage";
import ToggleTheme from "@/components/ToggleTheme";
import { Button } from "@/components/ui/button";
import { ACTIONS_TEXT } from "@/constants";
import useActions from "@/hooks/useActions";
import useI18n from "@/hooks/useI18n";

export default function Header() {
  const { t } = useI18n();
  const { goToWhatsapp } = useActions();
  const navigate = useNavigate();

  const handleScrollToServices = () => {
    navigate("/");
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between gap-5">
        <Link to="/">
          <Imagotype size={"lg"} />
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          <Link className="text-sm font-semibold" to="/">
            {t("navbar.home")}
          </Link>
          {/* biome-ignore lint/a11y/useButtonType: false positive */}
          <button
            className="text-sm font-semibold cursor-pointer"
            onClick={handleScrollToServices}
          >
            {t("navbar.services")}
          </button>
          <Link className="text-sm font-semibold" to="/about">
            {t("navbar.about")}
          </Link>
          <Link className="text-sm font-semibold" to="/contact">
            {t("navbar.contact")}
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button onClick={() => goToWhatsapp(ACTIONS_TEXT.quoteProject)}>
            {t("navbar.button")}
          </Button>
          <ToggleTheme className="hidden md:flex" />
          <ToggleLanguage className="hidden md:flex" />
        </div>
      </div>
    </header>
  );
}
