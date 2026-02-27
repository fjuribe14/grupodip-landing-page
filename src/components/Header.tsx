import { CompassIcon } from "lucide-react";
import { Link } from "react-router";
import ToggleTheme from "@/components/ToggleTheme";
import { Button } from "@/components/ui/button";
import { TypographyH1 } from "@/components/ui/typography";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between gap-5">
        <div className="flex items-center gap-1">
          <CompassIcon className="size-6 md:size-8" />
          <TypographyH1>Grupo Dip</TypographyH1>
        </div>
        <nav className="hidden md:flex items-center gap-10">
          <Link className="text-sm font-semibold" to="/servicios">
            Servicios
          </Link>
          <Link className="text-sm font-semibold" to="/proyectos">
            Proyectos
          </Link>
          <Link className="text-sm font-semibold" to="/nosotros">
            Nosotros
          </Link>
          <Link className="text-sm font-semibold" to="/contacto">
            Contacto
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button className="font-bold">Cotizar Proyecto</Button>
          <ToggleTheme className="hidden md:flex" />
        </div>
      </div>
    </header>
  );
}
