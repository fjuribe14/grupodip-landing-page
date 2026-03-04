import { Link, useNavigate } from "react-router";
import ToggleLanguage from "@/components/ToggleLanguage";
import ToggleTheme from "@/components/ToggleTheme";
import { Button } from "@/components/ui/button";
import { ACTIONS_TEXT } from "@/constants";
import useActions from "@/hooks/useActions";
import useI18n from "@/hooks/useI18n";

export default function HeaderNavbarDesktop() {
  const { t } = useI18n();
  const navigate = useNavigate();
  const { goToWhatsapp } = useActions();

  const links = [
    {
      label: t("navbar.home"),
      path: "/",
      callBack: handleNavigateTo,
    },
    {
      label: t("navbar.services"),
      path: "/",
      callBack: handleScrollToServices,
    },
    {
      label: t("navbar.about"),
      path: "/about",
      callBack: handleNavigateTo,
    },
    {
      label: t("navbar.contact"),
      path: "/contact",
      callBack: handleNavigateTo,
    },
  ];

  function handleNavigateTo(path: string) {
    navigate(path);
  }

  function handleScrollToServices() {
    navigate("/");
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <nav className="hidden md:flex items-center gap-10">
        {links.map((link) => (
          <Link
            key={link.label}
            to={link.path}
            className="text-sm font-semibold"
            onClick={() => link.callBack(link.path)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="hidden md:flex items-center gap-4">
        <Button onClick={() => goToWhatsapp(ACTIONS_TEXT.quoteProject)}>
          {t("navbar.button")}
        </Button>
        <ToggleTheme />
        <ToggleLanguage />
      </div>
    </>
  );
}
