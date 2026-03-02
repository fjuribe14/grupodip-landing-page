import {
  EarthIcon,
  GlobeIcon,
  MailIcon,
  MapPinIcon,
  NetworkIcon,
  PhoneIcon,
} from "lucide-react";
import Imagotype from "@/components/Imagotype";
import { TypographyMuted } from "@/components/ui/typography";
import {
  ADDRESS,
  COMPANY_NAME_FULL,
  CURRENT_YEAR,
  EMAIL,
  PHONE_NUMBER,
} from "@/constants";
import useI18n from "@/hooks/useI18n";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-background border-t py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Imagotype size="md" className="text-navy dark:text-white mb-6" />
          <TypographyMuted className="text-sm leading-relaxed">
            {t("footer.description")}
          </TypographyMuted>
        </div>
        <div>
          <h6 className="font-bold text-navy dark:text-white mb-6 uppercase tracking-widest text-xs">
            {t("footer.links.services.title")}
          </h6>
          <ul className="space-y-3 text-sm">
            <li>
              <a className="hover:text-primary transition-colors" href="/">
                <TypographyMuted>
                  {t("footer.links.services.items.0")}
                </TypographyMuted>
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="/">
                <TypographyMuted>
                  {t("footer.links.services.items.1")}
                </TypographyMuted>
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="/">
                <TypographyMuted>
                  {t("footer.links.services.items.2")}
                </TypographyMuted>
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="/">
                <TypographyMuted>
                  {t("footer.links.services.items.3")}
                </TypographyMuted>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold text-navy dark:text-white mb-6 uppercase tracking-widest text-xs">
            {t("footer.links.company.title")}
          </h6>
          <ul className="space-y-3 text-sm">
            <li>
              <a className="hover:text-primary transition-colors" href="/">
                <TypographyMuted>
                  {t("footer.links.company.items.0")}
                </TypographyMuted>
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="/">
                <TypographyMuted>
                  {t("footer.links.company.items.1")}
                </TypographyMuted>
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="/">
                <TypographyMuted>
                  {t("footer.links.company.items.2")}
                </TypographyMuted>
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="/">
                <TypographyMuted>
                  {t("footer.links.company.items.3")}
                </TypographyMuted>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold text-navy dark:text-white mb-6 uppercase tracking-widest text-xs">
            {t("footer.links.contact.title")}
          </h6>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <PhoneIcon className="size-4 text-primary shrink-0" />
              <TypographyMuted className="text-sm">
                {PHONE_NUMBER}
              </TypographyMuted>
            </li>
            <li className="flex items-start gap-3">
              <MapPinIcon className="size-4 text-primary shrink-0" />
              <TypographyMuted className="text-sm">{ADDRESS}</TypographyMuted>
            </li>
            <li className="flex items-center gap-3">
              <MailIcon className="size-4 text-primary shrink-0" />
              <TypographyMuted className="text-sm">{EMAIL}</TypographyMuted>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
        <TypographyMuted className="text-xs">
          © {CURRENT_YEAR} {COMPANY_NAME_FULL} {t("footer.copyright")}.
        </TypographyMuted>
        <div className="flex gap-6">
          <a className="text-muted-foreground hover:text-primary" href="/">
            <GlobeIcon className="size-5" />
          </a>
          <a className="text-muted-foreground hover:text-primary" href="/">
            <EarthIcon className="size-5" />
          </a>
          <a className="text-muted-foreground hover:text-primary" href="/">
            <NetworkIcon className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
