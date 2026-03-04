import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import HeaderNavbarTrigger from "@/components/header/HeaderNavbarTrigger";
import ToggleLanguage from "@/components/ToggleLanguage";
import ToggleTheme from "@/components/ToggleTheme";
import { Button } from "@/components/ui/button";
import { TypographyH1 } from "@/components/ui/typography";
import { ACTIONS_TEXT } from "@/constants";
import useActions from "@/hooks/useActions";
import useI18n from "@/hooks/useI18n";

export default function HeaderNavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);

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
    setIsOpen(false);
  }

  function handleScrollToServices() {
    navigate("/");
    setIsOpen(false);
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="md:hidden">
      <HeaderNavbarTrigger {...{ isOpen, setIsOpen }} />
      <AnimatePresence>
        {!isOpen ? null : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="fixed flex flex-col gap-6 inset-0 z-10 h-dvh w-dvw bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/95 px-6 py-20">
              <div className="flex flex-col mt-auto gap-10">
                {links.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => link.callBack(link.path)}
                    >
                      <TypographyH1 className="text-3xl font-bold">
                        {link.label}
                      </TypographyH1>
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="mt-auto flex flex-col gap-6">
                <Button onClick={() => goToWhatsapp(ACTIONS_TEXT.quoteProject)}>
                  {t("navbar.button")}
                </Button>
                <div className="flex items-center justify-between">
                  <ToggleTheme />
                  <ToggleLanguage />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
